import React, { useState } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: string;
  estimatedTime: string;
  maintenance: string;
  idealFor: string[];
  advantages: string[];
  isPopular?: boolean;
  gradient: string;
  iconBg: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  features,
  price,
  estimatedTime,
  maintenance,
  idealFor,
  advantages,
  isPopular = false,
  gradient,
  iconBg
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`relative group cursor-pointer transition-all duration-500 ${isExpanded ? 'lg:col-span-2' : ''}`}>
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            ⭐ Mais Popular
          </div>
        </div>
      )}

      <div 
        className={`relative overflow-hidden rounded-3xl p-8 h-full transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 ${gradient} ${isPopular ? 'ring-4 ring-yellow-400/30' : ''} shadow-xl group-hover:shadow-2xl`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center text-3xl shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
              {icon}
            </div>
            <div className={`w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <span className="text-white text-sm">↓</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-100 transition-colors">{title}</h3>
            <p className="text-white/80 font-medium text-lg">{subtitle}</p>
          </div>

          {/* Price */}
          <div className="bg-black/20 backdrop-blur rounded-2xl p-6 mb-6 group-hover:bg-black/30 transition-colors">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{price}</div>
              <div className="text-white/70 text-sm mb-3">Investimento único</div>
              <div className="text-white/60 text-xs">{estimatedTime}</div>
            </div>
          </div>

          {/* Quick features */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-3 text-center group-hover:bg-white/20 transition-colors">
                <span className="text-white/90 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded content */}
        <div className={`relative z-10 transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-white/20 pt-6 space-y-6">
            {/* Description */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <p className="text-white/90 leading-relaxed">{description}</p>
            </div>

            {/* Full features */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">⚡</span>
                Recursos Inclusos:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white/5 rounded-lg p-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></span>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal for */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">🎯</span>
                Ideal Para Você Se:
              </h4>
              <div className="space-y-3">
                {idealFor.map((item, index) => (
                  <div key={index} className="flex items-start bg-white/5 rounded-lg p-3">
                    <span className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center text-green-300 text-xs mr-3 mt-0.5">✓</span>
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">🚀</span>
                Principais Vantagens:
              </h4>
              <div className="space-y-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start bg-white/5 rounded-lg p-3">
                    <span className="w-5 h-5 rounded-full bg-blue-400/20 flex items-center justify-center text-blue-300 text-xs mr-3 mt-0.5">★</span>
                    <span className="text-white/90 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur border border-white/30 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                Escolher {title} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComparisonCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
      <h3 className="text-2xl font-bold mb-6 text-center">🤔 Ainda em Dúvida?</h3>
      
      <div className="space-y-6">
        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
          <h4 className="font-semibold mb-3 flex items-center">
            <span className="mr-2">💡</span>
            Nossa Recomendação
          </h4>
          <p className="text-white/90 text-sm leading-relaxed">
            Se você está começando ou quer validar a solução, comece com a <strong>Automação</strong>. 
            Depois, você pode evoluir para o <strong>Micro SaaS</strong> quando sua operação crescer.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm font-medium">Início Rápido</div>
            <div className="text-xs text-white/70 mt-1">Com Automação</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🚀</div>
            <div className="text-sm font-medium">Crescimento</div>
            <div className="text-xs text-white/70 mt-1">Com Micro SaaS</div>
          </div>
        </div>

        <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur border border-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
          <a href="https://wa.me/5562993201557?text=Olá! Vi a proposta para PDFs Automáticos e tenho interesse em prosseguir."> Falar com Especialista 💬</a>
        </button>
      </div>
    </div>
  );
};

const StatsCard: React.FC = () => {
  const stats = [
    { number: '95%', label: 'Redução no Tempo', icon: '⏰' },
    { number: '40%', label: 'Mais Vendas', icon: '📈' },
    { number: '30s', label: 'Processo Completo', icon: '⚡' },
    { number: '24/7', label: 'Funcionamento', icon: '🔄' }
  ];

  return (
    <div className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-3xl p-8 text-white shadow-2xl">
      <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
        <span className="mr-2">📊</span>
        Resultados Comprovados
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center group hover:bg-white/20 transition-colors">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
            <div className="text-2xl font-bold mb-1">{stat.number}</div>
            <div className="text-xs text-white/80">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white/10 backdrop-blur rounded-xl p-4">
        <p className="text-center text-sm text-white/90 italic">
          "Nunca imaginei que criar propostas poderia ser tão rápido e eficiente."
        </p>
        <p className="text-center text-xs text-white/70 mt-2">— Maria Silva, Vendedora</p>
      </div>
    </div>
  );
};

const ServiceOptions: React.FC = () => {
  const automationService = {
    icon: '🔧',
    title: 'Automação',
    subtitle: 'Solução rápida e eficiente',
    description: 'Sistema inteligente que conecta WhatsApp, planilhas e geração de PDFs em um fluxo automatizado. Perfeito para validar a ideia e começar a economizar tempo imediatamente.',
    features: [
      'WhatsApp Bot',
      'Google Sheets',
      'Gmail Integration',
      'PDF Generator',
      'Excel Reports',
      'Notificações Auto',
      'Backup Seguro',
      'Suporte 24h'
    ],
    price: 'R$ 5.500',
    estimatedTime: 'R$ 800/mês manutenção',
    maintenance: 'Manutenção e suporte incluso',
    idealFor: [
      'Quer validar a automação rapidamente',
      'Prefere investimento inicial menor',
      'Quer resultados em 5 semanas',
      'Tem equipe pequena/média',
      'Quer testar antes de investir mais',
      'Busca ROI rápido'
    ],
    advantages: [
      'Implementação em 30 dias',
      'Processo completo em 30 segundos',
      'Investimento inicial acessível',
      'Resultados imediatos',
      'Baixo risco de investimento',
      'Fácil de usar e treinar equipe'
    ],
    gradient: 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500',
    iconBg: 'bg-white/20'
  };

  const microSaasService = {
    icon: '💻',
    title: 'Micro SaaS',
    subtitle: 'Solução profissional completa',
    description: 'Plataforma completa com dashboard avançado, controle total de dados, interface elegante e escalabilidade ilimitada. A solução definitiva para empresas que querem crescer sem limites.',
    features: [
      'Dashboard Pro',
      'Gestão Produtos',
      'CRM Revendedoras',
      'Relatórios Avançados',
      'API Integration',
      'Multi-usuário',
      'Backup Cloud',
      'White Label'
    ],
    price: 'R$ 12.000',
    estimatedTime: 'R$ 400/mês manutenção',
    maintenance: 'Manutenção premium inclusa',
    idealFor: [
      'Quer solução profissional completa',
      'Planeja crescer significativamente',
      'Valoriza interface elegante',
      'Busca menores custos de manutenção',
      'Quer escalabilidade ilimitada',
      'Precisa de controle total dos dados'
    ],
    advantages: [
      'Interface profissional premium',
      'Crescimento sem limitações',
      'Controle total dos dados',
      'Menor custo de manutenção',
      'Experiência premium',
      'Escalabilidade infinita'
    ],
    isPopular: true,
    gradient: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
    iconBg: 'bg-white/20'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <span className="mr-2">✨</span>
            SOLUÇÕES SOB MEDIDA PARA SEU NEGÓCIO
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Escolha Sua
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transformação
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Duas soluções poderosas para automatizar suas propostas e revolucionar seu processo de vendas. 
            Clique nos cards para explorar todos os detalhes.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ServiceCard {...automationService} />
          <ServiceCard {...microSaasService} />
        </div>

        {/* Additional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ComparisonCard />
          <StatsCard />
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur border border-white/10 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para Transformar seu Negócio?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Não perca mais tempo criando propostas manualmente. Escolha sua solução e comece a ver resultados em semanas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
              🔧 Quero a Automação
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
              💻 Quero o Micro SaaS
            </button>
          </div>
          <p className="text-white/50 text-sm mt-6">
            💬 Dúvidas? Fale conosco e receba uma consultoria gratuita!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceOptions;