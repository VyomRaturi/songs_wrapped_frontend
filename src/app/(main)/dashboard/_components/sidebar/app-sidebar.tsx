"use client";

import Logo from "@/components/icon/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { APP_CONFIG } from "@/config/app-config";
import { rootUser } from "@/data/users";
import { useDashboardState } from "@/hooks/use-dashboard-state";

import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { dashboardTabs, selectedTabId, setSelectedTabId, episodes, selectedEpisodeId, setSelectedEpisodeId } =
    useDashboardState();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <Logo />
                <span className="text-base font-semibold">{APP_CONFIG.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Dashboards Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardTabs.map((tab) => (
                <SidebarMenuItem key={tab.id}>
                  <SidebarMenuButton isActive={selectedTabId === tab.id} onClick={() => setSelectedTabId(tab.id)}>
                    <span>{tab.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Episodes Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Episode</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {episodes.map((ep) => (
                <SidebarMenuItem key={ep.id}>
                  <SidebarMenuButton isActive={selectedEpisodeId === ep.id} onClick={() => setSelectedEpisodeId(ep.id)}>
                    <span>{ep.name}</span>
                    <span className="text-muted-foreground ml-auto text-xs">{ep.week}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={rootUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
