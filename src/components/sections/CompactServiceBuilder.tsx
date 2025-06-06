import React, { useState, useEffect } from 'react';

// Tipos para as ferramentas e serviços
interface Tool {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  maintenancePrice: number;
  icon: string;
  category: 'communication' | 'integration' | 'analytics' | 'automation';
  isRequired?: boolean;
}

interface ServicePackage {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  basePrice: number;
  maintenancePrice: number;
  requiredTools: string[];
  gradient: string;
  isPopular?: boolean;
}

interface PresetPlan {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  totalPrice: number;
  maintenancePrice: number;
  tools: string[];
  highlights: string[];
  gradient: string;
  isPopular?: boolean;
}

// Base de dados das ferramentas disponíveis
const availableTools: Tool[] = [
  // Comunicação
  { id: 'whatsapp', name: 'WhatsApp Bot', description: 'Bot inteligente', basePrice: 1500, maintenancePrice: 200, icon: '💬', category: 'communication', isRequired: true },
  { id: 'telegram', name: 'Telegram', description: 'Automação Telegram', basePrice: 800, maintenancePrice: 100, icon: '📱', category: 'communication' },
  { id: 'email', name: 'Email Auto', description: 'Disparos automáticos', basePrice: 1000, maintenancePrice: 150, icon: '📧', category: 'communication' },
  
  // Integrações
  { id: 'google_sheets', name: 'Google Sheets', description: 'Planilhas integradas', basePrice: 500, maintenancePrice: 50, icon: '📊', category: 'integration', isRequired: true },
  { id: 'excel', name: 'Excel Pro', description: 'Relatórios Excel', basePrice: 700, maintenancePrice: 80, icon: '📈', category: 'integration' },
  { id: 'pdf', name: 'PDF Maker', description: 'Gerador de PDFs', basePrice: 600, maintenancePrice: 70, icon: '📄', category: 'integration' },
  { id: 'crm', name: 'CRM Connect', description: 'Integração CRM', basePrice: 1200, maintenancePrice: 180, icon: '👥', category: 'integration' },
  
  // Analytics
  { id: 'analytics', name: 'Dashboard', description: 'Painel de métricas', basePrice: 1500, maintenancePrice: 200, icon: '📊', category: 'analytics' },
  { id: 'reports', name: 'Reports Pro', description: 'Relatórios avançados', basePrice: 1000, maintenancePrice: 120, icon: '📋', category: 'analytics' },
  
  // Automação
  { id: 'notifications', name: 'Alertas Auto', description: 'Notificações smart', basePrice: 400, maintenancePrice: 60, icon: '🔔', category: 'automation' },
  { id: 'backup', name: 'Backup Cloud', description: 'Backup automático', basePrice: 300, maintenancePrice: 40, icon: '💾', category: 'automation' },
  { id: 'api', name: 'API Access', description: 'Integração via API', basePrice: 800, maintenancePrice: 100, icon: '🔗', category: 'automation' },
];

// Pacotes de serviços base para o construtor
const servicePackages: ServicePackage[] = [
  {
    id: 'automation',
    name: 'Starter',
    subtitle: 'Automação via WhatsApp',
    icon: '🚀',
    basePrice: 2000,
    maintenancePrice: 300,
    requiredTools: ['whatsapp', 'google_sheets'],
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 'micro_saas',
    name: 'Pro',
    subtitle: 'Plataforma completa',
    icon: '⭐',
    basePrice: 5000,
    maintenancePrice: 400,
    requiredTools: ['whatsapp', 'google_sheets', 'analytics', 'crm'],
    gradient: 'from-purple-500 to-indigo-600',
    isPopular: true
  }
];

