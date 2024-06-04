import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { client } from "./utils";

export type User = {
  email: string;
};

type Error = {
  message: string;
};

type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  password: string;
};
export function getAccessToken() {
  return localStorage.getItem("token");
}

export function setAccessToken(token: string) {
  localStorage.setItem("token", token);
}

export function removeTokens() {
  localStorage.removeItem("token");
}

export function useLogin() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      client("auth/login", {
        method: "DELETE",
        data: { credentials },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-reservations"] });
      //toast.success("Reservation deleted successfully");
    },
  });

  setAccessToken(mutation?.data?.value?.token);

  return mutation;
}

export async function register(credentials: RegisterCredentials) {
  return await client("user/create", { method: "POST", data: credentials });
}

export async function logout() {
  removeTokens();
  window.location.href = "/";

  return null;
}

export function useUser() {
  const token = getAccessToken();

  return useQuery({
    queryKey: ["auth-me"],
    queryFn: async () => {
      return await client("auth/me");
    },
    enabled: !!token,
  });
}
