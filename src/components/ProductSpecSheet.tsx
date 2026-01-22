import { ArrowRight } from "lucide-react";
import type { OriginProduct } from "@/data/origins";

interface ProductSpecSheetProps {
  product: OriginProduct;
  onEnquire?: (product: OriginProduct) => void;
}

export const ProductSpecSheet = ({ product, onEnquire }: ProductSpecSheetProps) => {
  return (
    <article className="trade-card bg-background">
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-serif text-lg">{product.name}</h4>
            {product.type ? <span className="tag">{product.type}</span> : null}
            {product.score ? <span className="tag-brass">{product.score}</span> : null}
          </div>
          {product.location ? (
            <p className="mt-1 text-sm text-muted-foreground">{product.location}</p>
          ) : null}
        </div>

        {onEnquire ? (
          <button
            type="button"
            onClick={() => onEnquire(product)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Enquire
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : null}
      </header>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-md border border-border p-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">Process</div>
          <div className="mt-1 text-sm">{product.process}</div>
        </div>
        <div className="rounded-md border border-border p-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">Altitude</div>
          <div className="mt-1 text-sm">{product.altitude}</div>
        </div>
        <div className="rounded-md border border-border p-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">Varieties</div>
          <div className="mt-1 text-sm">{product.varieties.join(" / ")}</div>
        </div>
        <div className="sm:col-span-2 lg:col-span-3 rounded-md border border-border p-4">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">Flavor Notes</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.flavorNotes.map((note) => (
              <span key={note} className="tag">
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
