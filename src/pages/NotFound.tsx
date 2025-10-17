import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-muted">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 font-serif">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Página Não Encontrada</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              Voltar para a Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
