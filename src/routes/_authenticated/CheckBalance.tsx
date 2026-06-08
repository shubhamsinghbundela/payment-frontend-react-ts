import { createFileRoute } from "@tanstack/react-router";
import CheckBalance from "@/components/check-balance";

export const Route = createFileRoute("/_authenticated/CheckBalance")({
  component: CheckBalancePage,
});

function CheckBalancePage() {
  return <CheckBalance />;
}
