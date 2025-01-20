import config from "@/utils/config";
import fetchWithAuth from "./fetchConfig";

const { BASE_URL: baseUrl } = config;

type Request = {
  url: string;
  body?: any;
  auth?: boolean;
};

const del = async ({ url, body, auth = true }: Request) => {
  const options: RequestInit = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = auth
    ? await fetchWithAuth(url, options)
    : await fetch(baseUrl + url, options);

  if (!response.ok) {
    throw new Error(`Failed to delete: ${response.statusText}`);
  }

  return response.json();
};

const get = async ({ url, auth = true }: Request) => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = auth
    ? await fetchWithAuth(url, options)
    : await fetch(baseUrl + url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return response.json();
};

const post = async ({ url, body, auth = true }: Request) => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = auth
    ? await fetchWithAuth(url, options)
    : await fetch(baseUrl + url, options);

  if (!response.ok) {
    throw new Error(`Failed to post: ${response.statusText}`);
  }

  return response.json();
};

const patch = async ({ url, body, auth = true }: Request) => {
  const options: RequestInit = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = auth
    ? await fetchWithAuth(url, options)
    : await fetch(baseUrl + url, options);

  if (!response.ok) {
    throw new Error(`Failed to patch: ${response.statusText}`);
  }

  return response.json();
};

const put = async ({ url, body, auth = true }: Request) => {
  const options: RequestInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = auth
    ? await fetchWithAuth(url, options)
    : await fetch(baseUrl + url, options);

  if (!response.ok) {
    throw new Error(`Failed to put: ${response.statusText}`);
  }

  return response.json();
};

const api = {
  delete: del,
  get,
  patch,
  post,
  put,
};

export default api;
