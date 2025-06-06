import React, { useState } from 'react';

interface StatItemProps {
  number: string;
  label: string;
  icon: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, icon, isActive, onHover, onLeave }) => {
  return (
    <div 
      className={`backdrop-blur-sm border rounded-xl p-4 flex flex-col items-center transform transition-all duration-300 hover:scale-105 cursor-pointer ${
        isActive 
          ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-cyan-400/50 shadow-lg' 
          : 'bg-white/5 border-white/10 hover:bg-white/10'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`text-2xl mb-2 ${isActive ? 'animate-bounce' : ''}`}>{icon}</div>
      <div className={`text-2xl md:text-3xl font-bold mb-2 transition-colors ${isActive ? 'text-cyan-400' : 'text-blue-400'}`}>
        {number}
      </div>
      <div className="text-xs text-white/80 text-center leading-tight">{label}</div>
    </div>
  );
};

interface ComparisonCardProps {
  isAfter: boolean;
  title: string;
  timeDisplay: string;
  points: string[];
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ 
  isAfter, 
  title, 
  timeDisplay, 
  points, 
  isActive, 
  onHover, 
  onLeave 
}) => {
  return (
    <div 
      className={`rounded-xl p-6 backdrop-blur-sm border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
        isAfter 
          ? isActive 
            ? 'bg-gradient-to-br from-green-600/30 to-emerald-600/30 border-green-400/50 shadow-lg shadow-green-500/20' 
            : 'bg-gradient-to-br from-green-500/20 to-green-700/20 border-green-500/30'
          : isActive 
            ? 'bg-gradient-to-br from-red-600/30 to-pink-600/30 border-red-400/50 shadow-lg shadow-red-500/20' 
            : 'bg-gradient-to-br from-red-500/20 to-red-700/20 border-red-500/30'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`text-lg font-bold ${isAfter ? 'text-green-400' : 'text-red-400'}`}>
          {title}
        </div>
        <div className={`text-2xl ${isActive ? 'animate-pulse' : ''}`}>
          {isAfter ? '⚡' : '🐌'}
        </div>
      </div>
      
      <div className={`text-3xl font-bold mb-4 text-white transition-all ${isActive ? 'scale-110' : ''}`}>
        {timeDisplay}
      </div>
      
      <div className="space-y-2">
        {points.map((point, index) => (
          <div key={index} className="flex items-start">
            <span className={`text-sm mr-2 ${isAfter ? 'text-green-400' : 'text-red-400'}`}>
              {isAfter ? '✓' : '✗'}
            </span>
            <span className="text-white/80 text-sm">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  const [activeStatCard, setActiveStatCard] = useState<number | null>(null);
  const [activeComparisonCard, setActiveComparisonCard] = useState<string | null>(null);

  const stats = [
    {
      number: "15h",
      label: "Horas otimizadas por semana",
      icon: "⏰"
    },
    {
      number: "R$ 3.000",
      label: "Economia mensal potencial",
      icon: "💰"
    },
    {
      number: "40%",
      label: "Propostas com atrasos",
      icon: "📊"
    }
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-4">
            <span className="mr-2">📈</span>
            ANÁLISE DE IMPACTO
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Impacto na Sua Operação
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Veja como nosso sistema pode transformar seus resultados
          </p>
        </div>
        
        {/* Stats Grid - LADO A LADO */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              isActive={activeStatCard === index}
              onHover={() => setActiveStatCard(index)}
              onLeave={() => setActiveStatCard(null)}
            />
          ))}
        </div>
        
        {/* Conclusion */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-400/30 rounded-xl p-6 mb-8 text-center backdrop-blur-sm">
          <p className="text-lg font-bold text-white">
            💡 Conclusão: Economia estimada de 
            <span className="text-cyan-400 mx-2">R$ 36.000</span> 
            por ano
          </p>
        </div>
        
        {/* Before vs After - LADO A LADO */}
        <h3 className="text-2xl font-bold mb-6 text-center text-white">⚖️ Compare a Diferença</h3>
        
        <div className="grid grid-cols-2 gap-6">
          <ComparisonCard 
            isAfter={false}
            title="❌ ANTES - Manual"
            timeDisplay="3h"
            points={[
              "Criação manual demorada",
              "Sujeito a erros humanos",
              "Oportunidades perdidas"
            ]}
            isActive={activeComparisonCard === 'before'}
            onHover={() => setActiveComparisonCard('before')}
            onLeave={() => setActiveComparisonCard(null)}
          />
          
          <ComparisonCard 
            isAfter={true}
            title="✅ DEPOIS - Automação"
            timeDisplay="30s"
            points={[
              "Processos automatizados",
              "Zero erros nos cálculos",
              "PDF instantâneo",
              "Mais tempo para vendas",
              "Mais negócios fechados"
            ]}
            isActive={activeComparisonCard === 'after'}
            onHover={() => setActiveComparisonCard('after')}
            onLeave={() => setActiveComparisonCard(null)}
          />
        </div>

        {/* Dynamic feedback */}
        <div className="mt-8 text-center">
          <div className="h-6">
            {activeStatCard === 0 && (
              <p className="text-cyan-300 text-sm animate-fadeIn">
                ⏰ Recupere 15 horas por semana para focar no que realmente importa!
              </p>
            )}
            {activeStatCard === 1 && (
              <p className="text-cyan-300 text-sm animate-fadeIn">
                💰 Economia real que impacta diretamente no seu faturamento!
              </p>
            )}
            {activeStatCard === 2 && (
              <p className="text-cyan-300 text-sm animate-fadeIn">
                📊 Elimine atrasos e nunca perca uma oportunidade novamente!
              </p>
            )}
            {activeComparisonCard === 'before' && (
              <p className="text-red-300 text-sm animate-fadeIn">
                🐌 Processo lento que prejudica sua competitividade no mercado
              </p>
            )}
            {activeComparisonCard === 'after' && (
              <p className="text-green-300 text-sm animate-fadeIn">
                ⚡ Velocidade e eficiência que seus clientes vão adorar!
              </p>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
            🚀 Começar Transformação
          </button>
        </div>
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

export default ImpactSection;