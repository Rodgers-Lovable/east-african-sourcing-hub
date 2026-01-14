import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as React.FC<{ className?: string }>;

  return (
    <div className="trade-card">
      {IconComponent && (
        <div className="w-10 h-10 flex items-center justify-center text-accent mb-4">
          <IconComponent className="w-6 h-6" />
        </div>
      )}
      <h3 className="font-serif text-xl mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};
