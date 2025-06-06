import React from 'react';

const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      feature: 'Tempo de criação de propostas',
      traditional: 'Horas ou dias',
      withApp: 'Minutos',
      highlight: true
    },
    {
      feature: 'Templates personalizáveis',
      traditional: 'Limitados',
      withApp: 'Ilimitados',
      highlight: false
    },
    {
      feature: 'Acompanhamento de propostas',
      traditional: 'Manual',
      withApp: 'Automático em tempo real',
      highlight: true
    },
    {
      feature: 'Análise de dados',
      traditional: 'Básica ou inexistente',
      withApp: 'Completa e detalhada',
      highlight: false
    },
    {
      feature: 'Integrações com outros sistemas',
      traditional: 'Difícil ou impossível',
      withApp: 'Nativas e API disponível',
      highlight: true
    },
    {
      feature: 'Assinatura digital',
      traditional: 'Raramente disponível',
      withApp: 'Integrada ao sistema',
      highlight: false
    },
    {
      feature: 'Automação de follow-up',
      traditional: 'Manual',
      withApp: 'Automatizada e agendável',
      highlight: true
    }
  ];

  return (
    <section id="comparacao" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3">
            COMPARATIVO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tradicional vs. Nossa Solução</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Veja como nossa solução se compara ao processo tradicional de criação de propostas.
          </p>
        </div>

        {/* Desktop comparison table (hidden on mobile) */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-white/10 mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-white/5 text-left text-white font-semibold border-b border-white/10 w-1/3">
                  Funcionalidade
                </th>
                <th className="py-4 px-6 bg-white/5 text-left text-white font-semibold border-b border-white/10 w-1/3">
                  Forma Tradicional
                </th>
                <th className="py-4 px-6 bg-secondary/20 text-left text-secondary font-semibold border-b border-white/10 w-1/3">
                  Com Nossa Solução
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className={item.highlight ? 'bg-white/5' : ''}>
                  <td className="py-4 px-6 border-b border-white/10 text-white">
                    {item.feature}
                  </td>
                  <td className="py-4 px-6 border-b border-white/10 text-white/70">
                    <div className="flex items-center">
                      <span className="w-5 h-5 mr-3 rounded-full bg-red-400/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item.traditional}
                    </div>
                  </td>
                  <td className="py-4 px-6 border-b border-white/10 text-white/90 bg-secondary/10">
                    <div className="flex items-center">
                      <span className="w-5 h-5 mr-3 rounded-full bg-green-400/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item.withApp}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile comparison cards (visible only on mobile) */}
        <div className="md:hidden space-y-6">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-lg overflow-hidden border border-white/10">
              <div className="p-4 border-b border-white/10 bg-white/5">
                <h3 className="font-medium text-white">{item.feature}</h3>
              </div>
              <div className="grid grid-cols-1 divide-y divide-white/10">
                <div className="p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-400/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/40 mb-1">Forma Tradicional</p>
                      <p className="text-white/70">{item.traditional}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-secondary/10">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-1">Nossa Solução</p>
                      <p className="text-white">{item.withApp}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary - Responsive for both mobile and desktop */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary-light to-primary p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2 text-white">80%</div>
            <p className="text-white/80">Redução no tempo de criação de propostas</p>
          </div>
          <div className="bg-gradient-to-br from-primary-light to-primary p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2 text-white">35%</div>
            <p className="text-white/80">Aumento na taxa de conversão média</p>
          </div>
          <div className="bg-gradient-to-br from-primary-light to-primary p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2 text-white">100%</div>
            <p className="text-white/80">De propostas com acompanhamento em tempo real</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
