import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { getEntry } from "@/lib/data";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { TagBadge } from "@/components/journal/TagBadge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type EntryPageProps = {
  params: {
    id: string;
  };
};

export default function EntryPage({ params }: EntryPageProps) {
  const entry = getEntry(params.id);

  if (!entry) {
    notFound();
  }

  return (
    <AppShell>
      <PageHeader title="View Entry" />
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-3xl">{entry.title}</CardTitle>
                <CardDescription>
                    {format(parseISO(entry.date), "EEEE, MMMM d, yyyy")}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="prose prose-stone dark:prose-invert max-w-none text-foreground whitespace-pre-wrap">
                    {entry.content}
                </div>
            </CardContent>
            <CardFooter>
                 <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                    ))}
                </div>
            </CardFooter>
        </Card>
      </main>
    </AppShell>
  );
}
