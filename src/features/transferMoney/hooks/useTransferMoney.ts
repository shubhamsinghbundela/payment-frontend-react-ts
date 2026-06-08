import { useMutation } from "@tanstack/react-query";
import { transferMoney } from "../api/account.api";

export const useTransferMoney = () => {
  return useMutation({
    mutationFn: transferMoney,
  });
};
