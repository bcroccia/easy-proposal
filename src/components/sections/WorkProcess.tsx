import React from 'react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex-1 relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/10">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    w-12 h-12 rounded-full bg-secondary flex items-center justify-center 
                    text-white font-bold text-lg shadow-lg border-2 border-white/20">
        {number}
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-white text-center mb-3">{title}</h3>
        <p className="text-white/70 text-center">{description}</p>
      </div>
    </div>
  );
};

const WorkProcess: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: '📱 Solicitação',
      description: 'Vendedora envia menssagem no WhatsApp informando Nome da Revendedora, Nome do Produto e Quantidade'
    },
    {
      number: '2',
      title: '🤖 Processamento',
      description: 'Sistema processa automaticamente as informações recebidas e prepara a proposta'
    },
    {
      number: '3',
      title: '📄 Geração',
      description: 'Uma proposta personalizada é gerada com todos os detalhes do produto e condições comerciais'
    },
    {
      number: '4',
      title: '📧 Envio',
      description: 'A proposta é enviada automaticamente para o email do cliente e também fica disponível via link'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3">
            PROCESSO SIMPLIFICADO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona na prática</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Veja como nosso sistema automatiza todo o processo de criação de propostas em apenas alguns passos
          </p>
        </div>

        {/* Process timeline for desktop */}
        <div className="hidden md:block relative mb-16">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30 transform -translate-y-1/2"></div>
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        {/* Process cards for mobile */}
        <div className="md:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-full left-1/2 w-1 bg-gradient-to-b from-secondary to-transparent h-12 transform -translate-x-1/2"></div>
              )}
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-white/70 pl-14">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Results section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Resultados impressionantes</h3>
              <ul className="space-y-4">
                {[
                  'Redução de até 95% no tempo de criação de propostas',
                  'Diminuição de erros e inconsistências',
                  'Aumento na taxa de conversão de vendas',
                  'Mais tempo para a equipe focar no relacionamento com o cliente'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mr-3 mt-1">✓</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"></div>
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-2">95%</div>
                    <div className="text-sm text-white/70">Menos tempo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-2">40%</div>
                    <div className="text-sm text-white/70">Mais vendas</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-white/80 italic">
                    "Nunca imaginei que criar propostas poderia ser tão rápido e eficiente."
                  </p>
                  <p className="mt-4 font-medium text-white">— Maria Oliveira, Vendedora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
