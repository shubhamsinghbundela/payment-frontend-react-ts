import api from "@/api/axios";

export type SignupPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const signupUser = async (data: SignupPayload) => {
  const response = await api.post("/v1/user/signup", data);

  return response.data;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  };
};

export const loginUser = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/v1/user/signin", data);

  return response.data;
};

// auth.api.ts

export const getMe = async () => {
  const response = await api.get("/v1/user/getme");

  return response.data.data.user;
};

export const logout = async () => {
  const res = await api.post("/v1/user/logout");
  return res.data;
};

export const getAllUsers = async () => {
  const response = await api.get("/v1/user/getAllUsers");

  return response.data.data.users;
};
