import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
  path: string;
  featured?: boolean;
}

const ArticleCard = ({ 
  title, 
  excerpt, 
  category, 
  date, 
  image, 
  path,
  featured = false 
}: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <Link to={path}>
        {image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardContent className="p-4 md:p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="text-primary font-semibold">{category}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </span>
          </div>
          <h3 className={cn(
            "font-bold group-hover:text-primary transition-colors mb-2 line-clamp-2",
            featured ? "text-xl md:text-2xl" : "text-lg"
          )}>
            {title}
          </h3>
          <p className="text-sm text-foreground/80 line-clamp-3">
            {excerpt}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
};

// Helper function (already imported from lib/utils)
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default ArticleCard;
