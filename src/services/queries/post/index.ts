import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { errorToast, successToast } from "@/src/services/helper";

import api from "../../api";
import queryKey from "./keys";
import { CreateGivingDto, Post, Posts, ReadRequest } from "./schemas";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BASE_URL = "/api/posts";

const fetchPosts = (
  options: ReadRequest = {
    page: 1,
    order: "desc",
    take: 10,
    search: "",
  }
) => {
  const { page, order, take, search } = options;
  const url = `${BASE_URL}?page=${page}&order=${order}&take=${take}&search=${search}`;

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
    data: response?.data as Posts,
  };
};

const fetchInfinitePosts = (
  options: ReadRequest = {
    page: 1,
    order: "ASC",
    take: 10,
    search: "",
  }
) => {
  const { page, order, take, search } = options;
  const url = `${BASE_URL}?page=${page}&order=${order}&take=${take}&search=${search}`;

  const {data, ...response} = useInfiniteQuery({
    queryKey: ["givings"],
    queryFn: ({ pageParam }) => api.get({ url }),
    initialPageParam: 1,
    retry: 1,
    getNextPageParam: (lastPage, allPages, pageParam) => {
      const { total } = lastPage;
      const totalFetchedItems = allPages.flatMap((page) => page?.data)?.length;
      return totalFetchedItems < total ? pageParam + 1 : undefined;
    },
  });

  const givings = {
    data: (data?.pages.flatMap((page) => page.data) || []) as Post[],
    total: data?.pages?.[0]?.total || 0 as number,
  };

  return {
    ...response,
    data: givings,
  };
};

const Create = (options = {}) => {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const { mutate, ...response } = useMutation({
    mutationFn: api.post,
    mutationKey: [queryKey.create],
    ...options,
    onSuccess: async (data: any) => {
      successToast(data.description);
      push("/");
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
    mutate: (body: CreateGivingDto) => {
      mutate({ url: `${BASE_URL}`, body: { ...body } });
    },
  };
};

const Del = () => {
  const queryClient = useQueryClient();

  const { mutate, ...response } = useMutation({
    mutationFn: api.delete,
    mutationKey: [queryKey.delete],
    onSuccess: async (data: any) => {
      successToast(data?.description || "Success");
      queryClient.invalidateQueries({
        queryKey: [queryKey.read],
        type: "all",
        exact: false,
      });
      document.body.click();
    },
    onError: (err: any) => {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    },
  });
  return {
    ...response,
    mutate: (body: { id?: string }) => {
      mutate({
        url: `${BASE_URL}`,
        body: { ...body },
      });
    },
  };
};

export const postQueries = {
  fetchPosts,
  Create,
  Del,
  fetchInfinitePosts,
};
