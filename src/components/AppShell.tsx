"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookMarked, CalendarDays, Home, PlusCircle, Tag } from "lucide-react";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";
import { getTags } from "@/lib/data";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // In a real app, you'd fetch this, but we'll use our static function.
  const tags = getTags();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="size-8 text-primary" />
            <span className="text-lg font-headline font-semibold">Simple Journal</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Button asChild className="w-full justify-start" variant="default" size="lg">
                <Link href="/new">
                  <PlusCircle />
                  <span>New Entry</span>
                </Link>
              </Button>
            </SidebarMenuItem>
            <Separator className="my-2" />
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                <Link href="/dashboard">
                  <Home />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/calendar"}>
                <Link href="/calendar">
                  <CalendarDays />
                  <span>Calendar</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2">
              <Tag />
              <span>Tags</span>
            </SidebarGroupLabel>
            <SidebarMenu>
              {tags.map((tag) => (
                <SidebarMenuItem key={tag}>
                  <SidebarMenuButton asChild>
                    {/* In a real app, this would link to a filtered view, e.g., /tags/[tag] */}
                    <Link href="#">
                      <BookMarked />
                      <span className="capitalize">{tag}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
