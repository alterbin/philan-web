import { z } from "zod";

export interface Given {
  id: string;
  address: string;
  description: string;
  name: string;
  photos: string[];
  location: string;
  contact: string;
  userId?: string;
  interests?: string;
  status?: string;
  interestCount: number
}

export type CreateGivingDto = {
  name: string;
  description: string;
  photos: string[];
  address: string;
  contact: string;
};
export interface Givens {
  data: Given[];
  total: number;
}

export interface ReadRequest {
  page?: number;
  order?: string;
  take?: number;
  search?: string | string[] | undefined;
}

export type ClaimGivingDto = {
  note: string;
  shippingAddress: string;
  contact: string;
  givenId: string;
};

export const createGivenSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  description: z.string().min(1, "Description is required"),
  contact: z.string().min(1, "Contact info is required"),
});

export const givenInterestsSchema = z.object({
  shippingAddress: z.string().min(1, "Shipping Address is required"),
  note: z.string().min(1, "Note is required"),
  contact: z.string().min(1, "Contact info is required"),
});
