import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider, useAuth } from "./auth";
import { router } from "./router";
import { useEffect } from "react";

function InnerApp() {
  const auth = useAuth();
  useEffect(() => {
    router.invalidate();
  }, [auth.isAuthenticated]);

  return (
    <RouterProvider
      router={router}
      context={{
        auth,
      }}
    />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}
