import { useMutation } from "@tanstack/react-query";

import { signupUser, type SignupPayload } from "../api/auth.api";

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: (data: SignupPayload) => signupUser(data),
  });
};
