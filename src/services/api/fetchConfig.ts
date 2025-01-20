import { getLocalStorage, saveLocalStorage } from "@/src/utils";
import routes from "@/src/utils/routes";
import config from "@/src/utils/config";

const baseURL = config.BASE_URL;

const refreshToken = async (originalRequest: RequestInit & { url: string }) => {
  try {
    const token = getLocalStorage<{ refreshToken?: string }>(config.tokenKey);
    const url = `${baseURL}/Account/refresh-token?token=${token?.refreshToken}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.status === 200) {
      // Save new token
      saveLocalStorage(data.data, config.tokenKey);

      // Retry the original request with the new token
      const updatedHeaders = new Headers(originalRequest.headers);
      updatedHeaders.set("Authorization", `Bearer ${data.data?.accessToken}`);

      const retriedResponse = await fetch(originalRequest.url, {
        ...originalRequest,
        headers: updatedHeaders,
      });

      return retriedResponse;
    }

    // Redirect to logout page
    window.location.href = `/?next=${window.location.pathname}`;
    return Promise.reject(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const fetchWithAuth = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const token = getLocalStorage<string>(config.tokenKey);

  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${token || ""}`);

  const request: RequestInit & { url: string } = {
    ...options,
    headers,
    url: `${baseURL}${url}`,
  };

  try {
    const response = await fetch(request.url, request);

    if (
      response.status === 401 &&
      window.location.pathname !== routes.home.path
    ) {
      window.location.href = `${routes.home.path}?next=${window.location.pathname}`;
    }

    if (response.status === 401) {
      // Attempt token refresh
      return await refreshToken(request);
    }

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchWithAuth;
