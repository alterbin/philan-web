"use client";

import {
  Button,
  Checkbox,
  InputGoogleAutocomplete,
  Input,
  Textarea,
} from "@/src/components/ui";
import { givenQueries } from "@/src/services/queries";
import { useFormik } from "formik";
import { z } from "zod";
import { zodToFormikAdapter } from "@/src/utils/zodToFormikAdapter";
import { errorParser, getLocalStorage, saveLocalStorage } from "@/src/utils";
import { createGivenSchema } from "@/src/services/queries/givens/schemas";
import { useState } from "react";
import ImageUploader from "../upload";
import Autocomplete from "@/src/components/ui/form-control/input-google-autocomplete/location-auto-complete";

type PostSchema = z.infer<typeof createGivenSchema>;

export default function NewGivenForm() {
  const { mutate, isPending } = givenQueries.Create();
  const [photos, setPhotos] = useState<string[]>([]);

  const contact = getLocalStorage("contact_info");

  const initialValues = {
    name: "",
    address: "",
    description: "",
    contact: contact ? String(contact) : "",
    agreedTc: false,
    saveContactInfo: true,
  };

  type InitialValues = ReturnType<() => typeof initialValues>;

  const formikProps = {
    initialValues,
    validate: zodToFormikAdapter(createGivenSchema),
    onSubmit: ({ agreedTc, saveContactInfo, ...values }: InitialValues) => {
      if (saveContactInfo) {
        saveLocalStorage("contact_info", values?.contact);
      } else {
        localStorage.removeItem("contact_info");
      }
      mutate({
        ...values,
        photos,
      });
    },
  };

  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    handleBlur,
    isValid,
    dirty,
  } = useFormik<InitialValues>(formikProps);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 gap-6">
        <Input
          label="Item Name"
          name="name"
          placeholder="Item Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorParser(errors, touched, "name")}
          required
        />
        <div className="grid grid-cols-1 gap-2">
          <Textarea
            label="Condition"
            name="description"
            placeholder="Describe the condition of the item"
            required
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorParser(errors, touched, "description")}
          />
        </div>

        <div className="grid grid-cols-1 gap-2">
          {/* <InputGoogleAutocomplete
          label="Location Address (Nearby)"
          onBlur={handleBlur}
          name="location"
          placeholder=" "
          error={errors.location && touched.location && errors.location}
          onPlaceSelected={(place: any) => {
            setFieldValue("location", place);
          }}
        /> */}
          <Autocomplete
            label="Pickup Location"
            name="address"
            placeholder="Pickup Address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorParser(errors, touched, "address")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Input
            label="Contact Info"
            name="contact"
            placeholder="Please enter your email or phone number"
            value={values.contact}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorParser(errors, touched, "contact")}
            required
          />
          <Checkbox
            label="Remember Contact Information"
            id="saveContactInfo"
            size="sm"
            onChange={handleChange}
            checked={values.saveContactInfo}
          />
        </div>
      </div>

      <ImageUploader
        photos={photos}
        setPhotos={setPhotos}
        label="Item Picture"
        required
      />

      <Checkbox
        label="I have read and agree to terms and condition"
        id="agreedTc"
        onChange={handleChange}
        checked={values.agreedTc}
      />

      <div className="w-full flex justify-center">
        <Button
          type="submit"
          size="lg"
          className="font-semibold !rounded-2xl phone:h-[73px] h-[60px] phone:w-full w-[200px] !capitalize"
          disabled={
            !isValid || !dirty || !values?.agreedTc || photos?.length < 1
          }
        >
          {isPending ? "Saving..." : "Publish Item"}
        </Button>
      </div>
    </form>
  );
}
