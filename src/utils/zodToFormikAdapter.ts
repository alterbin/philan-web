import { z } from "zod";

export const zodToFormikAdapter = (schema: z.ZodSchema) => {
  return async (values: any) => {
    try {
      schema.parse(values);
      return {};
    } catch (error: any) {
      const fieldErrors = error?.formErrors?.fieldErrors || {};
      return fieldErrors;
    }
  };
};

 

