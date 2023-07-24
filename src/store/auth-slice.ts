import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@/store/actions/auth";

export interface AuthState {
  isAuth: boolean;
  token?: string;
  username?: string;
  email?: string;
  loading?: boolean;
}

const initialState: AuthState = {
  isAuth: false,
  token: undefined,
  username: undefined,
  email: undefined,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchPending,
      (state, action) => {
        state.loading = true;
      },
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.token = action.payload.token;
        state.email = action.payload.user.email;
        state.username = action.payload.user.username;
      },
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchRejected,
      (state, action) => {
        state.isAuth = false;
        state.token = undefined;
        state.username = undefined;
        state.email = undefined;
        state.loading = false;
      },
    );
    builder.addMatcher(
      authApi.endpoints.signupUser.matchPending,
      (state, action) => {
        state.loading = true;
      },
    );
    builder.addMatcher(
      authApi.endpoints.signupUser.matchFulfilled,
      (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.token = action.payload.token;
        state.email = action.payload.user.email;
        state.username = action.payload.user.username;
      },
    );
    builder.addMatcher(
      authApi.endpoints.signupUser.matchRejected,
      (state, action) => {
        state.isAuth = false;
        state.token = undefined;
        state.username = undefined;
        state.email = undefined;
        state.loading = false;
      },
    );
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
