import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Componente que controla o comportamento de rolagem ao navegar entre páginas
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Configuração para links de âncora
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Atualiza a URL sem recarregar
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    // Adiciona o listener para todos os cliques
    document.addEventListener('click', handleAnchorClick);

    // Remove o listener quando o componente for desmontado
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [pathname]); // Executa apenas quando a rota muda

  return null;
};

export default ScrollToTop;
