import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Notícias", path: "/noticias" },
    { name: "Custo de Vida", path: "/custo-de-vida" },
    { name: "Comércio & Serviços", path: "/comercio-servicos" },
    { name: "Imóveis", path: "/imoveis" },
    { name: "Educação", path: "/educacao" },
    { name: "Saúde", path: "/saude" },
    { name: "Eventos", path: "/eventos" },
    { name: "Transporte", path: "/transporte" },
    { name: "Guia da Região", path: "/guia" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/busca?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top Bar */}
      <div className="bg-primary">
        <div className="container-portal py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-primary-foreground font-serif">
              Portal Alphaville
            </h1>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Buscar notícias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/90 border-0 pr-10"
              />
              <Button 
                type="submit" 
                size="sm" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              >
                <Search className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </form>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-card border-b">
        <div className="container-portal">
          <ul className="flex items-center gap-6 py-3 overflow-x-auto">
            {categories.map((category) => (
              <li key={category.path}>
                <Link
                  to={category.path}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t">
          <div className="container-portal py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Buscar notícias..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  variant="ghost" 
                  className="absolute right-0 top-0 h-full px-3"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Mobile Categories */}
            <nav>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.path}>
                    <Link
                      to={category.path}
                      className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
