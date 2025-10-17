import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import AdSpace from "@/components/AdSpace";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Index = () => {
  const featuredArticle = {
    title: "Alphaville Lidera Ranking de Melhor Qualidade de Vida na Grande São Paulo",
    excerpt: "Estudo recente mostra que Alphaville se destaca em infraestrutura, segurança e serviços. Descubra os principais fatores que colocam a região no topo do ranking.",
    category: "Notícias Locais",
    date: "15 Out 2025",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
    path: "/artigo/alphaville-ranking-qualidade-vida",
  };

  const topArticles = [
    {
      title: "Guia Completo: Melhores Restaurantes de Alphaville 2024",
      excerpt: "Descubra os restaurantes imperdíveis em Alphaville, desde culinária italiana até os melhores cafés da região.",
      category: "Guia da Região",
      date: "14 Out 2025",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
      path: "/artigo/melhores-restaurantes-alphaville",
    },
    {
      title: "Custo Médio de Aluguel em Alphaville: Análise Detalhada",
      excerpt: "Conheça os valores médios de aluguel por bairro e tipo de imóvel em Alphaville e Santana de Parnaíba.",
      category: "Custo de Vida",
      date: "13 Out 2025",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
      path: "/artigo/custo-aluguel-alphaville",
    },
    {
      title: "Top 10 Escolas Particulares em Alphaville",
      excerpt: "Ranking das melhores escolas particulares da região com análise de infraestrutura, ensino e valores.",
      category: "Educação",
      date: "12 Out 2025",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
      path: "/artigo/melhores-escolas-alphaville",
    },
  ];

  const recentArticles = [
    {
      title: "Novo Shopping em Alphaville: Tudo o Que Você Precisa Saber",
      excerpt: "Conheça as lojas, restaurantes e atrações do mais novo empreendimento comercial de Alphaville.",
      category: "Notícias",
      date: "11 Out 2025",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600",
      path: "/artigo/novo-shopping-alphaville",
    },
    {
      title: "Transporte Público: Novas Linhas de Ônibus Chegam a Alphaville",
      excerpt: "Ampliação do serviço de transporte público melhora mobilidade para moradores e trabalhadores da região.",
      category: "Transporte",
      date: "10 Out 2025",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600",
      path: "/artigo/novas-linhas-onibus",
    },
    {
      title: "Academias de Luxo: As Melhores Opções em Alphaville",
      excerpt: "Conheça as academias premium com estrutura completa, personal trainers e aulas especializadas.",
      category: "Saúde",
      date: "9 Out 2025",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
      path: "/artigo/melhores-academias-alphaville",
    },
    {
      title: "Festival Cultural de Alphaville Anuncia Programação 2024",
      excerpt: "Música, teatro, gastronomia e arte marcam a 15ª edição do festival mais esperado do ano.",
      category: "Eventos",
      date: "8 Out 2025",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
      path: "/artigo/festival-cultural-alphaville",
    },
    {
      title: "Mercado Imobiliário: Valorização de Imóveis em Alphaville",
      excerpt: "Análise do mercado mostra crescimento de 12% na valorização de imóveis nos últimos 12 meses.",
      category: "Imóveis",
      date: "7 Out 2025",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
      path: "/artigo/valorizacao-imoveis",
    },
    {
      title: "Gastronomia: Novos Restaurantes Asiáticos em Alphaville",
      excerpt: "A culinária asiática ganha força na região com abertura de restaurantes japoneses, tailandeses e chineses.",
      category: "Guia da Região",
      date: "6 Out 2025",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
      path: "/artigo/restaurantes-asiaticos",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Top Ad Banner */}
        <div className="container-portal py-4">
          <AdSpace variant="banner" />
        </div>

        {/* Featured Article */}
        <section className="bg-card border-y">
          <div className="container-portal py-8">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold font-serif">Destaque</h2>
            </div>
            <ArticleCard {...featuredArticle} featured />
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="container-portal py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Top Stories */}
              <section>
                <h2 className="text-2xl font-bold font-serif mb-6 pb-2 border-b-2 border-primary">
                  Principais Notícias
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topArticles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                  ))}
                </div>
              </section>

              {/* Inline Ad */}
              <AdSpace variant="inline" />

              {/* Recent Articles */}
              <section>
                <h2 className="text-2xl font-bold font-serif mb-6 pb-2 border-b-2 border-primary">
                  Últimas Publicações
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recentArticles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                  ))}
                </div>
              </section>

              <div className="text-center py-8">
                <Button asChild variant="outline" size="lg">
                  <Link to="/noticias">Ver Todas as Notícias</Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
