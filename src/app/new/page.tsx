import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { EntryForm } from "@/components/journal/EntryForm";

export default function NewEntryPage() {
  return (
    <AppShell>
      <PageHeader title="New Entry" />
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <EntryForm />
      </main>
    </AppShell>
  );
}
