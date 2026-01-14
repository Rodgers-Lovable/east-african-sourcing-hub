interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader = ({
  tag,
  title,
  description,
  centered = false,
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {tag && (
        <span className="tag mb-4 inline-block">{tag}</span>
      )}
      <h2 className="text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
