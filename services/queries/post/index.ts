import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { errorToast, successToast } from "@/services/helper";

import api from "../../api";
import queryKey from "./keys";
import { Post, ReadRequest } from "./types";

const BASE_URL = "/api/posts";

const fetchPosts = (
  options: ReadRequest = {
    page: 1,
    order: "ASC",
    take: 10,
    searchTerm: "",
  }
) => {
  const { page, order, take, searchTerm } = options;
  const url = `${BASE_URL}?page=${page}&order=${order}&take=${take}&searchTerm=${searchTerm}`;

  const response = useQuery({
    queryFn: () => api.get({ url }),
    queryKey: [queryKey.read],
    ...options,
    refetchOnMount: "always",
  });
  if (response.isError) {
    errorToast(response?.error?.message);
  }

  return {
    ...response,
    data: response?.data as Post[],
  };
};

const Create = (options = {}) => {
  const queryClient = useQueryClient();

  const { mutate, ...response } = useMutation({
    mutationFn: api.post,
    mutationKey: [queryKey.create],
    ...options,
    onSuccess: async (data: any) => {
      successToast(data.description);

      await queryClient.invalidateQueries({ queryKey: [queryKey.read] });
    },
    onError: (err: any) => {
      if (err.response && err.response.data && err.response.data.message) {
        errorToast(err.response.data.message);
      } else {
        errorToast("Something went wrong");
      }
    },
  });
  return {
    ...response,
    mutate: (body: Partial<Post>) => {
      mutate({ url: `${BASE_URL}`, body: { ...body } });
    },
  };
};

export const postQueries = {
  fetchPosts,
  Create,
};
