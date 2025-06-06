import React, { useState, useEffect } from 'react';

interface WorkflowStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
  tech: string;
  isActive: boolean;
  onClick: () => void;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({
  step,
  title,
  description,
  icon,
  details,
  tech,
  isActive,
  onClick
}) => {
  return (
    <div 
      className={`relative cursor-pointer transition-all duration-500 ${isActive ? 'transform scale-105' : ''}`}
      onClick={onClick}
    >
      {/* Connection Line */}
      {step < 6 && (
        <div className="absolute top-16 left-1/2 w-px h-24 bg-gradient-to-b from-cyan-400 to-blue-500 z-0 hidden lg:block">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
        </div>
      )}

      <div className={`relative z-10 bg-gradient-to-br ${isActive ? 'from-blue-600 to-indigo-700' : 'from-slate-700 to-slate-800'} rounded-2xl p-6 border ${isActive ? 'border-cyan-400/50' : 'border-white/10'} transition-all duration-300 hover:border-cyan-400/30`}>
        {/* Step Number */}
        <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full ${isActive ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-slate-600'} flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300`}>
          {step}
        </div>

        {/* Tech Badge */}
        <div className="flex justify-end mb-3">
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-300 font-medium">
            {tech}
          </span>
        </div>

        {/* Icon and Title */}
        <div className="text-center mb-4">
          <div className={`text-4xl mb-3 ${isActive ? 'animate-bounce' : ''}`}>{icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>
        </div>

        {/* Details */}
        {isActive && (
          <div className="mt-4 space-y-2 animate-fadeIn">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start bg-white/5 rounded-lg p-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3 mt-2"></span>
                <span className="text-white/90 text-sm">{detail}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const FlowVisualization: React.FC<{ activeStep: number }> = ({ activeStep }) => {
  const flows = [
    { from: 'WhatsApp', to: 'N8N', active: activeStep >= 1 },
    { from: 'N8N', to: 'Validação', active: activeStep >= 2 },
    { from: 'Validação', to: 'Google Sheets', active: activeStep >= 3 },
    { from: 'Google Sheets', to: 'PDF Engine', active: activeStep >= 4 },
    { from: 'PDF Engine', to: 'Entrega', active: activeStep >= 5 },
    { from: 'Entrega', to: 'Cliente', active: activeStep >= 6 }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white text-center mb-6 flex items-center justify-center">
        <span className="mr-2">🔄</span>
        Fluxo de Automação
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {['📱', '🤖', '✅', '📊', '📄', '🎯'].map((icon, index) => (
          <div key={index} className={`text-center transition-all duration-500 ${activeStep > index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
            <div className={`text-3xl mb-2 ${activeStep > index ? 'animate-pulse' : ''}`}>
              {icon}
            </div>
            <div className="text-xs text-white/70">
              {['WhatsApp', 'N8N', 'Validação', 'Sheets', 'PDF', 'Entrega'][index]}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="bg-slate-700/50 rounded-xl p-4">
          <div className="flex items-center justify-between text-sm text-white/80">
            <span>Progresso do Fluxo:</span>
            <span>{Math.round((activeStep / 6) * 100)}%</span>
          </div>
          <div className="mt-2 bg-slate-600 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(activeStep / 6) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechStack: React.FC = () => {
  const technologies = [
    { name: 'N8N', icon: '🔧', description: 'Orquestração de workflows', color: 'from-red-500 to-pink-500' },
    { name: 'WhatsApp API', icon: '📱', description: 'Integração com mensagens', color: 'from-green-500 to-emerald-500' },
    { name: 'Google Sheets', icon: '📊', description: 'Base de dados dinâmica', color: 'from-green-600 to-blue-500' },
    { name: 'PDF Engine', icon: '📄', description: 'Geração automática', color: 'from-red-600 to-orange-500' },
    { name: 'Gmail API', icon: '📧', description: 'Envio automatizado', color: 'from-blue-500 to-indigo-500' },
    { name: 'Cloud Storage', icon: '☁️', description: 'Armazenamento seguro', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white text-center mb-6 flex items-center justify-center">
        <span className="mr-2">⚙️</span>
        Stack Tecnológica
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className={`bg-gradient-to-br ${tech.color} rounded-xl p-4 text-white transform hover:scale-105 transition-all duration-300`}>
            <div className="text-center">
              <div className="text-2xl mb-2">{tech.icon}</div>
              <div className="font-semibold mb-1">{tech.name}</div>
              <div className="text-xs opacity-90">{tech.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AutomationWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const workflowSteps = [
    {
      step: 1,
      title: 'Recebimento WhatsApp',
      description: 'Cliente envia mensagem no WhatsApp',
      icon: '📱',
      tech: 'WhatsApp API',
      details: [
        'Webhook captura mensagem instantaneamente',
        'Extração automática de dados (nome, produto, quantidade)',
        'Validação de formato da mensagem',
        'Confirmação de recebimento automática'
      ]
    },
    {
      step: 2,
      title: 'Processamento N8N',
      description: 'Workflow inteligente processa dados',
      icon: '🤖',
      tech: 'N8N Automation',
      details: [
        'Parse automático da mensagem recebida',
        'Validação de dados obrigatórios',
        'Consulta de informações do cliente',
        'Preparação para próxima etapa'
      ]
    },
    {
      step: 3,
      title: 'Validação de Dados',
      description: 'Sistema valida informações',
      icon: '✅',
      tech: 'Logic Engine',
      details: [
        'Verificação de produto no catálogo',
        'Validação de disponibilidade',
        'Cálculo automático de preços',
        'Verificação de dados do cliente'
      ]
    },
    {
      step: 4,
      title: 'Consulta Google Sheets',
      description: 'Busca dados na planilha',
      icon: '📊',
      tech: 'Google Sheets API',
      details: [
        'Busca automática de preços atualizados',
        'Consulta de informações do produto',
        'Verificação de estoque disponível',
        'Recuperação de dados da revendedora'
      ]
    },
    {
      step: 5,
      title: 'Geração PDF',
      description: 'Criação automática da proposta',
      icon: '📄',
      tech: 'PDF Generator',
      details: [
        'Template profissional personalizado',
        'Inserção automática de dados',
        'Cálculos de totais e descontos',
        'Geração em alta qualidade'
      ]
    },
    {
      step: 6,
      title: 'Entrega Automática',
      description: 'PDF enviado via WhatsApp',
      icon: '🎯',
      tech: 'Multi-Channel',
      details: [
        'Envio automático via WhatsApp',
        'Backup por email opcional',
        'Confirmação de entrega',
        'Log completo da operação'
      ]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveStep(prev => prev >= 6 ? 1 : prev + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <span className="mr-2">⚡</span>
            AUTOMAÇÃO EM AÇÃO
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Como Funciona
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              na Prática
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Veja passo a passo como nossa automação transforma uma simples mensagem no WhatsApp 
            em uma proposta profissional em menos de 30 segundos.
          </p>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${isAutoPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
            >
              {isAutoPlaying ? '⏸️ Pausar' : '▶️ Reproduzir'} Demo
            </button>
            <button 
              onClick={() => setActiveStep(1)}
              className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all"
            >
              🔄 Reiniciar
            </button>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {workflowSteps.map((step) => (
            <WorkflowStep
              key={step.step}
              {...step}
              isActive={activeStep === step.step}
              onClick={() => {
                setActiveStep(step.step);
                setIsAutoPlaying(false);
              }}
            />
          ))}
        </div>

        {/* Flow Visualization */}
        <div className="mb-12">
          <FlowVisualization activeStep={activeStep} />
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <TechStack />
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-r from-slate-700/60 to-indigo-700/60 backdrop-blur border border-white/10 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              ⏱️ Tempo Total do Processo
            </h3>
            <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              30 segundos
            </div>
            <p className="text-white/80">
              Da mensagem no WhatsApp até a proposta na mão do cliente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📈</div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-white/80">Redução no tempo</div>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <div className="text-2xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-white/80">Automatizado</div>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💪</div>
              <div className="text-2xl font-bold text-indigo-400 mb-2">24/7</div>
              <div className="text-white/80">Disponibilidade</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
              🚀 Quero Automatizar Meu Processo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationWorkflow;