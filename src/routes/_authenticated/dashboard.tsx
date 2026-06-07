import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/Dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  return <div>Dashboard Page</div>;
}
