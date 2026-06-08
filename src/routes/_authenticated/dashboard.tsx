import { MembersTable } from "@/components/members-table";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/Dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <MembersTable />
    </div>
  );
}
