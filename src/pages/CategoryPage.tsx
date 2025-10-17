import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumb from "@/components/Breadcrumb";
import AdSpace from "@/components/AdSpace";

interface CategoryConfig {
  name: string;
  description: string;
}

const categories: Record<string, CategoryConfig> = {
  noticias: {
    name: "Notícias Locais",
    description: "Fique por dentro das últimas notícias e acontecimentos em Alphaville",
  },
  "custo-de-vida": {
    name: "Custo de Vida",
    description: "Informações sobre custos, preços e economia em Alphaville",
  },
  "comercio-servicos": {
    name: "Comércio & Serviços",
    description: "Guia completo de comércio e serviços disponíveis na região",
  },
  imoveis: {
    name: "Imóveis",
    description: "Mercado imobiliário, dicas de compra, venda e locação",
  },
  educacao: {
    name: "Educação",
    description: "Tudo sobre escolas, cursos e educação em Alphaville",
  },
  saude: {
    name: "Saúde",
    description: "Informações sobre saúde, bem-estar e qualidade de vida",
  },
  eventos: {
    name: "Eventos",
    description: "Agenda cultural, festas e eventos em Alphaville",
  },
  transporte: {
    name: "Transporte",
    description: "Mobilidade urbana, trânsito e transporte na região",
  },
  guia: {
    name: "Guia da Região",
    description: "Guia completo com restaurantes, lazer e atrações de Alphaville",
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryConfig = category ? categories[category] : null;

  // Sample articles for the category (in a real app, this would be filtered by category)
  const categoryArticles = [
    {
      title: "Alphaville Lidera Ranking de Melhor Qualidade de Vida",
      excerpt: "Região se destaca em infraestrutura, segurança e serviços na Grande São Paulo.",
      category: categoryConfig?.name || "Categoria",
      date: "15 Out 2025",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600",
      path: "/artigo/alphaville-ranking-qualidade-vida",
    },
    {
      title: "Novo Shopping em Alphaville: Tudo o Que Você Precisa Saber",
      excerpt: "Conheça as lojas, restaurantes e atrações do mais novo empreendimento comercial.",
      category: categoryConfig?.name || "Categoria",
      date: "11 Out 2025",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600",
      path: "/artigo/novo-shopping-alphaville",
    },
    {
      title: "Festival Cultural de Alphaville Anuncia Programação 2024",
      excerpt: "Música, teatro, gastronomia e arte marcam a 15ª edição do festival.",
      category: categoryConfig?.name || "Categoria",
      date: "8 Out 2025",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
      path: "/artigo/festival-cultural-alphaville",
    },
    {
      title: "Mercado Imobiliário: Valorização de Imóveis em Alphaville",
      excerpt: "Análise mostra crescimento de 12% na valorização nos últimos 12 meses.",
      category: categoryConfig?.name || "Categoria",
      date: "7 Out 2025",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
      path: "/artigo/valorizacao-imoveis",
    },
    {
      title: "Gastronomia: Novos Restaurantes Asiáticos em Alphaville",
      excerpt: "Culinária asiática ganha força com abertura de restaurantes japoneses e tailandeses.",
      category: categoryConfig?.name || "Categoria",
      date: "6 Out 2025",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
      path: "/artigo/restaurantes-asiaticos",
    },
    {
      title: "Academias de Luxo: As Melhores Opções em Alphaville",
      excerpt: "Conheça as academias premium com estrutura completa e personal trainers.",
      category: categoryConfig?.name || "Categoria",
      date: "9 Out 2025",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
      path: "/artigo/melhores-academias-alphaville",
    },
  ];

  if (!categoryConfig) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container-portal py-12">
          <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
          <p>A categoria que você está procurando não existe.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-card border-b">
          <div className="container-portal py-8">
            <Breadcrumb items={[{ label: categoryConfig.name }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              {categoryConfig.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {categoryConfig.description}
            </p>
          </div>
        </div>

        <div className="container-portal py-8">
          <AdSpace variant="banner" className="mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryArticles.map((article, index) => (
                  <ArticleCard key={index} {...article} />
                ))}
              </div>
            </div>

            <aside>
              <Sidebar />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
