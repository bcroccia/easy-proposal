import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bgs-primary-dark border-t border-white/10 pt-12 pb-6">
      {/* <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-white mr-3">
                <span className="text-xl font-bold">EP</span>
              </div>
              <h3 className="text-lg font-bold text-white">EasyProposal</h3>
            </div>
            <p className="text-white/70 mb-6">
              Produto: Revolucionando o processo de criação de propostas comerciais com inteligência artificial e automação.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(platform => (
                <a 
                  key={platform} 
                  href={`https://${platform}.com`} 
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
                  aria-label={`Siga-nos no ${platform}`}
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Produto</h4>
            <ul className="space-y-3">
              {['Recursos', 'Preços', 'Demonstração', 'Integrações', 'Novidades'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {['Sobre nós', 'Clientes', 'Blog', 'Carreiras', 'Contato'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Suporte</h4>
            <ul className="space-y-3">
              {['Help Center', 'Documentação', 'Tutoriais', 'Comunidade', 'Status'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-b border-white/10 py-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-white text-lg font-bold mb-2">Inscreva-se na nossa newsletter</h4>
              <p className="text-white/70">Receba dicas e novidades sobre como melhorar suas propostas comerciais.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white w-full" 
                />
                <button className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-lg whitespace-nowrap">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} EasyProposal. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
            {['Termos de Uso', 'Privacidade', 'Cookies', 'Acessibilidade'].map(link => (
              <a key={link} href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
