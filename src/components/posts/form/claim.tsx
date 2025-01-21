"use client";

import { Button, Input, Checkbox } from "../../ui";
import { postQueries } from "@/src/services/queries";
import { useFormik } from "formik";
import { z } from "zod";
import { zodToFormikAdapter } from "@/src/utils/zodToFormikAdapter";
import { errorParser } from "@/src/utils";
import { claimGivingsSchema } from "@/src/services/queries/post/schemas";
import Autocomplete from "../../ui/form-control/input-google-autocomplete/location-auto-complete";
import { Textarea } from "../../ui/form-control/textarea";
import { useModals } from "@/src/contexts/modals";

type PostSchema = z.infer<typeof claimGivingsSchema>;

const initialValues = {
  note: "",
  shippingAddress: "",
  contact: "",
  agreedTc: false,
};

type InitialValues = ReturnType<() => typeof initialValues>;

export default function ClaimGivingForm() {
  const { mutate, isPending } = postQueries.Claim();
  const { modals } = useModals();

  const formikProps = {
    initialValues,
    validate: zodToFormikAdapter(claimGivingsSchema),
    onSubmit: ({ agreedTc, ...values }: InitialValues) => {
      mutate({
        ...values,
        givingId: modals?.record?.id,
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
      <div className="grid grid-cols-1 w-full gap-2">
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
        <Autocomplete
          label="Pickup Location"
          name="shippingAddress"
          placeholder="Pickup Address"
          value={values.shippingAddress}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorParser(errors, touched, "shippingAddress")}
        />
      </div>
      <Textarea
        label="Note"
        name="note"
        placeholder="Tell us why you need this so bad"
        value={values.note}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errorParser(errors, touched, "note")}
      />

      <Checkbox
        label="I have read and agree to terms and condition"
        id="agreedTc"
        onChange={handleChange}
        checked={values.agreedTc}
      />

      <Button
        type="submit"
        disabled={!isValid || !dirty || !values?.agreedTc || isPending}
      >
        {isPending ? "Saving..." : "Apply Claim"}
      </Button>
    </form>
  );
}
