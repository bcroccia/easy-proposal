import React from 'react';

interface PricingPlanProps {
  title: string;
  price: string;
  maintenances: string;
  maintenance: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  ctaText: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  price,
  maintenances,
  maintenance,
  description,
  features,
  isFeatured = false,
  ctaText
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105
                  ${isFeatured 
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-2 border-cyan-400/50 shadow-xl shadow-blue-500/20 scale-105' 
                    : 'bg-slate-700/50 backdrop-blur-sm border border-white/20 hover:bg-slate-700/70'}`}>
      <div className="p-8">
        {isFeatured && (
          <div className="absolute top-0 right-0">
            <div className="bg-cyan-400 text-slate-900 text-sm font-bold py-1 px-3 rounded-bl-lg">
              Mais Popular
            </div>
          </div>
        )}
        
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">
            {title === 'Automação' ? '🔧' : '💻'}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
          <div className="text-sm text-white/70 mb-4">{maintenances}</div>
          <div className="flex items-end justify-center mb-2">
            <span className="text-4xl font-bold text-white">{ price}</span>
          </div>
          <div className="text-sm text-white/70 mb-4">{maintenance}</div>
        </div>
        
        <p className="mb-6 text-white/80 text-center">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`flex-shrink-0 w-5 h-5 rounded-full ${isFeatured ? 'bg-cyan-400/30' : 'bg-blue-500/30'} flex items-center justify-center mr-3 mt-0.5`}>
                <svg className={`w-3 h-3 ${isFeatured ? 'text-cyan-300' : 'text-blue-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className={`text-sm ${isFeatured ? 'text-white/90' : 'text-white/80'}`}>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all
                     ${isFeatured 
                       ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30' 
                       : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Automação',
      maintenances: 'A partir de:',
      price: 'R$ 5.500',
      maintenance: 'R$ 800/mês manutenção',
      description: 'Solução rápida via WhatsApp para validar e começar',
      features: [
        'WhatsApp → PDF em 30 segundos',
        'Google Sheets integrado',
        'Até 100 propostas por dia',
        'Implementação em 30 dias',
        'Suporte técnico incluído'
      ],
      ctaText: 'Contratar Automação'
    },
    {
      title: 'Micro SaaS',
      price: 'R$ 12.000',
      maintenances: 'A partir de:',
      maintenance: 'R$ 1.000/mês manutenção',
      description: 'Plataforma completa com dashboard profissional',
      features: [
        'Dashboard profissional completo',
        'Escalabilidade ilimitada',
        'Relatórios e analytics avançados',
        'Interface totalmente customizável',
        'Suporte prioritário incluído'
      ],
      isFeatured: true,
      ctaText: 'Contratar Micro SaaS'
    }
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 mt-12">
          <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-4">
            <span className="mr-2">💰</span>
            INVESTIMENTO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Escolha Sua Solução
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Duas opções que se adaptam ao seu momento e necessidades de crescimento.
          </p>
        </div>

        {/* Pricing Cards - LADO A LADO SEMPRE */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              maintenances={plan.maintenances}
              price={plan.price}
              maintenance={plan.maintenance}
              description={plan.description}
              features={plan.features}
              isFeatured={plan.isFeatured}
              ctaText={plan.ctaText}
            />
          ))}
        </div>
        {/* <p className="text-white/80 text-s mt-2 text-center mb-2">
              Valores adicionais de manutenção podem ser variáveis de acordo com a usabilidade do cliente
        </p> */}
        <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 Nossa Recomendação
            </h3>
            <p className="text-white/80 mb-6 max-w-3xl mx-auto">
              <strong>Começando ou validando?</strong> Escolha a <strong className="text-blue-300">Automação</strong> para ver resultados rápidos. 
              <br />
              <strong>Crescendo ou quer o melhor?</strong> Vá direto para o <strong className="text-cyan-300">Micro SaaS</strong> e tenha controle total.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/20">
                💬 Falar com Especialista
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-lg transition-all">
                📅 Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;