// Planos pré-definidos
const presetPlans: PresetPlan[] = [
  {
    id: 'basic',
    name: 'Básico',
    subtitle: 'Perfeito para começar',
    icon: '🌱',
    totalPrice: 5500,
    maintenancePrice: 800,
    tools: ['whatsapp', 'google_sheets', 'pdf', 'notifications'],
    highlights: [
      'WhatsApp Bot Inteligente',
      'Google Sheets Integration',
      'Gerador de PDF',
      'Notificações Automáticas',
      'Suporte via WhatsApp',
      'Implementação em 30 dias'
    ],
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'medium',
    name: 'Médio',
    subtitle: 'Solução intermediária',
    icon: '🚀',
    totalPrice: 8900,
    maintenancePrice: 1200,
    tools: ['whatsapp', 'google_sheets', 'pdf', 'crm', 'analytics', 'email', 'notifications'],
    highlights: [
      'Tudo do Básico +',
      'CRM Integrado',
      'Dashboard Analytics',
      'Email Marketing',
      'Relatórios Avançados',
      'Backup Automático',
      'Suporte Prioritário'
    ],
    gradient: 'from-blue-500 to-purple-600',
    isPopular: true
  },
  {
    id: 'custom',
    name: 'Personalizado',
    subtitle: 'Monte sua solução ideal',
    icon: '🛠️',
    totalPrice: 0,
    maintenancePrice: 0,
    tools: [],
    highlights: [
      'Escolha exatamente o que precisa',
      'Preço calculado em tempo real',
      'Flexibilidade total',
      'Escalável conforme crescimento'
    ],
    gradient: 'from-purple-500 to-pink-600'
  }
];

