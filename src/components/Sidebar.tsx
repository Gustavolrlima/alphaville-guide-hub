import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AdSpace from "./AdSpace";

interface Article {
  id: string;
  title: string;
  category: string;
  path: string;
}

const Sidebar = () => {
  const popularArticles: Article[] = [
    {
      id: "1",
      title: "Guia Completo: Melhores Restaurantes de Alphaville 2024",
      category: "Guia da Região",
      path: "/artigo/melhores-restaurantes-alphaville"
    },
    {
      id: "2",
      title: "Custo Médio de Aluguel em Alphaville: Análise Detalhada",
      category: "Custo de Vida",
      path: "/artigo/custo-aluguel-alphaville"
    },
    {
      id: "3",
      title: "Top 10 Escolas Particulares em Alphaville",
      category: "Educação",
      path: "/artigo/melhores-escolas-alphaville"
    },
    {
      id: "4",
      title: "Novo Shopping em Alphaville: Tudo o Que Você Precisa Saber",
      category: "Notícias",
      path: "/artigo/novo-shopping-alphaville"
    },
  ];

  const recentArticles: Article[] = [
    {
      id: "5",
      title: "Inauguração de Nova Academia Premium",
      category: "Eventos",
      path: "/artigo/nova-academia-alphaville"
    },
    {
      id: "6",
      title: "Mudanças no Trânsito: Veja as Novas Rotas",
      category: "Transporte",
      path: "/artigo/mudancas-transito"
    },
    {
      id: "7",
      title: "Festival Gastronômico Agita Alphaville",
      category: "Eventos",
      path: "/artigo/festival-gastronomico"
    },
  ];

  const categories = [
    "Notícias Locais",
    "Custo de Vida",
    "Comércio & Serviços",
    "Imóveis",
    "Educação",
    "Saúde",
    "Eventos",
    "Transporte",
  ];

  return (
    <aside className="space-y-6">
      {/* AdSense Space */}
      <AdSpace variant="sidebar" />

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categorias</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  to={`/${category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors block py-1"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Mais Lidos</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {popularArticles.map((article) => (
              <li key={article.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                <Link to={article.path} className="group">
                  <span className="text-xs text-primary font-medium">{article.category}</span>
                  <h4 className="text-sm font-semibold mt-1 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* AdSense Space */}
      <AdSpace variant="sidebar" />

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Últimas Publicações</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentArticles.map((article) => (
              <li key={article.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                <Link to={article.path} className="group">
                  <span className="text-xs text-primary font-medium">{article.category}</span>
                  <h4 className="text-sm font-semibold mt-1 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
