import React from 'react';

interface PricingPlanProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  ctaText: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  price,
  period,
  description,
  features,
  isFeatured = false,
  ctaText
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105
                  ${isFeatured 
                    ? 'bg-gradient-to-br from-secondary to-blue-700 border-2 border-white/30 shadow-xl shadow-secondary/20 -translate-y-4 md:translate-y-0 md:-translate-y-6' 
                    : 'bg-white/5 backdrop-blur-sm hover:bg-white/10'}`}>
      <div className={`p-8 ${isFeatured ? 'pb-6' : 'pb-8'}`}>
        {isFeatured && (
          <div className="absolute top-0 right-0">
            <div className="bg-white/20 text-white text-sm font-semibold py-1 px-3 rounded-bl-lg">
              Mais Popular
            </div>
          </div>
        )}
        
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-lg text-white/70 ml-2">{period}</span>
        </div>
        
        <p className="mb-6 text-white/80">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`flex-shrink-0 w-5 h-5 rounded-full ${isFeatured ? 'bg-white/30' : 'bg-secondary/30'} flex items-center justify-center mr-3 mt-0.5`}>
                <svg className={`w-3 h-3 ${isFeatured ? 'text-white' : 'text-secondary'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className={`text-sm ${isFeatured ? 'text-white/90' : 'text-white/70'}`}>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all
                     ${isFeatured 
                       ? 'bg-white text-secondary hover:bg-white/90' 
                       : 'bg-secondary/80 text-white hover:bg-secondary'}`}
        >
          {ctaText}
        </button>
      </div>
      
      {isFeatured && (
        <div className="px-8 py-4 bg-white/10 backdrop-blur-sm text-center">
          <p className="text-sm text-white/90">
            Suporte prioritário incluído
          </p>
        </div>
      )}
    </div>
  );
};

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Starter',
      price: 'R$49',
      period: '/mês',
      description: 'Ideal para profissionais autônomos e pequenas empresas',
      features: [
        'Até 10 propostas/mês',
        'Modelos básicos',
        'Exportação para PDF',
        'Acompanhamento básico',
        'Email de suporte'
      ],
      ctaText: 'Começar Teste Grátis'
    },
    {
      title: 'Profissional',
      price: 'R$99',
      period: '/mês',
      description: 'Perfeito para empresas e equipes em crescimento',
      features: [
        'Até 50 propostas/mês',
        'Modelos premium',
        'Assinatura digital',
        'CRM integração',
        'Analytics avançados',
        'Suporte prioritário'
      ],
      isFeatured: true,
      ctaText: 'Assinar Agora'
    },
    {
      title: 'Empresarial',
      price: 'R$249',
      period: '/mês',
      description: 'Para grandes equipes que precisam de recursos avançados',
      features: [
        'Propostas ilimitadas',
        'Modelos personalizados',
        'Assinatura digital',
        'Todas as integrações',
        'API de acesso',
        'Suporte dedicado'
      ],
      ctaText: 'Falar com Vendas'
    }
  ];

  return (
    <section id="investimento" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3">
            PREÇOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos e investimento</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Escolha o plano que melhor atende às necessidades do seu negócio.
          </p>
        </div>

        {/* Mobile-friendly layout that adapts to different screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isFeatured={plan.isFeatured}
              ctaText={plan.ctaText}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">
                Precisa de um plano personalizado?
              </h3>
              <p className="text-white/70">
                Entre em contato com nossa equipe para discutir opções personalizadas para sua empresa.
              </p>
            </div>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
