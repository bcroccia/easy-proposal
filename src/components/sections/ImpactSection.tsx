import React, { useState } from 'react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon, isActive, onHover, onLeave }) => {
  return (
    <div 
      className={`transition-all duration-300 p-4 rounded-xl cursor-pointer transform hover:scale-105 ${
        isActive 
          ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-cyan-400/50 shadow-lg' 
          : 'bg-white/10 border border-white/10 hover:bg-white/15'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center mb-3">
        <div className={`w-8 h-8 rounded-full ${isActive ? 'bg-cyan-500' : 'bg-blue-500'} text-white flex items-center justify-center text-sm font-bold mr-3`}>
          {number}
        </div>
        <span className={`text-xl ${isActive ? 'animate-bounce' : ''}`}>{icon}</span>
      </div>
      <h4 className={`font-bold mb-2 transition-colors ${isActive ? 'text-cyan-300' : 'text-white'}`}>
        {title}
      </h4>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const NextSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: '1',
      title: 'Reunião de Alinhamento',
      description: 'Video chamada de 30min para esclarecer dúvidas e definir detalhes',
      icon: '📞'
    },
    {
      number: '2',
      title: 'Início do Projeto',
      description: 'Assinatura do contrato e início imediato do desenvolvimento',
      icon: '✍️'
    },
    {
      number: '3',
      title: 'Sistema Funcionando',
      description: 'Implementação completa em 5 semanas com equipe treinada',
      icon: '🎯'
    }
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="">
          
          {/* Header */}
          <div className="text-center mb-8 mt-8">
            <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-4">
              <span className="mr-2">🚀</span>
              PRÓXIMOS PASSOS
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">
              Sua Automatização em <br /> 5 Semanas!
            </h3>
            <p className="text-white/70">
              Processo simples e direto para transformar sua operação
            </p>
          </div>
          
          {/* Steps Grid - LADO A LADO */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {steps.map((step, index) => (
              <StepCard 
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isActive={activeStep === index}
                onHover={() => setActiveStep(index)}
                onLeave={() => setActiveStep(null)}
              />
            ))}
          </div>
          
          {/* Dynamic feedback */}
          <div className="text-center mb-6">
            <div className="h-6">
              {activeStep === 0 && (
                <p className="text-cyan-300 text-sm animate-fadeIn">
                  📞 Conversa rápida para alinhar expectativas e tirar dúvidas
                </p>
              )}
              {activeStep === 1 && (
                <p className="text-cyan-300 text-sm animate-fadeIn">
                  ✍️ Tudo certo! Agora é só aguardar o desenvolvimento
                </p>
              )}
              {activeStep === 2 && (
                <p className="text-cyan-300 text-sm animate-fadeIn">
                  🎯 Sistema pronto e sua equipe totalmente capacitada!
                </p>
              )}
            </div>
          </div>
          
          {/* Main CTA */}
          <div className="text-center mb-8">
            <a 
              href="https://wa.me/5562993201557?text=Olá! Vi a proposta para automação e tenho interesse em prosseguir." 
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              📱 QUERO AUTOMATIZAR AGORA!
            </a>
          </div>
          
          {/* Bottom Section - LADO A LADO */}
          <div className="border-t border-white/10 pt-6">
            <div className="grid grid-cols-2 gap-6 items-center">
              
              {/* Left: Call to Action */}
              {/* <div>
                <h4 className="text-xl font-bold mb-3 text-white flex items-center">
                  <span className="mr-2">⚡</span>
                  Pronto para Revolucionar?
                </h4>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Sistema que reduz 3 horas para 30 segundos. 
                  A LoopHID implementa soluções que fazem diferença real.
                </p>
                <a 
                  href="https://wa.me/5562993201557?text=Olá! Vi a proposta para automação e tenho interesse em prosseguir." 
                  className="inline-block bg-white hover:bg-white/90 text-slate-900 font-semibold py-2 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md text-sm"
                >
                  Agendar Reunião
                </a>
              </div> */}
              
              {/* Right: Contact Card */}
              {/* <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                    <span className="text-blue-400 text-lg">🔧</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white">LoopHID</h5>
                    <p className="text-xs text-white/70">Soluções em Automação</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a 
                    href="mailto:contato@loophid.com.br" 
                    className="text-xs text-white/80 hover:text-white flex items-center transition-colors"
                  >
                    <span className="mr-2">📧</span>
                    contato@loophid.com.br
                  </a>
                  <a 
                    href="tel:+5562993201557" 
                    className="text-xs text-white/80 hover:text-white flex items-center transition-colors"
                  >
                    <span className="mr-2">📱</span>
                    +55 (62) 99320-1557
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        {/* <div className="mt-6 text-center">
          <p className="text-white/50 text-xs">
            Desenvolvido com ❤️ pela LoopHID | Soluções em Automação
          </p>
        </div> */}
      </div>

      {/* <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style> */}
    </div>
  );
};

export default NextSteps;