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
