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

  const getToolByIds = (toolIds: string[]): Tool[] => 
    toolIds.map(id => availableTools.find(tool => tool.id === id))
      .filter((tool): tool is Tool => tool !== undefined);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header */}

      {/* Seção Premium: Desenvolvimento Customizado */}
      <div className="mt-12 border-t border-white/20 pt-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur border border-yellow-400/30 rounded-full text-yellow-300 text-sm font-medium mb-4">
            <span className="mr-2">👑</span>
            SOLUÇÕES ENTERPRISE
          </div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            ⚡ Desenvolvimento Sob Medida
          </h3>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Precisa de algo único? Desenvolvemos soluções completas do zero, totalmente personalizadas para seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna 1: Tipos de Soluções */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">🏗️</span>
              O que Desenvolvemos
            </h4>

            <div className="space-y-4">
              {[
                {
                  icon: '🌐',
                  title: 'Plataforma SaaS Completa',
                  description: 'Sistema web completo com painel admin, usuários, assinaturas',
                  features: ['Multi-tenant', 'Dashboard completo', 'Sistema de pagamento', 'API própria'],
                  price: 'A partir de R$ 25k'
                },
                {
                  icon: '📱',
                  title: 'App Mobile + Web',
                  description: 'Aplicativo nativo + plataforma web sincronizados',
                  features: ['iOS & Android', 'Sincronização real-time', 'Push notifications', 'Offline first'],
                  price: 'A partir de R$ 35k'
                },
                {
                  icon: '🤖',
                  title: 'IA & Automação Avançada',
                  description: 'Soluções com inteligência artificial personalizada',
                  features: ['Machine Learning', 'Processamento de linguagem', 'Automação complexa', 'Integração APIs'],
                  price: 'A partir de R$ 40k'
                },
                {
                  icon: '🏢',
                  title: 'Sistema Empresarial',
                  description: 'ERP, CRM ou sistema interno completo',
                  features: ['Gestão completa', 'Relatórios avançados', 'Integrações enterprise', 'Suporte dedicado'],
                  price: 'A partir de R$ 50k'
                }
              ].map((solution, index) => (
                <div key={index} className="bg-gradient-to-r from-primary-dark/50 to-primary/30 backdrop-blur border border-yellow-400/20 rounded-xl p-4 hover:border-yellow-400/40 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4 flex-shrink-0">{solution.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-bold text-white text-lg">{solution.title}</h5>
                        <span className="text-yellow-400 font-bold text-sm">{solution.price}</span>
                      </div>
                      <p className="text-white/80 text-sm mb-3">{solution.description}</p>
                      <div className="grid grid-cols-2 gap-1">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-white/70">
                            <span className="w-1 h-1 rounded-full bg-yellow-400 mr-2 flex-shrink-0"></span>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2: Processo e Diferencial */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">⭐</span>
              Por que Escolher Premium?
            </h4>

            {/* Diferenciais */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur border border-yellow-400/30 rounded-xl p-6 mb-6">
              <h5 className="font-bold text-yellow-300 mb-4 flex items-center">
                <span className="mr-2">👑</span>
                Diferenciais Premium
              </h5>
              
              <div className="space-y-3">
                {[
                  'Código 100% proprietário seu',
                  'Arquitetura escalável enterprise',
                  'Suporte técnico dedicado',
                  'Documentação técnica completa',
                  'Treinamento da equipe incluído',
                  'Garantia de 6 meses',
                  'Hospedagem própria opcional',
                  'Código fonte entregue'
                ].map((differential, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-yellow-400 mr-3">✦</span>
                    <span className="text-white/90 text-sm">{differential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Processo de Desenvolvimento */}
            <div className="bg-primary-dark/30 backdrop-blur border border-white/20 rounded-xl p-6">
              <h5 className="font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🔄</span>
                Nosso Processo
              </h5>

              <div className="space-y-4">
                {[
                  { phase: '1', title: 'Análise & Planejamento', duration: '1-2 semanas', description: 'Levantamento detalhado, arquitetura e cronograma' },
                  { phase: '2', title: 'Desenvolvimento', duration: '8-16 semanas', description: 'Desenvolvimento ágil com entregas semanais' },
                  { phase: '3', title: 'Testes & Deploy', duration: '2-3 semanas', description: 'Testes completos e colocação em produção' },
                  { phase: '4', title: 'Suporte & Evolução', duration: 'Contínuo', description: 'Manutenção e novas funcionalidades' }
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm mr-3 flex-shrink-0">
                      {step.phase}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h6 className="font-semibold text-white text-sm">{step.title}</h6>
                        <span className="text-yellow-400 text-xs font-medium">{step.duration}</span>
                      </div>
                      <p className="text-white/70 text-xs">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Premium */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur border border-yellow-400/40 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              🚀 Pronto para uma Solução Única?
            </h4>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Conte-nos sua ideia e faremos um orçamento personalizado. Consultoria inicial gratuita de 1 hora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <a href="https://wa.me/5562993201557?text=Olá! Vi a proposta para PDFs Automáticos e tenho interesse em prosseguir." className="text-black">👑 Agendar Consultoria Gratuita</a>
              </button>
              <button className="px-8 py-4 bg-primary-dark/50 hover:bg-primary-dark/70 border border-yellow-400/50 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                <a href="https://wa.me/5562993201557?text=Olá! Vi a proposta para PDFs Automáticos e tenho interesse em prosseguir." className="text-white">💬 Conversar no WhatsApp</a>
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {[
                { icon: '⏱️', title: 'Resposta em 24h', subtitle: 'Orçamento detalhado' },
                { icon: '🎯', title: 'Consultoria Gratuita', subtitle: '1 hora sem compromisso' },
                { icon: '💎', title: 'Qualidade Premium', subtitle: 'Tecnologia de ponta' }
              ].map((guarantee, index) => (
                <div key={index} className="bg-primary-dark/20 backdrop-blur rounded-lg p-3">
                  <div className="text-2xl mb-1">{guarantee.icon}</div>
                  <div className="font-semibold text-white text-sm">{guarantee.title}</div>
                  <div className="text-white/70 text-xs">{guarantee.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats e Comparação Final */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stats */}
        {/* <div className="grid grid-cols-4 gap-4">
          {[
            { icon: '⏰', value: '30s', label: 'Processo' },
            { icon: '📈', value: '95%', label: 'Economia' },
            { icon: '💰', value: '40%', label: '+Vendas' },
            { icon: '🔄', value: '24/7', label: 'Ativo' }
          ].map((stat, index) => (
            <div key={index} className="bg-primary-dark/30 backdrop-blur border border-white/10 rounded-lg p-3 text-center hover:scale-105 transition-transform">
              <div className="text-lg mb-1">{stat.icon}</div>
              <div className="text-sm font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/70">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Comparação Rápida */}
        {/* <div className="bg-primary-dark/30 backdrop-blur rounded-xl p-4 border border-white/10">
          <h4 className="text-lg font-bold text-white mb-3 text-center">🎯 Qual escolher?</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between p-2 bg-green-900/20 rounded">
              <span className="text-white">🌱 Básico:</span>
              <span className="text-secondary">Ideal para começar</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-blue-900/20 rounded">
              <span className="text-white">🚀 Médio:</span>
              <span className="text-secondary">Negócios em crescimento</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-purple-900/20 rounded">
              <span className="text-white">🛠️ Personalizado:</span>
              <span className="text-secondary">Necessidades específicas</span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Indicador de Seleção (apenas para personalizado) */}
      {selectedPlan === 'custom' && (
        <div className="mt-4 flex justify-center">
          <div className="flex items-center space-x-2 bg-primary-dark/30 backdrop-blur rounded-full px-4 py-2 border border-white/10">
            <span className="text-white/70 text-sm">Ferramentas selecionadas:</span>
            <span className="text-secondary font-bold">{selectedTools.length}</span>
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
              <div className="mt-8 text-white/70 text-sm text-center">
          <p className="mb-2">Desenvolvido com ❤️ pela LoopHID | Soluções em Automação</p>
        </div>
    </div>
  );
};

export default CompleteSolutionBuilder;