import React from 'react';

const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      feature: 'Tempo de criação',
      traditional: 'Horas ou dias',
      automation: '30 segundos',
      microSaas: '30 segundos'
    },
    {
      feature: 'Interface de uso',
      traditional: 'Word/Excel manual',
      automation: 'WhatsApp + Sheets',
      microSaas: 'Dashboard profissional'
    },
    {
      feature: 'Personalização',
      traditional: 'Manual e limitada',
      automation: 'Templates automáticos',
      microSaas: 'Totalmente customizável'
    },
    {
      feature: 'Controle de dados',
      traditional: 'Arquivos locais',
      automation: 'Google Sheets',
      microSaas: 'Banco próprio'
    },
    {
      feature: 'Escalabilidade',
      traditional: 'Muito limitada',
      automation: 'Até 100 propostas/dia',
      microSaas: 'Ilimitada'
    },
    {
      feature: 'Relatórios',
      traditional: 'Inexistentes',
      automation: 'Básicos',
      microSaas: 'Analytics completo'
    },
    {
      feature: 'Custo mensal',
      traditional: 'Alto (tempo equipe)',
      automation: 'R$ 800',
      microSaas: 'R$ 400'
    }
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-4">
            <span className="mr-2">⚖️</span>
            COMPARATIVO
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Tradicional vs. Nossas Soluções
          </h2>
          <p className="text-lg text-white/70">
            Veja as diferenças entre o método tradicional e nossas duas soluções
          </p>
        </div>

        {/* Tabela Principal */}
        <div className="bg-slate-800/30 backdrop-blur rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="py-6 px-6 bg-slate-700/50 text-left text-white font-bold text-lg border-b border-white/20">
                    Critério
                  </th>
                  <th className="py-6 px-6 bg-red-600/30 text-center text-white font-bold text-lg border-b border-white/20">
                    <div className="flex items-center justify-center">
                      <span className="mr-2">❌</span>
                      Método Tradicional
                    </div>
                  </th>
                  <th className="py-6 px-6 bg-blue-600/30 text-center text-white font-bold text-lg border-b border-white/20">
                    <div className="flex items-center justify-center">
                      <span className="mr-2">🔧</span>
                      Automação
                    </div>
                  </th>
                  <th className="py-6 px-6 bg-indigo-600/30 text-center text-white font-bold text-lg border-b border-white/20">
                    <div className="flex items-center justify-center">
                      <span className="mr-2">💻</span>
                      Micro SaaS
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white/5' : ''} hover:bg-white/10 transition-all duration-200`}>
                    <td className="py-5 px-6 border-b border-white/10 text-white font-semibold text-base">
                      {item.feature}
                    </td>
                    <td className="py-5 px-6 border-b border-white/10 text-center">
                      <div className="flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
                        <span className="text-red-200 font-medium">{item.traditional}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 border-b border-white/10 text-center">
                      <div className="flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                        <span className="text-blue-200 font-medium">{item.automation}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 border-b border-white/10 text-center">
                      <div className="flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-indigo-500 mr-3"></span>
                        <span className="text-indigo-200 font-medium">{item.microSaas}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Resumo dos Resultados */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-600/20 to-red-700/30 backdrop-blur border border-red-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">❌</div>
            <h3 className="text-xl font-bold text-white mb-2">Tradicional</h3>
            <div className="text-3xl font-bold text-red-300 mb-1">Horas</div>
            <p className="text-red-400 text-sm">Para criar uma proposta</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/30 backdrop-blur border border-blue-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="text-xl font-bold text-white mb-2">Automação</h3>
            <div className="text-3xl font-bold text-blue-300 mb-1">30s</div>
            <p className="text-blue-400 text-sm">WhatsApp para PDF</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-700/30 backdrop-blur border border-indigo-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-xl font-bold text-white mb-2">Micro SaaS</h3>
            <div className="text-3xl font-bold text-indigo-300 mb-1">∞</div>
            <p className="text-indigo-400 text-sm">Escalabilidade total</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComparisonSection;