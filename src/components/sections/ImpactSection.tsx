import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex flex-col items-center transform transition-all hover:scale-105 hover:bg-white/10">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3">{number}</div>
      <div className="text-sm md:text-base text-white/80 text-center">{label}</div>
    </div>
  );
};

interface ComparisonCardProps {
  isAfter: boolean;
  title: string;
  timeDisplay: string;
  points: string[];
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ isAfter, title, timeDisplay, points }) => {
  return (
    <div className={`rounded-xl p-6 ${isAfter ? 'bg-gradient-to-br from-green-500/20 to-green-700/20 border-green-500/30' : 'bg-gradient-to-br from-red-500/20 to-red-700/20 border-red-500/30'} border backdrop-blur-sm`}>
      <div className={`text-lg md:text-xl font-bold mb-4 ${isAfter ? 'text-green-400' : 'text-red-400'}`}>{title}</div>
      <div className="text-3xl md:text-4xl font-bold mb-4 text-white">{timeDisplay}</div>
      <div className="space-y-2">
        {points.map((point, index) => (
          <div key={index} className="flex items-start">
            <span className={`text-lg mr-2 ${isAfter ? 'text-green-400' : 'text-red-400'}`}>•</span>
            <span className="text-white/80">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3">
            ANÁLISE DE IMPACTO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">💰 Análise de Impacto da Situação Atual</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Veja como nosso sistema pode transformar seus resultados
          </p>
        </div>
        
        {/* Stats Grid - Mobile responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <StatItem 
            number="15h" 
            label="Estimativa de horas que podem ser otimizadas por semana" 
          />
          <StatItem 
            number="R$ 3.000" 
            label="Potencial de economia mensal" 
          />
          <StatItem 
            number="40%" 
            label="Percentual estimado de propostas que sofrem atrasos" 
          />
        </div>
        
        {/* Conclusion - Responsive typography */}
        <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-16 text-center backdrop-blur-sm">
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">
            Conclusão: No total, estima-se que sua operação pode economizar até 
            <span className="text-secondary"> R$ 36.000 </span> por ano.
          </p>
        </div>
        
        {/* Before vs After Comparison - Mobile friendly layout */}
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Compare a diferença</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ComparisonCard 
            isAfter={false}
            title="❌ ANTES - Processo Manual"
            timeDisplay="2h"
            points={[
              "Criação manual demorada",
              "Sujeito a erros humanos",
              "Oportunidades perdidas"
            ]}
          />
          <ComparisonCard 
            isAfter={true}
            title="✅ DEPOIS - Automação Inteligente"
            timeDisplay="30s"
            points={[
              "Geração instantânea de propostas",
              "Precisão e consistência garantidas",
              "Mais tempo para vendas estratégicas"
            ]}
          />
        </div>
        
        {/* Mobile call to action */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center md:hidden">
          <a 
            href="#investimento" 
            className="inline-block px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-lg 
                      transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Veja nossos planos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
