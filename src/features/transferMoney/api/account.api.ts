import api from "@/api/axios";

export const transferMoney = (data: { to: string; amount: number }) => {
  return api.post("/v1/account/transfer", data);
};
