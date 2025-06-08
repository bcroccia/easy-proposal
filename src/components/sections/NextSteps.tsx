import React from 'react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-white/10 hover:bg-white/15 transition-all duration-300 p-5 rounded-lg">
      <h4 className="text-white font-bold mb-3 flex items-center">
        {number === '1' && <span className="mr-2">📞</span>}
        {number === '2' && <span className="mr-2">✍️</span>}
        {number === '3' && <span className="mr-2">🎯</span>}
        Etapa {number}
      </h4>
      <p className="text-white/80 text-sm md:text-base">{description}</p>
    </div>
  );
};

const NextSteps: React.FC = () => {
  const steps = [
    {
      number: '1',
      description: 'Video Chamada de 30min para esclarecer dúvidas e definir detalhes'
    },
    {
      number: '2',
      description: 'Assinatura do contrato e início imediato do projeto'
    },
    {
      number: '3',
      description: 'Sistema funcionando em 5 semanas com sua equipe treinada'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center">
              <span className="mr-3">🚀</span> Próximos Passos
            </h3>
            <p className="text-lg md:text-xl text-white/90">
              Sua operação pode estar automatizada em 5 semanas!
            </p>
          </div>
          
          {/* Steps grid - responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-10">
            {steps.map((step) => (
              <StepCard 
                key={step.number}
                number={step.number}
                title={`Etapa ${step.number}`}
                description={step.description}
              />
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            {/* <a 
              href="https://wa.me/5562993201557?text=Olá! Vi a proposta para automação e tenho interesse em prosseguir." 
              className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-lg 
                        text-lg md:text-xl transition-all transform hover:scale-105 shadow-lg"
            >
              📱 QUERO AUTOMATIZAR AGORA!
            </a> */}
          </div>
          
          {/* Conclusion */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/5 rounded-xl p-6 mb-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center">
                <span className="mr-3">⚡</span> Transforme seu Negócio Hoje!
              </h3>
              <p className="text-white/80">
                Sistema completamente automatizado que reduz o tempo de 3 horas para apenas 30 segundos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Pronto para revolucionar seus processos?</h3>
                <p className="text-white/80 mb-6">
                  A LoopHID está aqui para implementar soluções tecnológicas que fazem a diferença real no seu dia a dia.
                </p>
                {/* <a 
                  href="https://wa.me/5562993201557?text=Olá! Vi a proposta para automação e tenho interesse em prosseguir." 
                  className="inline-block bg-white hover:bg-white/90 text-primary font-bold py-3 px-6 rounded-lg 
                            transition-all transform hover:scale-105 shadow-md"
                >
                  Agendar uma reunião
                </a> */}
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">LoopHID</h4>
                    <p className="text-sm text-white/70">Soluções em Automação</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="mailto:contato@loophid.com.br" 
                    className="text-sm text-white/80 hover:text-white flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    contato@loophid.com.br
                  </a>
                  <a 
                    href="tel:+5562993201557" 
                    className="text-sm text-white/80 hover:text-white flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    +55 (62) 99320-1557
                  </a>
                </div>
                <div className="mt-8 text-white/70 text-sm text-center"></div>
              </div>
            </div>
            
          </div>
        </div>
        {/* <div className="mt-8 text-white/70 text-sm text-center">
          <p className="mb-2">Desenvolvido com ❤️ pela LoopHID | Soluções em Automação</p>
        </div> */}
      </div>
    </section>
  );
};

export default NextSteps;
