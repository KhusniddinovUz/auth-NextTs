import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface loginUserProps {
  email: string;
  password: string;
}

export interface user {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
    email_verified: boolean;
  };
}

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zeroni.herokuapp.com",
  }),
  endpoints: () => ({}),
});

export const authApi = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    loginUser: mutation<user, loginUserProps>({
      query: ({ email, password }) => ({
        url: "/api/login/",
        method: "POST",
        body: { username: email, password },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
