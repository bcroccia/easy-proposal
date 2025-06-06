import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <div className={`absolute top-0 left-0 w-1 h-full ${color} rounded-l-xl transition-all duration-300 group-hover:w-2`}></div>
      <div className="ml-2">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4 shadow-lg text-xl`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Automação Inteligente',
      description: 'Crie propostas comerciais completas em minutos com preenchimento automático de dados do cliente.',
      icon: '🤖',
      color: 'bg-blue-500',
    },
    {
      title: 'Modelos Personalizáveis',
      description: 'Acesse uma biblioteca de modelos profissionais ou personalize com sua identidade de marca.',
      icon: '🎨',
      color: 'bg-purple-500',
    },
    {
      title: 'Integração CRM',
      description: 'Integre com seu sistema de CRM para importar dados de clientes e projetos automaticamente.',
      icon: '🔄',
      color: 'bg-green-500',
    },
    {
      title: 'Acompanhamento em Tempo Real',
      description: 'Saiba quando sua proposta foi visualizada, quanto tempo o cliente passou em cada seção.',
      icon: '📊',
      color: 'bg-amber-500',
    },
    {
      title: 'Assinatura Digital',
      description: 'Permita que clientes assinem propostas digitalmente, acelerando o processo de fechamento.',
      icon: '✍️',
      color: 'bg-pink-500',
    },
    {
      title: 'Análise de Métricas',
      description: 'Dashboards detalhados sobre taxa de conversão, tempo médio de fechamento e valores propostos.',
      icon: '📈',
      color: 'bg-cyan-500',
    },
  ];

  return (
    <section id="solucoes-medida" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3">
            RECURSOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções sob medida para seu negócio</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para automatizar e acelerar seu processo comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
