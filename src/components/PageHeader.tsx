import { SidebarTrigger } from "@/components/ui/sidebar";

export function PageHeader({ title }: { title: string }) {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <SidebarTrigger className="md:hidden" />
      <h1 className="text-2xl font-headline font-semibold">{title}</h1>
    </header>
  );
}
