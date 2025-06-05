import { ReactNode } from "react";

import { cookies } from "next/headers";

import { AppSidebar } from "@/app/(main)/dashboard/_components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { users } from "@/data/users";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { getSidebarVariant, getSidebarCollapsible } from "@/lib/layout-preferences";

import AccountSwitcher from "./_components/sidebar/account-switcher";
import LayoutControls from "./_components/sidebar/layout-controls";

export default async function Layout({ children }: Readonly<{ children: ReactNode }>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  const sidebarVariant = await getSidebarVariant();
  const sidebarCollapsible = await getSidebarCollapsible();

  // Remove theme switcher and force dark mode
  // Get selected tab label for header
  // This is a server component, so we can't use Zustand directly here
  // We'll keep the header generic for now

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar variant={sidebarVariant} collapsible={sidebarCollapsible} />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-1 lg:gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
              <h1 className="text-base font-medium">Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <LayoutControls variant={sidebarVariant} collapsible={sidebarCollapsible} />
              <AccountSwitcher users={users} />
            </div>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
