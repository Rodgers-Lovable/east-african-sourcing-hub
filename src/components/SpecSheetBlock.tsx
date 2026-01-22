import type { ReactNode } from "react";

export type SpecRow = {
  label: string;
  value: ReactNode;
};

interface SpecSheetBlockProps {
  title: string;
  description?: string;
  rows: SpecRow[];
}

export const SpecSheetBlock = ({ title, description, rows }: SpecSheetBlockProps) => {
  return (
    <section className="trade-card bg-background">
      <header className="flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-lg">{title}</h3>
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rows.map((row) => (
          <div key={row.label} className="rounded-md border border-border p-4">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{row.label}</div>
            <div className="mt-1 text-sm text-foreground">{row.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
