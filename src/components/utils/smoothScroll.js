// Função para configurar rolagem suave para links de âncora
export function setupSmoothScrolling() {
  // Forçar a página a iniciar no topo ao carregar
  window.scrollTo(0, 0);
  
  // Remover qualquer hash da URL ao carregar a página
  if (window.location.hash) {
    // Remover o hash da URL sem recarregar a página
    window.history.replaceState(
      null, 
      document.title, 
      window.location.pathname + window.location.search
    );
  }

  // Configurar rolagem suave para todos os links de âncora
  setTimeout(() => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        if (href === '#') return;
        
        const element = document.querySelector(href);
        if (element) {
          // Rolagem suave para o elemento
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          
          // Atualizar URL sem recarregar a página
          window.history.pushState(null, '', href);
        }
      });
    });
  }, 100); // Pequeno atraso para garantir que todos os elementos estejam carregados
}
