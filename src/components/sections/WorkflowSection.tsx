import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const WorkflowStep: React.FC<StepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="relative">
      {/* Step content */}
      <div className="flex flex-col md:flex-row items-start mb-12 md:mb-24">
        {/* Step number - Animated on hover */}
        <div className="flex-shrink-0 group">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xl md:text-2xl font-bold border-2 border-secondary/30 relative z-10 group-hover:bg-secondary group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg">
            {number}
          </div>
        </div>
        
        {/* Step content */}
        <div className="mt-6 md:mt-0 md:ml-8 max-w-lg">
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Connector line - Hidden on the last item and on mobile */}
      {!isLast && (
        <>
          {/* Desktop connector */}
          <div className="hidden md:block absolute left-[39px] top-20 bottom-0 w-1 bg-gradient-to-b from-secondary/50 to-secondary/10"></div>
          
          {/* Mobile connector */}
          <div className="md:hidden absolute left-8 top-16 w-1 h-12 bg-gradient-to-b from-secondary/50 to-secondary/10"></div>
        </>
      )}
    </div>
  );
};

const WorkflowSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Cadastre seus serviços e produtos',
      description: 'Configure uma vez todos os seus serviços, produtos e opções de personalização com descrições detalhadas e preços.'
    },
    {
      number: 2,
      title: 'Adicione informações do cliente',
      description: 'Preencha os dados do cliente ou importe-os diretamente do seu CRM. Nosso sistema memorizará para uso futuro.'
    },
    {
      number: 3,
      title: 'Personalize sua proposta',
      description: 'Escolha o modelo de proposta mais adequado e personalize cores, logotipo e conteúdo conforme a necessidade.'
    },
    {
      number: 4,
      title: 'Selecione serviços e personalizações',
      description: 'Adicione os serviços e produtos relevantes para o cliente específico, com preços, quantidades e descontos.'
    },
    {
      number: 5,
      title: 'Revisão e envio',
      description: 'Revise a proposta final, faça ajustes se necessário e envie diretamente ao cliente via email ou link.'
    },
    {
      number: 6,
      title: 'Acompanhe e feche o negócio',
      description: 'Receba notificações em tempo real quando o cliente visualizar a proposta e utilize as ferramentas de follow-up para aumentar suas chances de fechamento.'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3">
            COMO FUNCIONA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fluxo de trabalho simplificado</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Nosso processo em 6 etapas torna a criação de propostas rápida, eficiente e profissional.
          </p>
        </div>

        {/* Desktop view - Alternating steps left and right */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-secondary/20 -translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`flex mb-24 ${index % 2 === 0 ? '' : 'justify-end'}`}>
              <div className={`w-1/2 relative ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                {/* Step content */}
                <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-flex mb-4 items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} w-full`}>
                    <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xl font-bold border-2 border-secondary/30 z-10 hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector to center line */}
                <div className={`absolute top-8 ${index % 2 === 0 ? 'right-0' : 'left-0'} h-1 w-12 bg-secondary/30`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view - Vertical steps */}
        <div className="md:hidden relative pl-6">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-secondary/20"></div>
          
          {steps.map((step, index) => (
            <WorkflowStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
