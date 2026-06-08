import api from "@/api/axios";

export const transferMoney = (data: { to: string; amount: number }) => {
  return api.post("/v1/account/transfer", data);
};

export const checkBalance = async () => {
  const response = await api.get("/v1/account/checkBalance");

  return response.data.data;
};
