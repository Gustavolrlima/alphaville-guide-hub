import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const categories = [
    { name: "Notícias", path: "/noticias" },
    { name: "Custo de Vida", path: "/custo-de-vida" },
    { name: "Comércio & Serviços", path: "/comercio-servicos" },
    { name: "Imóveis", path: "/imoveis" },
    { name: "Educação", path: "/educacao" },
    { name: "Saúde", path: "/saude" },
    { name: "Eventos", path: "/eventos" },
    { name: "Transporte", path: "/transporte" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container-portal py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-foreground font-serif">
              Portal Alphaville
            </h3>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Seu guia completo sobre Alphaville em Barueri e Santana de Parnaíba. 
              Notícias, dicas e informações essenciais para moradores e visitantes.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">Categorias</h4>
            <ul className="space-y-2">
              {categories.slice(0, 4).map((category) => (
                <li key={category.path}>
                  <Link 
                    to={category.path} 
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">Mais Categorias</h4>
            <ul className="space-y-2">
              {categories.slice(4).map((category) => (
                <li key={category.path}>
                  <Link 
                    to={category.path} 
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">Newsletter</h4>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Receba as últimas notícias e novidades diretamente no seu e-mail.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
              <Button variant="default" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Portal Alphaville. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-sm">
              <Link to="/termos" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/contato" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
