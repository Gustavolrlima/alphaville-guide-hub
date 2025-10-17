# 📰 Portal Alphaville - Guia Completo

Bem-vindo ao Portal Alphaville! Este é um portal de notícias e informações locais moderno, responsivo e otimizado para SEO.

## 🎯 Visão Geral

Portal completo de notícias e guias sobre Alphaville (Barueri e Santana de Parnaíba) com:
- ✅ Design moderno inspirado em portais como G1 e Exame
- ✅ Sistema de cores vermelho e cinza profissional
- ✅ Totalmente responsivo (mobile-first)
- ✅ Otimizado para SEO e indexação
- ✅ Espaços preparados para Google AdSense
- ✅ Estrutura escalável e fácil de expandir

## 📂 Estrutura de Arquivos

```
src/
├── components/
│   ├── Header.tsx          # Menu superior com busca
│   ├── Footer.tsx          # Rodapé com newsletter e links
│   ├── Sidebar.tsx         # Barra lateral com widgets
│   ├── ArticleCard.tsx     # Card de preview de artigo
│   ├── AdSpace.tsx         # Componente para espaços publicitários
│   └── Breadcrumb.tsx      # Navegação breadcrumb
├── pages/
│   ├── Index.tsx           # Página inicial
│   ├── ArticlePage.tsx     # Template de artigo individual
│   ├── CategoryPage.tsx    # Template de página de categoria
│   └── NotFound.tsx        # Página 404
├── index.css               # Design system e estilos globais
└── App.tsx                 # Configuração de rotas

public/
├── favicon.png             # Ícone do site
├── robots.txt              # Configuração para crawlers
└── sitemap.xml             # Mapa do site para SEO
```

## 🎨 Design System

### Cores Principais (HSL)
- **Primary (Vermelho)**: `hsl(0, 84%, 52%)` - Cor principal do portal
- **Secondary (Cinza Escuro)**: `hsl(0, 0%, 25%)` - Textos e elementos
- **Background**: `hsl(0, 0%, 98%)` - Fundo claro
- **Muted**: `hsl(0, 0%, 95%)` - Fundos secundários

### Tipografia
- **Sans-serif**: Inter - Para textos gerais
- **Serif**: Merriweather - Para títulos e destaques

Todas as cores e estilos estão definidos no `src/index.css` e `tailwind.config.ts`. **NUNCA use cores diretas como `text-white` ou `bg-red-500`** - sempre use os tokens do design system!

## 📝 Como Adicionar Novos Artigos

### 1. Editar o arquivo `src/pages/ArticlePage.tsx`

No objeto `articles`, adicione um novo artigo seguindo este modelo:

```typescript
"slug-do-artigo": {
  slug: "slug-do-artigo",
  title: "Título Completo do Artigo",
  category: "Categoria",
  categoryPath: "/caminho-categoria",
  date: "DD de Mês de YYYY",
  author: "Portal Alphaville",
  image: "URL_DA_IMAGEM",
  content: [
    "Primeiro parágrafo do artigo...",
    "Segundo parágrafo...",
    "E assim por diante..."
  ],
},
```

### 2. Adicionar o artigo nas listagens

Edite `src/pages/Index.tsx` e adicione o artigo em:
- `featuredArticle` (artigo destaque)
- `topArticles` (principais notícias)
- `recentArticles` (últimas publicações)

### 3. Atualizar o sitemap

Adicione a URL do novo artigo em `public/sitemap.xml`:

```xml
<url>
  <loc>https://portalalphaville.com.br/artigo/slug-do-artigo</loc>
  <lastmod>2025-10-17</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

## 🗂️ Categorias Disponíveis

| Categoria | Slug | Descrição |
|-----------|------|-----------|
| Notícias Locais | `/noticias` | Notícias e acontecimentos |
| Custo de Vida | `/custo-de-vida` | Informações sobre custos e economia |
| Comércio & Serviços | `/comercio-servicos` | Guia de comércio e serviços |
| Imóveis | `/imoveis` | Mercado imobiliário |
| Educação | `/educacao` | Escolas e educação |
| Saúde | `/saude` | Saúde e bem-estar |
| Eventos | `/eventos` | Agenda cultural e eventos |
| Transporte | `/transporte` | Mobilidade urbana |
| Guia da Região | `/guia` | Restaurantes, lazer e atrações |

## 💰 Integração com Google AdSense

O componente `AdSpace` está preparado em 4 variantes:

```tsx
// Banner no topo (728x90 ou 970x90)
<AdSpace variant="banner" />

