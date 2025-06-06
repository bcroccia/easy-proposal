import React, { useState } from 'react';

const PDFPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pdfPages = [
    {
      title: "Capa",
      content: (
        <div className="bg-gradient-to-br from-slate-800 to-indigo-900 p-6 rounded-lg text-white h-full flex flex-col justify-center">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">PROPOSTA COMERCIAL</h2>
            <div className="mb-6">
              <p className="text-base mb-2">REVENDEDORA: ANA</p>
              <p className="text-sm text-white/80">ANNA PRATA</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-bold text-base mb-3">GOLD FACE EARRING</h3>
              <div className="text-sm space-y-2">
                <p>• QUANTIDADE SUGERIDA: 5</p>
                <p>• PREÇO UNITÁRIO: $153,23</p>
                <p>• VALOR TOTAL: $766,15</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Totais",
      content: (
        <div className="bg-gradient-to-br from-slate-800 to-indigo-900 p-6 rounded-lg text-white h-full">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-3">VALOR TOTAL DE COMPRA</h2>
            <div className="text-3xl font-bold text-cyan-400 mb-2">$766,15</div>
            <p className="text-sm text-white/70">ANNA PRATA</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="font-bold mb-3 text-sm">Formas de pagamento disponíveis:</h3>
            <div className="space-y-2 text-xs">
              <div>
                <p className="font-semibold">Pix à vista:</p>
                <p>• 5% de desconto</p>
              </div>
              <div>
                <p className="font-semibold">Cartão de crédito:</p>
                <p>• Até 3x sem juros</p>
              </div>
              <div>
                <p className="font-semibold">Boleto bancário:</p>
                <p>• Prazo de 5 dias úteis</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-4">
            <span className="mr-2">📄</span>
            PDF PERSONALIZADO
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Proposta Profissional Gerada
          </h2>
          <p className="text-white/70">
            PDF totalmente personalizado com sua marca e dados atualizados automaticamente
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 items-start">
          
          {/* Left: PDF Preview */}
          <div>
            {/* PDF Tabs */}
            <div className="flex gap-2 mb-4">
              {pdfPages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                    activeTab === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {page.title}
                </button>
              ))}
            </div>

            {/* PDF Mock */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur border border-white/20 rounded-xl p-3 shadow-xl">
                {/* PDF Header */}
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/20">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-bold">PDF</span>
                    </div>
                    <span className="text-white text-xs">Proposta_Ana.pdf</span>
                  </div>
                  <div className="text-white/60 text-xs">
                    {activeTab + 1}/2
                  </div>
                </div>

                {/* PDF Content */}
                <div className="h-64">
                  {pdfPages[activeTab].content}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features & Stats */}
          <div className="space-y-4">
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-green-400">8s</div>
                <div className="text-xs text-white/70">Geração</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-blue-400">100%</div>
                <div className="text-xs text-white/70">Personalizado</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-cyan-400">HD</div>
                <div className="text-xs text-white/70">Qualidade</div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="mr-2">🔄</span>
                Como Funciona
              </h3>
              <div className="space-y-2">
                {[
                  { step: '1', text: 'WhatsApp recebe dados', icon: '📱' },
                  { step: '2', text: 'Sistema busca preços', icon: '💰' },
                  { step: '3', text: 'PDF gerado automaticamente', icon: '📄' },
                  { step: '4', text: 'Enviado para cliente', icon: '📨' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-2">
                      {item.step}
                    </div>
                    <span className="text-sm mr-2">{item.icon}</span>
                    <span className="text-white/90 text-xs">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur border border-blue-500/30 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="mr-2">🎨</span>
                Personalização
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: '🎨', label: 'Cores marca' },
                  { icon: '📷', label: 'Logo empresa' },
                  { icon: '📝', label: 'Textos custom' },
                  { icon: '💳', label: 'Pagamentos' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-2 text-center">
                    <div className="text-lg">{item.icon}</div>
                    <div className="text-xs text-white/80">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-xl transition-all transform hover:scale-105">
              🚀 Quero Meu PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFPreviewSection;