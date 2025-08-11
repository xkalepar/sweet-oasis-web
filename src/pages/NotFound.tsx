import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLocale();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">{t('notFound.title')}</p>
        <Link to="/" className="text-primary underline-offset-4 hover:underline">
          {t('nav.home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
