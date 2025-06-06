// Script para impedir rolagem automática para âncoras ao carregar/recarregar a página
(function() {
  // Este script é executado antes de qualquer outro código
  if (window.location.hash) {
    // Salvar a posição atual de rolagem
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Remover o hash da URL sem recarregar a página
    window.history.replaceState(
      null, 
      document.title, 
      window.location.pathname + window.location.search
    );
    
    // Restaurar a posição de rolagem (para manter onde estávamos)
    window.scrollTo(0, scrollPosition);
    
    // Impedir qualquer rolagem automática
    window.addEventListener('scroll', function preventScroll(e) {
      window.scrollTo(0, scrollPosition);
      window.removeEventListener('scroll', preventScroll);
    }, { once: true });
  }
})();
