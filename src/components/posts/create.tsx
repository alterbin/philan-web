"use client";

import Input from "../ui/input";
import Button from "../ui/Button";
import { postQueries } from "@/src/services/queries";
import { useFormik } from "formik";
import { z } from "zod";
import { zodToFormikAdapter } from "@/src/utils/zodToFormikAdapter";
import { errorParser } from "@/src/utils";

const postSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
  location: z.string().min(1, "Location is required"),
  condition: z.string().min(1, "Condition is required"),
  contactInfo: z.string().min(1, "Contact info is required"),
});

type PostSchema = z.infer<typeof postSchema>;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  location: "",
  condition: "",
  contactInfo: "",
};

export default function NewPostForm() {
  const { mutate, isPending } = postQueries.Create();

  const formikProps = {
    enableReinitialize: true,
    initialValues,
    validationSchema: zodToFormikAdapter(postSchema),
    onSubmit: (values: PostSchema) => {
      mutate({
        ...values,
        photos: [],
      });
    },
  };

  const { handleChange, handleSubmit, errors, touched, values, handleBlur } =
    useFormik<PostSchema>(formikProps);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-2">
        <Input
          label="First Name"
          name="firstName"
          placeholder="First Name"
          required
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorParser(errors, touched, "firstName")}
        />
        <Input
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          required
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorParser(errors, touched, "lastName")}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input
          label="Email"
          name="email"
          placeholder="User Email"
          required
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <Input
          label="Location"
          name="location"
          placeholder="Location"
          required
          value={values.location}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorParser(errors, touched, "location")}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input
          label="Condition"
          name="condition"
          placeholder="Condition"
          required
          value={values.condition}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorParser(errors, touched, "condition")}
        />
        <Input
          label="Contact Info"
          name="contactInfo"
          placeholder="Contact Info"
          required
          value={values.contactInfo}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorParser(errors, touched, "contactInfo")}
        />
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Create Post"}
      </Button>
    </form>
  );
}
