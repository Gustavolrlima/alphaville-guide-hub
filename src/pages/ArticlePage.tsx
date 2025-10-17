import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";
import AdSpace from "@/components/AdSpace";
import { Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  slug: string;
  title: string;
  category: string;
  categoryPath: string;
  date: string;
  author: string;
  image: string;
  content: string[];
}

const articles: Record<string, Article> = {
  "alphaville-ranking-qualidade-vida": {
    slug: "alphaville-ranking-qualidade-vida",
    title: "Alphaville Lidera Ranking de Melhor Qualidade de Vida na Grande São Paulo",
    category: "Notícias Locais",
    categoryPath: "/noticias",
    date: "15 de Outubro de 2025",
    author: "Portal Alphaville",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200",
    content: [
      "Alphaville se consolidou como a região com melhor qualidade de vida na Grande São Paulo, segundo estudo divulgado recentemente pelo Instituto de Pesquisas Urbanas. A pesquisa avaliou mais de 50 indicadores em diferentes regiões metropolitanas, incluindo infraestrutura, segurança, educação, saúde e lazer.",
      "Os resultados mostram que Alphaville se destaca principalmente nos quesitos de segurança privada, com índices 70% superiores à média da região metropolitana, e na qualidade dos serviços educacionais, onde 95% das escolas são classificadas como de alto padrão.",
      "A infraestrutura comercial também foi um ponto forte destacado no levantamento. A região conta com mais de 15 shopping centers, centenas de restaurantes e uma ampla variedade de serviços especializados. 'Alphaville oferece tudo que uma grande cidade tem, mas com a tranquilidade e organização de uma cidade planejada', afirma o coordenador do estudo, Dr. Ricardo Mendes.",
      "O acesso facilitado às principais vias da região metropolitana, como Castelo Branco e Rodoanel, também contribuiu para a boa pontuação nos critérios de mobilidade urbana. Apesar do trânsito característico da Grande São Paulo, moradores de Alphaville relatam tempo médio de deslocamento 20% menor em comparação a outras regiões.",
      "Os investimentos contínuos em áreas verdes e espaços de lazer foram outro destaque. A região conta com parques, ciclovias e áreas de convivência bem mantidas, que proporcionam qualidade de vida aos moradores de todas as faixas etárias.",
      "O mercado imobiliário local reflete essa valorização. Segundo dados da pesquisa, imóveis em Alphaville tiveram valorização média de 12% no último ano, índice superior à média da região metropolitana.",
    ],
  },
  "melhores-restaurantes-alphaville": {
    slug: "melhores-restaurantes-alphaville",
    title: "Guia Completo: Melhores Restaurantes de Alphaville 2024",
    category: "Guia da Região",
    categoryPath: "/guia",
    date: "14 de Outubro de 2025",
    author: "Portal Alphaville",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    content: [
      "Alphaville se tornou um verdadeiro polo gastronômico na região metropolitana de São Paulo. Com opções que vão desde restaurantes sofisticados até charmosas cafeterias, a região oferece experiências culinárias para todos os gostos e ocasiões.",
      "Para os amantes da culinária italiana, o Bella Tavola é parada obrigatória. Localizado no Alpha Square, o restaurante combina receitas tradicionais com toques contemporâneos. O ambiente elegante e o atendimento impecável fazem do local a escolha perfeita para jantares especiais. Destaque para o Risotto al Tartufo e a carta de vinhos cuidadosamente selecionada.",
      "Quem busca a autêntica culinária japonesa encontra no Matsuri uma das melhores experiências da região. O restaurante oferece desde sushis e sashimis frescos até pratos quentes da culinária japonesa. O rodízio executivo no almoço é uma excelente opção custo-benefício.",
      "Para os apreciadores de carnes nobres, a Churrascaria Nobre é referência há mais de 10 anos em Alphaville. Com cortes premium e um buffet de saladas e acompanhamentos de alto nível, o restaurante mantém a tradição das churrascarias gaúchas com excelência.",
      "O Café du Marché conquistou os moradores com seus brunchs de fim de semana. A cafeteria oferece pães artesanais, doces franceses e um cardápio variado de cafés especiais. O ambiente descontraído e a decoração charmosa fazem do local o ponto de encontro favorito aos domingos.",
      "Para quem prefere opções mais leves e saudáveis, o Green Bowl se destaca com seu menu vegetariano e vegano criativo. Bowls coloridos, sucos detox e sobremesas sem açúcar refinado são alguns dos destaques.",
      "A cena gastronômica de Alphaville está em constante evolução, com novos restaurantes abrindo regularmente. A diversidade de opções garante que moradores e visitantes sempre encontrem novidades para explorar.",
    ],
  },
  "custo-aluguel-alphaville": {
    slug: "custo-aluguel-alphaville",
    title: "Custo Médio de Aluguel em Alphaville: Análise Detalhada",
    category: "Custo de Vida",
    categoryPath: "/custo-de-vida",
    date: "13 de Outubro de 2025",
    author: "Portal Alphaville",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
    content: [
      "O mercado de locação em Alphaville apresenta características únicas que refletem a alta qualidade de vida e infraestrutura da região. Este guia completo traz uma análise detalhada dos valores praticados em diferentes tipos de imóveis e condomínios.",
      "Apartamentos de 2 dormitórios em condomínios de padrão médio variam entre R$ 2.800 e R$ 4.200 mensais. Esses imóveis geralmente contam com área de lazer completa, incluindo piscina, academia e salão de festas. O condomínio médio fica entre R$ 650 e R$ 900.",
      "Para imóveis maiores, apartamentos de 3 dormitórios com suíte têm valores entre R$ 4.500 e R$ 7.000. Condomínios de alto padrão com infraestrutura completa (quadras poliesportivas, espaço gourmet, brinquedoteca) podem cobrar taxas condominiais de R$ 1.200 a R$ 1.800.",
      "Casas em condomínios fechados são uma opção muito procurada em Alphaville. Imóveis de 3 dormitórios variam entre R$ 5.000 e R$ 8.500, enquanto casas maiores, com 4 ou mais suítes, podem ultrapassar R$ 12.000 mensais. Os condomínios de casas costumam ter taxas mais elevadas, entre R$ 1.500 e R$ 3.000, devido à maior área comum e serviços de segurança 24 horas.",
      "Studios e apartamentos de 1 dormitório, ideais para profissionais solteiros, têm valores a partir de R$ 1.800 em prédios mais simples, podendo chegar a R$ 3.500 em edifícios novos com localização privilegiada.",
      "É importante considerar que além do aluguel e condomínio, há custos adicionais como IPTU (que em Alphaville varia conforme o município - Barueri ou Santana de Parnaíba), água, luz e gás. O IPTU médio gira em torno de R$ 200 a R$ 500 mensais para apartamentos.",
      "A demanda por imóveis em Alphaville se mantém aquecida, o que garante relativa estabilidade nos valores. Especialistas recomendam considerar a proximidade de comércios, escolas e vias de acesso ao escolher um imóvel na região.",
    ],
  },
  "melhores-escolas-alphaville": {
    slug: "melhores-escolas-alphaville",
    title: "Top 10 Escolas Particulares em Alphaville",
    category: "Educação",
    categoryPath: "/educacao",
    date: "12 de Outubro de 2025",
    author: "Portal Alphaville",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
    content: [
      "Alphaville é reconhecida pela excelência na educação, abrigando algumas das melhores escolas particulares da região metropolitana de São Paulo. Este ranking foi elaborado considerando infraestrutura, metodologia de ensino, corpo docente, resultados acadêmicos e avaliações de pais e alunos.",
      "O Colégio Objetivo Alphaville lidera nossa lista pelo terceiro ano consecutivo. Com infraestrutura de ponta, laboratórios modernos e foco em preparação para vestibulares e ENEM, a escola mantém índices de aprovação superiores a 95% nas principais universidades. A mensalidade para ensino médio varia entre R$ 3.200 e R$ 3.800.",
      "O São Paulo Alphaville se destaca pela metodologia bilíngue integrada desde a educação infantil. Os alunos têm 50% das aulas em inglês, o que proporciona fluência natural no idioma. A escola também oferece programas de intercâmbio e certificações internacionais. Mensalidade média: R$ 4.500 a R$ 5.200.",
      "A Escola Suíço-Brasileira traz uma proposta diferenciada com foco em formação integral e desenvolvimento de competências socioemocionais. Com turmas reduzidas (máximo 20 alunos), oferece atendimento personalizado e acompanhamento individual do desenvolvimento de cada estudante.",
      "O Colégio Visconde de Porto Seguro, tradicional instituição paulistana, inaugurou sua unidade em Alphaville há 5 anos. Com metodologia consolidada e ensino forte em ciências exatas, é referência em aprovações em cursos concorridos de Engenharia e Medicina.",
      "A St. Nicholas School oferece currículo britânico completo e é ideal para famílias que planejam estudos no exterior ou trabalham em empresas multinacionais. Todo o ensino é em inglês, com português como segunda língua.",
      "Outros destaques incluem o Colégio Rio Branco, com forte programa de artes e esportes; o Dante Alighieri, com tradição em ensino de idiomas; e o Pueri Domus, conhecido pela formação humanística.",
      "A escolha da escola ideal depende do perfil da família, valores educacionais e objetivos futuros. Recomenda-se agendar visitas e participar de reuniões pedagógicas antes da decisão final.",
    ],
  },
  "novo-shopping-alphaville": {
    slug: "novo-shopping-alphaville",
    title: "Novo Shopping em Alphaville: Tudo o Que Você Precisa Saber",
    category: "Notícias",
    categoryPath: "/noticias",
    date: "11 de Outubro de 2025",
    author: "Portal Alphaville",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1200",
    content: [
      "Alphaville ganha mais um importante empreendimento comercial com a inauguração do Alphaville Grand Mall, prevista para janeiro de 2026. Com investimento de R$ 800 milhões, o shopping promete ser o maior da região e trazer novidades inéditas para moradores e visitantes.",
      "O projeto arquitetônico moderno conta com 280 lojas distribuídas em três pisos, totalizando 120 mil metros quadrados de área construída. A fachada sustentável possui placas solares que vão suprir 40% da energia consumida pelo empreendimento.",
      "Entre as âncoras confirmadas estão grandes redes como C&A, Renner, Riachuelo e Marisa, além de uma unidade premium da Lojas Americanas. A área de alimentação terá 45 operações, incluindo restaurantes inéditos na região como Outback, Madero e Gendai.",
      "O complexo de cinemas será operado pela Cinemark e contará com 12 salas, incluindo duas salas VIP com poltronas reclináveis e serviço de gastronomia diferenciado. Uma sala IMAX com tecnologia de última geração será a primeira da região.",
      "A área de lazer infantil promete ser um diferencial. Além do tradicional playground, o mall terá uma arena de jogos eletrônicos com simuladores e equipamentos de realidade virtual, área de trampolins e até uma mini pista de kart indoor.",
      "O estacionamento com 3.500 vagas terá sistema inteligente de localização de veículos e carregadores para carros elétricos. A previsão é de geração de 4.000 empregos diretos e indiretos.",
      "A localização estratégica, próxima ao Rodoanel e à Rodovia Castelo Branco, deve atrair público não apenas de Alphaville, mas de toda a região metropolitana. Os empreendedores projetam circulação de 8 milhões de pessoas por ano.",
    ],
  },
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container-portal py-12">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <p>O artigo que você está procurando não existe.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container-portal py-6">
          <Breadcrumb
            items={[
              { label: article.category, path: article.categoryPath },
              { label: article.title },
            ]}
          />
        </div>

        <article className="bg-card">
          <div className="container-portal pb-8">
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance font-serif">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="text-primary font-semibold text-base">{article.category}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
              </div>

              <Button variant="outline" size="sm" className="mb-6">
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>

              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </header>

            {/* Article Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Article Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  {article.content.map((paragraph, index) => (
                    <div key={index}>
                      <p className="mb-6 text-foreground/90 leading-relaxed">
                        {paragraph}
                      </p>
                      {/* Insert ad after 2nd and 4th paragraphs */}
                      {(index === 1 || index === 3) && (
                        <div className="my-8">
                          <AdSpace variant="inline" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Publicado em {article.date}
                    </span>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <Sidebar />
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
