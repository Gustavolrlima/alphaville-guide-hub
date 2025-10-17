import { cn } from "@/lib/utils";

interface AdSpaceProps {
  variant?: "banner" | "sidebar" | "inline" | "footer";
  className?: string;
}

const AdSpace = ({ variant = "banner", className }: AdSpaceProps) => {
  const sizeClasses = {
    banner: "h-24 md:h-32",
    sidebar: "h-64",
    inline: "h-32 md:h-48",
    footer: "h-24",
  };

  return (
    <div
      className={cn(
        "bg-muted border border-border rounded-lg flex items-center justify-center",
        sizeClasses[variant],
        className
      )}
    >
      <div className="text-center text-muted-foreground">
        <p className="text-sm font-medium">Espaço Publicitário</p>
        <p className="text-xs mt-1">Google AdSense</p>
      </div>
    </div>
  );
};

export default AdSpace;
