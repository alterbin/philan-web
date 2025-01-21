"use client";

import { Button, Input, InputGoogleAutocomplete } from "../ui";
import { postQueries } from "@/src/services/queries";
import { useFormik } from "formik";
import { z } from "zod";
import { zodToFormikAdapter } from "@/src/utils/zodToFormikAdapter";
import { errorParser } from "@/src/utils";
import InputLocationAutocomplete from "../ui/input-google-autocomplete/location-auto-complete";
import Autocomplete from "../ui/input-google-autocomplete/location-auto-complete";
import { createGivingSchema } from "@/src/services/queries/post/schemas";

type PostSchema = z.infer<typeof createGivingSchema>;

const initialValues = {
  name: "",
  address: "",
  description: "",
  contact: "",
};

export default function NewPostForm() {
  const { mutate, isPending } = postQueries.Create();

  const formikProps = {
    initialValues,
    validate: zodToFormikAdapter(createGivingSchema),
    onSubmit: (values: PostSchema) => {
      mutate({
        ...values,
        photos: [],
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
    setFieldValue,
  } = useFormik<PostSchema>(formikProps);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

      <Button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Create Post"}
      </Button>
    </form>
  );
}
