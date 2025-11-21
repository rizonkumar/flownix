"use client";

import {
  CreditCardIcon,
  FolderOpenIcon,
  HistoryIcon,
  KeyIcon,
  LogOutIcon,
  StarIcon,
} from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarMenuItem,
  SidebarMenu,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const menuItems = [
  {
    title: "Home",
    items: [
      {
        title: "Workflows",
        icon: FolderOpenIcon,
        url: "/workflows",
      },
      {
        title: "Executions",
        icon: HistoryIcon,
        url: "/executions",
      },
      {
        title: "Credentials",
        icon: KeyIcon,
        url: "/credentials",
      },
    ],
  },
];

export const AppSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton asChild className="h-10 gap-x-4 px-4">
          <Link href="/" prefetch>
            <Image src="/logos/logo.svg" alt="Flownix" width={30} height={30} />
            <span className="text-sm font-semibold">Flownix</span>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupContent>
              {item.items.map((subItem) => (
                <SidebarMenuButton
                  tooltip={subItem.title}
                  isActive={
                    subItem.url === "/"
                      ? pathname === "/"
                      : pathname.startsWith(subItem.url)
                  }
                  key={subItem.title}
                  asChild
                  className="h-10 gap-x-4 px-4"
                >
                  <Link href={subItem.url} prefetch>
                    <subItem.icon className="size-4" />
                    <span>{subItem.title}</span>
                  </Link>
                </SidebarMenuButton>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Upgrade to Pro"
              className="h-10 gap-x-4 px-4"
              onClick={() => {}}
            >
              <StarIcon className="size-4" />
              <span>Upgrade to Pro</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Billing Portal"
              className="h-10 gap-x-4 px-4"
              onClick={() => {}}
            >
              <CreditCardIcon className="size-4" />
              <span>Billing Portal</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Logout"
              className="h-10 gap-x-4 px-4"
              onClick={() =>
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/login");
                      toast.success("Logged out successfully");
                    },
                    onError: (error) => {
                      toast.error(error.error.message);
                    },
                  },
                })
              }
            >
              <LogOutIcon className="size-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
