import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-2xl overflow-hidden relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/30 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-secondary/30 blur-3xl"></div>
          </div>
          
          <div className="relative px-6 py-16 md:p-16">
            {/* Content with responsive layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                  Pronto para revolucionar suas propostas comerciais?
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Junte-se a centenas de empresas que já transformaram seu processo comercial 
                  e estão fechando mais negócios com propostas de alto impacto.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#investimento" 
                    className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-lg 
                              transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Começar Agora
                  </a>
                  <a 
                    href="#contato" 
                    className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium 
                              border border-white/30 rounded-lg transition-all duration-300"
                  >
                    Falar com Consultor
                  </a>
                </div>
                
                <div className="mt-8 text-white/70 text-sm">
                  <p className="mb-2">✓ Teste gratuito por 14 dias</p>
                  <p className="mb-2">✓ Sem compromisso ou cartão de crédito</p>
                  <p>✓ Suporte completo durante avaliação</p>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-end">
                {/* Testimonial Card - Fully responsive */}
                <div className="max-w-md bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                  <div className="flex items-start mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xl font-bold">
                        AB
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">André Barros</h4>
                      <p className="text-white/60">Diretor Comercial, TechSoft</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/80 italic">
                      "Desde que implementamos esta solução, reduzimos o tempo de criação de propostas em 75% 
                      e aumentamos nossa taxa de fechamento em quase 40%. O investimento se pagou em apenas 2 meses."
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/60 text-sm">Resultados após 3 meses:</p>
                        <p className="text-secondary font-bold">+52% em vendas</p>
                      </div>
                      <img 
                        src="/client-logo.png" 
                        alt="TechSoft" 
                        className="h-8 opacity-80"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted By Section - Mobile responsive grid */}
        <div className="mt-16 text-center">
          <p className="text-white/50 uppercase text-sm tracking-wider mb-8">
          Desenvolvido com ❤️ pela LoopHID | Soluções em Automação
          </p>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="h-12 flex items-center">
                <div className="bg-white/5 w-full h-10 rounded-md flex items-center justify-center px-4">
                  <div className="text-white/40 font-semibold">Logo {num}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