const CompleteSolutionBuilder: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('medium');
  const [selectedPackage, setSelectedPackage] = useState<string>('automation');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'communication' | 'integration' | 'analytics' | 'automation'>('communication');
  const [totalPrice, setTotalPrice] = useState({ base: 0, maintenance: 0 });
  const [showPriceAnimation, setShowPriceAnimation] = useState(false);

  const currentPackage = servicePackages.find(p => p.id === selectedPackage)!;
  const currentPreset = presetPlans.find(p => p.id === selectedPlan)!;

  // Atualizar ferramentas selecionadas quando mudar o pacote (apenas no modo personalizado)
  useEffect(() => {
    if (selectedPlan === 'custom') {
      setSelectedTools(currentPackage.requiredTools);
    }
  }, [selectedPackage, selectedPlan]);

  // Calcular preço total (apenas no modo personalizado)
  useEffect(() => {
    if (selectedPlan === 'custom') {
      const packagePrice = {
        base: currentPackage.basePrice,
        maintenance: currentPackage.maintenancePrice
      };

      const toolsPrice = selectedTools.reduce((acc, toolId) => {
        const tool = availableTools.find(t => t.id === toolId);
        if (tool) {
          acc.base += tool.basePrice;
          acc.maintenance += tool.maintenancePrice;
        }
        return acc;
      }, { base: 0, maintenance: 0 });

      setTotalPrice({
        base: packagePrice.base + toolsPrice.base,
        maintenance: packagePrice.maintenance + toolsPrice.maintenance
      });
      
      setShowPriceAnimation(true);
      setTimeout(() => setShowPriceAnimation(false), 500);
    }
  }, [selectedTools, currentPackage, selectedPlan]);

  const toggleTool = (toolId: string) => {
    const tool = availableTools.find(t => t.id === toolId);
    if (tool?.isRequired || currentPackage.requiredTools.includes(toolId)) return;

    setSelectedTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const categoryTabs = [
    { id: 'communication', name: 'Comunicação', icon: '💬', color: 'from-blue-500 to-cyan-500' },
    { id: 'integration', name: 'Integração', icon: '🔗', color: 'from-green-500 to-emerald-500' },
    { id: 'analytics', name: 'Analytics', icon: '📊', color: 'from-purple-500 to-pink-500' },
    { id: 'automation', name: 'Automação', icon: '⚡', color: 'from-orange-500 to-red-500' }
  ] as const;

  const getToolsForCategory = (category: string) => 
    availableTools.filter(tool => tool.category === category);

  const getSelectedCount = (category: string) => 
    getToolsForCategory(category).filter(tool => selectedTools.includes(tool.id)).length;

  // Use type assertion to tell TypeScript that filter(Boolean) removes all undefined values
  const getToolByIds = (toolIds: string[]): Tool[] => 
    toolIds.map(id => availableTools.find(tool => tool.id === id))
      .filter((tool): tool is Tool => tool !== undefined);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-6 mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
          ⚡ Soluções de Automação
        </h2>
        <p className="text-white/70 text-sm">Escolha o plano ideal para seu negócio</p>
      </div>

      {/* Seleção de Planos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {presetPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative cursor-pointer transition-all duration-300 rounded-xl p-4 border-2 ${
              selectedPlan === plan.id 
                ? 'border-cyan-400 scale-105 shadow-xl' 
                : 'border-white/20 hover:border-white/40'
            } bg-gradient-to-br ${plan.gradient} bg-opacity-20`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.isPopular && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                ⭐ Mais Popular
              </div>
            )}

            <div className="text-center">
              <div className="text-3xl mb-2">{plan.icon}</div>
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-white/70 text-sm mb-3">{plan.subtitle}</p>
              
              {plan.id !== 'custom' ? (
                <div className="mb-4">
                  <div className="text-2xl font-bold text-white">
                    R$ {(plan.totalPrice / 1000).toFixed(1)}k
                  </div>
                  <div className="text-white/70 text-xs">
                    +R$ {plan.maintenancePrice}/mês
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <div className="text-lg font-bold text-cyan-300">
                    Preço Personalizado
                  </div>
                  <div className="text-white/70 text-xs">
                    Você controla o investimento
                  </div>
                </div>
              )}

              {/* Destaques compactos */}
              <div className="text-left">
                {plan.highlights.slice(0, 4).map((highlight, index) => (
                  <div key={index} className="flex items-center text-xs text-white/90 mb-1">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 mr-2 flex-shrink-0"></span>
                    <span>{highlight}</span>
                  </div>
                ))}
                {plan.highlights.length > 4 && (
                  <div className="text-xs text-cyan-300 mt-1">
                    +{plan.highlights.length - 4} mais recursos...
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conteúdo Condicional baseado no plano selecionado */}
      {selectedPlan !== 'custom' ? (
        /* Visualização dos Planos Básico e Médio */
        <div className="bg-white/5 backdrop-blur rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            📋 O que está incluído no plano {currentPreset.name}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Ferramentas Incluídas */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">🛠️</span>Ferramentas Incluídas
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {getToolByIds(currentPreset.tools).map((tool) => (
                  <div key={tool.id} className="flex items-center p-2 bg-white/10 rounded-lg border border-white/20">
                    <span className="text-lg mr-2">{tool.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-white text-xs truncate">{tool.name}</h5>
                      <p className="text-white/70 text-xs truncate">{tool.description}</p>
                    </div>
                    <div className="text-green-400 text-sm ml-1">✓</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Todos os Destaques */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">⭐</span>Principais Benefícios
              </h4>
              
              <div className="space-y-1">
                {currentPreset.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start p-1.5 bg-white/5 rounded-md">
                    <span className="text-cyan-400 text-xs mr-1.5 flex-shrink-0 mt-0.5">★</span>
                    <span className="text-white/90 text-xs leading-tight">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA para planos fixos */}
          <div className="mt-6 text-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              🚀 Escolher Plano {currentPreset.name} - R$ {(currentPreset.totalPrice / 1000).toFixed(1)}k
            </button>
            <p className="text-white/70 text-xs mt-2">
              Implementação em 30 dias • Suporte incluído • Garantia de 90 dias
            </p>
          </div>
        </div>
      ) : (
        /* Construtor Personalizado */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Coluna 1: Seleção de Pacote Base */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center">
              <span className="mr-2">📦</span>Pacote Base
            </h3>
            
            <div className="space-y-3">
              {servicePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative cursor-pointer transition-all duration-300 rounded-xl p-3 border-2 ${
                    selectedPackage === pkg.id 
                      ? 'border-cyan-400 bg-gradient-to-r ' + pkg.gradient + ' bg-opacity-20' 
                      : 'border-white/20 bg-white/5 hover:border-white/40'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-xl mr-2">{pkg.icon}</span>
                      <div>
                        <h4 className="font-bold text-white text-sm">{pkg.name}</h4>
                        <p className="text-white/70 text-xs">{pkg.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">
                        R$ {(pkg.basePrice / 1000).toFixed(0)}k
                      </div>
                      <div className="text-white/70 text-xs">
                        +{pkg.maintenancePrice}/mês
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo de Preço Personalizado */}
            <div className="mt-4 bg-slate-800/50 backdrop-blur border border-white/10 rounded-xl p-4">
              <div className={`text-center transition-all duration-500 ${showPriceAnimation ? 'scale-110 text-cyan-300' : ''}`}>
                <div className="text-2xl font-bold text-white">
                  R$ {(totalPrice.base / 1000).toFixed(1)}k
                </div>
                <div className="text-white/70 text-xs">
                  +R$ {totalPrice.maintenance}/mês manutenção
                </div>
              </div>
              
              <button className="w-full mt-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                🛠️ Solicitar Personalizado
              </button>
            </div>
          </div>

          {/* Coluna 2 e 3: Construtor de Ferramentas */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center">
              <span className="mr-2">⚙️</span>Adicione Ferramentas
            </h3>

            {/* Tabs Horizontais */}
            <div className="flex flex-wrap gap-2 mb-4">
              {categoryTabs.map((tab) => {
                const count = getSelectedCount(tab.id);
                return (
                  <button
                    key={tab.id}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="mr-1">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.name}</span>
                    {count > 0 && (
                      <span className="ml-2 bg-white/30 text-xs px-1.5 py-0.5 rounded-full">
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Ferramentas da Categoria Ativa */}
            <div className="bg-white/5 backdrop-blur rounded-xl p-3 min-h-[280px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {getToolsForCategory(activeTab).map((tool) => {
                  const isSelected = selectedTools.includes(tool.id);
                  const isRequired = tool.isRequired || currentPackage.requiredTools.includes(tool.id);
                  
                  return (
                    <div
                      key={tool.id}
                      className={`relative cursor-pointer transition-all duration-300 rounded-lg p-2 border ${
                        isRequired 
                          ? 'border-green-400 bg-green-900/20'
                          : isSelected 
                            ? 'border-cyan-400 bg-cyan-900/20 scale-105' 
                            : 'border-white/20 bg-white/5 hover:border-white/40 hover:scale-105'
                      }`}
                      onClick={() => !isRequired && toggleTool(tool.id)}
                    >
                      {isRequired && (
                        <div className="absolute -top-1 -right-1 bg-green-500 text-white px-1 py-0.5 rounded-full text-xs font-bold">
                          Base
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center flex-1 min-w-0">
                          <span className="text-lg mr-2 flex-shrink-0">{tool.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-white text-xs truncate">{tool.name}</h5>
                            <p className="text-white/70 text-xs truncate">{tool.description}</p>
                          </div>
                        </div>
                        
                        <div className="text-right ml-1 flex-shrink-0">
                          <div className="text-xs font-bold text-white">
                            +{(tool.basePrice / 1000).toFixed(1)}k
                          </div>
                          <div className="text-white/70 text-xs">
                            +{tool.maintenancePrice}/mês
                          </div>
                        </div>
                      </div>
                      
                      {!isRequired && (
                        <div className="absolute top-1 right-1">
                          <div className={`w-2.5 h-2.5 rounded border transition-all ${
                            isSelected 
                              ? 'bg-cyan-400 border-cyan-400' 
                              : 'border-white/40'
                          }`}>
                            {isSelected && (
                              <span className="text-white text-xs flex items-center justify-center h-full">✓</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats e Comparação Final */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stats */}

      </div>

      {/* Indicador de Seleção (apenas para personalizado) */}
      {selectedPlan === 'custom' && (
        <div className="mt-4 flex justify-center">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
            <span className="text-white/70 text-sm">Ferramentas selecionadas:</span>
            <span className="text-cyan-400 font-bold">{selectedTools.length}</span>
            {selectedTools.slice(0, 8).map((toolId) => {
              const tool = availableTools.find(t => t.id === toolId);
              return tool ? (
                <span key={toolId} className="text-lg" title={tool.name}>
                  {tool.icon}
                </span>
              ) : null;
            })}
            {selectedTools.length > 8 && (
              <span className="text-white/70 text-sm">+{selectedTools.length - 8}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompleteSolutionBuilder;