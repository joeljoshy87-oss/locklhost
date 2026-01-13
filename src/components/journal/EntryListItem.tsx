import Link from "next/link";
import { format, parseISO } from "date-fns";
import type { JournalEntry } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TagBadge } from "@/components/journal/TagBadge";

export function EntryListItem({ entry }: { entry: JournalEntry }) {
  return (
    <Link href={`/entry/${entry.id}`} className="block transition-transform hover:scale-[1.02]">
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="font-headline">{entry.title}</CardTitle>
          <CardDescription>
            {format(parseISO(entry.date), "MMMM d, yyyy")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {entry.content}
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