// Sidebar (300x250 ou 300x600)
<AdSpace variant="sidebar" />

// Inline no artigo (728x90 ou 336x280)
<AdSpace variant="inline" />

// Footer (728x90)
<AdSpace variant="footer" />
```

**Para ativar AdSense:**
1. Crie uma conta no Google AdSense
2. Obtenha o código do anúncio
3. Substitua o conteúdo do componente `AdSpace.tsx` pelo código fornecido

## 🔍 SEO - Boas Práticas Implementadas

✅ **HTML Semântico**: Uso de `<article>`, `<header>`, `<main>`, `<nav>`, `<aside>`  
✅ **Meta Tags**: Título, descrição, keywords, Open Graph, Twitter Cards  
✅ **Breadcrumbs**: Navegação hierárquica em todas as páginas  
✅ **Sitemap.xml**: Mapa do site atualizado  
✅ **Robots.txt**: Configurado para permitir crawlers  
✅ **URLs Amigáveis**: Slugs descritivos e limpos  
✅ **Heading Hierarchy**: H1 único, estrutura correta de headings  
✅ **Alt Text**: Todas as imagens têm textos alternativos  
✅ **Performance**: Imagens otimizadas, código minificado  

## 🚀 Como Expandir o Portal

### Adicionar Nova Categoria

1. **Editar `src/components/Header.tsx`**: Adicione a categoria no array `categories`
2. **Editar `src/components/Footer.tsx`**: Adicione nos links do footer
3. **Editar `src/pages/CategoryPage.tsx`**: Adicione no objeto `categories`
4. **Editar `src/App.tsx`**: Adicione a nova rota

### Adicionar Sistema de Busca Funcional

O header já possui um campo de busca. Para torná-lo funcional:
1. Crie uma página `SearchPage.tsx`
2. Implemente lógica de busca nos artigos
3. Adicione rota `/busca` no `App.tsx`

### Adicionar Sistema de Comentários

Opções populares:
- **Disqus**: Fácil integração, gratuito
- **Facebook Comments**: Integração com redes sociais
- **Comentários customizados**: Requer backend (pode usar Lovable Cloud)

### Adicionar Newsletter

O footer já possui um formulário de newsletter. Para ativá-lo:
1. Configure um serviço de email marketing (Mailchimp, SendGrid, etc.)
2. Crie API endpoint para receber inscrições
3. Conecte o formulário ao endpoint

## 🎯 Próximos Passos Recomendados

1. **Adicionar mais artigos** em diferentes categorias
2. **Configurar Google Analytics** para monitorar tráfego
3. **Integrar Google AdSense** para monetização
4. **Implementar busca funcional**
5. **Adicionar sistema de comentários**
6. **Criar páginas estáticas**: Sobre, Contato, Termos, Privacidade
7. **Configurar domínio próprio**
8. **Otimizar imagens** para carregamento mais rápido

## 📱 Responsividade

O site é **mobile-first** e totalmente responsivo:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Todos os componentes se adaptam automaticamente ao tamanho da tela.

## 🛠️ Tecnologias Utilizadas

- **React** 18.3.1
- **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (estilização)
- **shadcn/ui** (componentes)
- **React Router** (navegação)
- **Lucide Icons** (ícones)

## 📞 Suporte

Para dúvidas ou sugestões sobre o Portal Alphaville, consulte:
- Documentação do Lovable: https://docs.lovable.dev/
- Comunidade Lovable no Discord

---

**Portal Alphaville** - Seu guia completo sobre Alphaville! 🏙️
