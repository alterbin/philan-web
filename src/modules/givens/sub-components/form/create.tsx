"use client";

import { Button, Checkbox, InputGoogleAutocomplete, Input } from "@/src/components/ui";
import { givenQueries } from "@/src/services/queries";
import { useFormik } from "formik";
import { z } from "zod";
import { zodToFormikAdapter } from "@/src/utils/zodToFormikAdapter";
import { errorParser } from "@/src/utils";
import { createGivenSchema } from "@/src/services/queries/givens/schemas";
import { useState } from "react";
import ImageUploader from "../upload";
import Autocomplete from "@/src/components/ui/form-control/input-google-autocomplete/location-auto-complete";


type PostSchema = z.infer<typeof createGivenSchema>;

type InitialValues = ReturnType<() => typeof initialValues>;

const initialValues = {
  name: "",
  address: "",
  description: "",
  contact: "",
  agreedTc: false,
};

export default function NewGivenForm() {
  const { mutate, isPending } = givenQueries.Create();
  const [photos, setPhotos] = useState<string[]>([]);

  const formikProps = {
    initialValues,
    validate: zodToFormikAdapter(createGivenSchema),
    onSubmit: ({ agreedTc, ...values }: InitialValues) => {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-2 gap-2">
        <Input
          label="Item Name"
          name="name"
          placeholder="Item Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorParser(errors, touched, "name")}
        />
        <Input
          label="Contact Info"
          name="contact"
          placeholder="Please enter your email or phone number"
          value={values.contact}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorParser(errors, touched, "contact")}
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
      <div className="grid grid-cols-1 gap-2">
        <Input
          label="Item Condition"
          name="description"
          placeholder="The condition/description of the item"
          required
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorParser(errors, touched, "description")}
        />
      </div>

      <ImageUploader photos={photos} setPhotos={setPhotos} />

      <Checkbox
        label="I have read and agree to terms and condition"
        id="agreedTc"
        onChange={handleChange}
        checked={values.agreedTc}
      />

      <Button
        type="submit"
        disabled={!isValid || !dirty || !values?.agreedTc || photos?.length < 1}
      >
        {isPending ? "Saving..." : "Create Given"}
      </Button>
    </form>
  );
}
