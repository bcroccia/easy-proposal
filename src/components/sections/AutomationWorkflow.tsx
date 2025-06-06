import React, { useState, useEffect } from 'react';

interface StepProps {
  step: number;
  title: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const Step: React.FC<StepProps> = ({ step, title, icon, isActive, onClick }) => {
  return (
    <div 
      className={`relative cursor-pointer transition-all duration-500 ${isActive ? 'scale-105' : 'hover:scale-102'}`}
      onClick={onClick}
    >
      {/* Connection Arrow */}
      {step < 4 && (
        <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent hidden lg:block">
          <div className="absolute right-0 top-1/2 w-0 h-0 border-l-2 border-l-cyan-400 border-t-1 border-b-1 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
        </div>
      )}

      <div className={`relative p-4 rounded-xl border transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-cyan-400/50 shadow-lg' 
          : 'bg-slate-700/50 border-white/10 hover:border-cyan-400/30'
      }`}>
        {/* Step Number */}
        <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
          isActive ? 'bg-cyan-400 text-slate-900' : 'bg-slate-600 text-white'
        }`}>
          {step}
        </div>

        {/* Content */}
        <div className="text-center">
          <div className={`text-2xl mb-2 ${isActive ? 'animate-bounce' : ''}`}>{icon}</div>
          <h3 className="text-sm font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const AutomationWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { step: 1, title: 'WhatsApp', icon: '📱' },
    { step: 2, title: 'Processamento', icon: '🤖' },
    { step: 3, title: 'Busca Dados', icon: '📊' },
    { step: 4, title: 'Gera PDF', icon: '📄' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => prev >= 4 ? 1 : prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-xs font-medium mb-4">
            <span className="mr-1">⚡</span>
            AUTOMAÇÃO EM AÇÃO
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Como Funciona Nosso Serviço de Automação
          </h2>
          <p className="text-lg text-white/70">
            WhatsApp → Automação → PDF pronto em <strong className="text-cyan-400">30 segundos</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left: Workflow Steps */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 text-center lg:text-left">🔄 Processo Automatizado</h3>
            <div className="grid grid-cols-4 gap-2 lg:gap-4 mb-6">
              {steps.map((step) => (
                <Step
                  key={step.step}
                  {...step}
                  isActive={activeStep === step.step}
                  onClick={() => setActiveStep(step.step)}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="bg-slate-700/50 rounded-lg p-3 mb-6">
              <div className="flex items-center justify-between text-xs text-white/80 mb-2">
                <span>Progresso: {activeStep}/4</span>
                <span>{Math.round((activeStep / 4) * 100)}%</span>
              </div>
              <div className="bg-slate-600 rounded-full h-1.5">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full transition-all duration-1000"
                  style={{ width: `${(activeStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Current Step Details */}
            <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-xl p-4">
              <div className="text-center">
                <div className="text-3xl mb-2">{steps[activeStep - 1]?.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{steps[activeStep - 1]?.title}</h4>
                <p className="text-sm text-white/70">
                  {activeStep === 1 && 'Cliente envia mensagem com dados do produto'}
                  {activeStep === 2 && 'Sistema processa automaticamente os dados'}
                  {activeStep === 3 && 'Consulta preços e informações atualizadas'}
                  {activeStep === 4 && 'Gera proposta profissional e envia'}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 text-center lg:text-left">📊 Resultados</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-4 text-white text-center">
                <div className="text-2xl mb-1">⏱️</div>
                <div className="text-2xl font-bold">30s</div>
                <div className="text-xs opacity-90">Tempo total</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-4 text-white text-center">
                <div className="text-2xl mb-1">📈</div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs opacity-90">Menos tempo</div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-white mb-3 text-center">🛠️ Tecnologias Integradas</h4>
              <div className="grid grid-cols-2 gap-2">
                {['WhatsApp API', 'Google Sheets', 'PDF Engine', 'Cloud Storage'].map((tech, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-2 text-center">
                    <span className="text-xs text-white/80">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-slate-700/60 to-indigo-700/60 backdrop-blur border border-white/10 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-white mb-2">Pronto para automatizar?</h4>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                🚀 Começar Agora
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AutomationWorkflow;