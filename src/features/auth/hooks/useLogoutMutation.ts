import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../api/auth.api";
import { clearTokens } from "@/utils/token";

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearTokens();

      queryClient.setQueryData(["me"], null);
    },
  });
};
