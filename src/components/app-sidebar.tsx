import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavUser } from "@/components/nav-user";
import { IconChartBar, IconDashboard } from "@tabler/icons-react";
import { NavMain } from "@/components/nav-main";
import { useRouter } from "@tanstack/react-router";

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

export function AppSidebar() {
  const router = useRouter();
  const user: User | null = router?.options?.context?.auth?.user ?? null;
  const data = {
    user: {
      name:
        `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim() || "Guest",
      email: user?.email ?? "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: IconDashboard,
      },
      {
        title: "Check Balance",
        url: "/CheckBalance",
        icon: IconChartBar,
      },
    ],
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <span className="text-base font-semibold">Payments</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
