// src/features/auth/hooks/useLoginMutation.ts

import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/auth.api";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
