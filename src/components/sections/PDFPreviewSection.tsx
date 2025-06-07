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

// Componente PDF Preview Melhorado
const PDFPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const pdfPages = [
    {
      title: "Capa da Proposta",
      content: (
        <div className="bg-gradient-to-br from-white to-gray-100 p-4 rounded-lg text-gray-800 h-full flex flex-col justify-between border shadow-inner">
          {/* Header com logo */}
          <div className="text-center border-b pb-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <h1 className="text-lg font-bold text-primary">SUA EMPRESA</h1>
            <p className="text-xs text-gray-600">Joias & Acessórios</p>
          </div>

          {/* Conteúdo principal */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-center text-primary">PROPOSTA COMERCIAL</h2>
            <div className="bg-primary/10 rounded-lg p-3 mb-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-semibold">Para:</p>
                  <p className="text-primary">Ana Silva</p>
                </div>
                <div>
                  <p className="font-semibold">Data:</p>
                  <p>{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 rounded-lg p-3">
              <h3 className="font-bold text-secondary mb-2">GOLD FACE EARRING</h3>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Quantidade:</span>
                  <span className="font-semibold">5 unidades</span>
                </div>
                <div className="flex justify-between">
                  <span>Preço unitário:</span>
                  <span className="font-semibold">R$ 153,23</span>
                </div>
                <div className="flex justify-between border-t pt-1">
                  <span className="font-bold">Valor total:</span>
                  <span className="font-bold text-secondary">R$ 766,15</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 border-t pt-2">
            <p>Proposta válida por 30 dias</p>
          </div>
        </div>
      )
    },
    {
      title: "Formas de Pagamento",
      content: (
        <div className="bg-gradient-to-br from-white to-gray-100 p-4 rounded-lg text-gray-800 h-full flex flex-col border shadow-inner">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold text-primary mb-2">RESUMO FINANCEIRO</h2>
            <div className="text-2xl font-bold text-secondary">R$ 766,15</div>
            <p className="text-sm text-gray-600">Valor total da proposta</p>
          </div>

          {/* Formas de pagamento */}
          <div className="space-y-3 flex-1">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <span className="text-green-600 mr-2">💳</span>
                <h3 className="font-bold text-green-700">PIX À Vista</h3>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-green-800">R$ 727,84</p>
                <p className="text-green-600">5% de desconto</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <span className="text-blue-600 mr-2">💎</span>
                <h3 className="font-bold text-blue-700">Cartão de Crédito</h3>
              </div>
              <div className="text-sm space-y-1">
                <p>À vista: <span className="font-semibold">R$ 766,15</span></p>
                <p>2x: <span className="font-semibold">R$ 383,08</span></p>
                <p>3x: <span className="font-semibold">R$ 255,38</span></p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <span className="text-orange-600 mr-2">📄</span>
                <h3 className="font-bold text-orange-700">Boleto Bancário</h3>
              </div>
              <div className="text-sm">
                <p className="font-semibold">R$ 766,15</p>
                <p className="text-orange-600">Vencimento: 5 dias úteis</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-primary/10 rounded-lg p-3 mt-4">
            <p className="text-xs text-center">
              <span className="font-semibold">Contato:</span> (11) 99999-9999 | vendas@empresa.com
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Catálogo de Produtos",
      content: (
        <div className="bg-gradient-to-br from-white to-gray-100 p-10 rounded-lg text-gray-800 h-full border shadow-inner">
          <h2 className="text-lg font-bold text-primary mb-3 text-center">CATÁLOGO - COLEÇÃO VERÃO</h2>
          
          <div className="grid grid-cols-2 gap-3 h-full">
            {/* Produto 1 */}
            <div className="bg-white rounded-lg p-2 border shadow-sm">
              <div className="w-full h-20 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded mb-2 flex items-center justify-center">
                <span className="text-yellow-700 text-lg">💍</span>
              </div>
              <h4 className="font-bold text-xs text-primary">Gold Face Earring</h4>
              <p className="text-xs text-secondary font-semibold">R$ 153,23</p>
              <p className="text-xs text-gray-600">Ref: GFE001</p>
            </div>

            {/* Produto 2 */}
            <div className="bg-white rounded-lg p-2 border shadow-sm">
              <div className="w-full h-20 bg-gradient-to-br from-pink-200 to-pink-400 rounded mb-2 flex items-center justify-center">
                <span className="text-pink-700 text-lg">💎</span>
              </div>
              <h4 className="font-bold text-xs text-primary">Silver Necklace</h4>
              <p className="text-xs text-secondary font-semibold">R$ 234,50</p>
              <p className="text-xs text-gray-600">Ref: SN002</p>
            </div>

            {/* Produto 3 */}
            <div className="bg-white rounded-lg p-2 border shadow-sm">
              <div className="w-full h-20 bg-gradient-to-br from-blue-200 to-blue-400 rounded mb-2 flex items-center justify-center">
                <span className="text-blue-700 text-lg">💍</span>
              </div>
              <h4 className="font-bold text-xs text-primary">Diamond Ring</h4>
              <p className="text-xs text-secondary font-semibold">R$ 456,90</p>
              <p className="text-xs text-gray-600">Ref: DR003</p>
            </div>

            {/* Produto 4 */}
            <div className="bg-white rounded-lg p-2 border shadow-sm">
              <div className="w-full h-20 bg-gradient-to-br from-green-200 to-green-400 rounded mb-2 flex items-center justify-center">
                <span className="text-green-700 text-lg">✨</span>
              </div>
              <h4 className="font-bold text-xs text-primary">Emerald Bracelet</h4>
              <p className="text-xs text-secondary font-semibold">R$ 189,75</p>
              <p className="text-xs text-gray-600">Ref: EB004</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const steps = [
    { icon: '👩‍💼', title: 'Vendedora cria proposta', desc: 'Via WhatsApp ou sistema' },
    { icon: '🤖', title: 'Sistema gera PDF', desc: 'Automático com sua marca' },
    { icon: '📱', title: 'Enviado para revendedora', desc: 'WhatsApp + catálogo' },
    { icon: '✏️', title: 'Permite atualização', desc: 'Quantidades e produtos' },
    { icon: '🔄', title: 'Retorna atualizado', desc: 'Nova proposta gerada' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % pdfPages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [pdfPages.length]);

  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-4">
            <span className="mr-2">📄</span>
            GERAÇÃO AUTOMÁTICA DE PDF
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            PDFs Profissionais <br /> Gerados Automaticamente
          </h2>
          <p className="text-lg text-white/70 max-w-4xl mx-auto">
            Sistema completo para vendedoras criarem propostas e catálogos profissionais. 
            Revendedoras podem atualizar e devolver via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left: PDF Preview */}
          <div>
          <div className="bg-primary-dark/30 backdrop-blur border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🔄</span>
                Como Funciona o Processo
              </h3>
              
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className={`flex items-center p-3 rounded-lg transition-all duration-500 ${
                    currentStep === index 
                      ? 'bg-secondary/20 border border-secondary/50 scale-105' 
                      : 'bg-white/5'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mr-3 transition-all ${
                      currentStep === index ? 'bg-secondary' : 'bg-primary-dark/50'
                    }`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm">{step.title}</h4>
                      <p className="text-white/70 text-xs">{step.desc}</p>
                    </div>
                    {currentStep === index && (
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-primary-dark/30 rounded-lg p-4 text-center border border-white/10">
                <div className="text-2xl font-bold text-secondary">8s</div>
                <div className="text-xs text-white/70">Geração do PDF</div>
              </div>
              <div className="bg-primary-dark/30 rounded-lg p-4 text-center border border-white/10">
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-xs text-white/70">Personalizado</div>
              </div>
              <div className="bg-primary-dark/30 rounded-lg p-4 text-center border border-white/10">
                <div className="text-2xl font-bold text-secondary">2-way</div>
                <div className="text-xs text-white/70">Comunicação</div>
              </div>
            </div>
          </div>

          {/* Right: Process & Features */}
          <div className="space-y-6">
            
            {/* Animated Process */}



            {/* Features Grid */}
            <div className="bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur border border-secondary/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🎨</span>
                Recursos Inclusos
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🎨', label: 'Marca personalizada', desc: 'Logo e cores' },
                  { icon: '📊', label: 'Dados automáticos', desc: 'Preços e produtos' },
                  { icon: '💳', label: 'Formas pagamento', desc: 'PIX, cartão, boleto' },
                  { icon: '📱', label: 'WhatsApp integrado', desc: 'Envio automático' },
                  { icon: '✏️', label: 'Edição colaborativa', desc: 'Revendedora atualiza' },
                  { icon: '📈', label: 'Relatórios vendas (Saas)', desc: 'Controle total' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-all">
                    <div className="text-lg mb-1">{item.icon}</div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-xs text-white/70">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Before/After */}
            <div className="bg-primary-dark/30 backdrop-blur border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 text-center">⚡ Antes vs Depois</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-red-400 mb-2">❌ ANTES</div>
                  <div className="space-y-2 text-xs text-white/70">
                    <p>• Planilhas criadas em ferramentas como Canva</p>
                    <p>• Design amador</p>
                    <p>• Erros de cálculo</p>
                    <p>• Retrabalho constante</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-secondary mb-2">✅ DEPOIS</div>
                  <div className="space-y-2 text-xs text-white/70">
                    <p>• PDFs profissionais</p>
                    <p>• Marca personalizada</p>
                    <p>• Cálculos automáticos</p>
                    <p>• Processo fluido</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-4 bg-gradient-to-r from-secondary to-primary hover:from-secondary/80 hover:to-primary/80 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg">
              <a href="https://wa.me/5562993201557?text=Olá! Vi a proposta para PDFs Automáticos e tenho interesse em prosseguir." className="text-white">🚀 Quero PDFs Automáticos</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      <div className="text-center mb-6">
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
                ? 'border-secondary scale-105 shadow-xl' 
                : 'border-white/20 hover:border-white/40'
            } bg-gradient-to-br ${plan.gradient} bg-opacity-20`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.isPopular && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 rounded-full text-xs font-bold">
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
                  <div className="text-lg font-bold text-secondary">
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
                    <span className="w-1 h-1 rounded-full bg-secondary mr-2 flex-shrink-0"></span>
                    <span>{highlight}</span>
                  </div>
                ))}
                {plan.highlights.length > 4 && (
                  <div className="text-xs text-secondary mt-1">
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
        <div className="bg-primary-dark/30 backdrop-blur rounded-xl p-6 border border-white/10">
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
                  <div key={tool.id} className="flex items-center p-2 bg-primary-dark/50 rounded-lg border border-secondary/30">
                    <span className="text-lg mr-2">{tool.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-white text-xs truncate">{tool.name}</h5>
                      <p className="text-white/70 text-xs truncate">{tool.description}</p>
                    </div>
                    <div className="text-secondary text-sm ml-1">✓</div>
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
                  <div key={index} className="flex items-start p-1.5 bg-primary-dark/30 rounded-md">
                    <span className="text-secondary text-xs mr-1.5 flex-shrink-0 mt-0.5">★</span>
                    <span className="text-white/90 text-xs leading-tight">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA para planos fixos */}
          <div className="mt-6 text-center">
            <button className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/80 hover:to-primary/80 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              <a href="https://wa.me/5562993201557?text=Olá! Vi a proposta para PDFs Automáticos e tenho interesse em prosseguir." className="text-white">🚀 Escolher Plano {currentPreset.name} - R$ {(currentPreset.totalPrice / 1000).toFixed(1)}k</a>
            </button>
            <p className="text-white/70 text-xs mt-2">
              Valores adicionais de manutenção podem ser variáveis de acordo com a usabilidade do cliente
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
                      ? 'border-secondary bg-gradient-to-r ' + pkg.gradient + ' bg-opacity-20' 
                      : 'border-white/20 bg-primary-dark/30 hover:border-white/40'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-1 -right-1 bg-gradient-to-r from-secondary to-primary text-white px-2 py-0.5 rounded-full text-xs font-bold">
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
            <div className="mt-4 bg-primary-dark/50 backdrop-blur border border-secondary/30 rounded-xl p-4">
              <div className={`text-center transition-all duration-500 ${showPriceAnimation ? 'scale-110 text-secondary' : ''}`}>
                <div className="text-2xl font-bold text-white">
                  R$ {(totalPrice.base / 1000).toFixed(1)}k
                </div>
                <div className="text-white/70 text-xs">
                  +R$ {totalPrice.maintenance}/mês manutenção
                </div>
              </div>
              
              <button className="w-full mt-3 bg-gradient-to-r from-secondary to-primary hover:from-secondary/80 hover:to-primary/80 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
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
                        : 'bg-primary-dark/30 text-white/80 hover:bg-primary-dark/50'
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
            <div className="bg-primary-dark/30 backdrop-blur rounded-xl p-3 min-h-[280px] border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {getToolsForCategory(activeTab).map((tool) => {
                  const isSelected = selectedTools.includes(tool.id);
                  const isRequired = tool.isRequired || currentPackage.requiredTools.includes(tool.id);
                  
                  return (
                    <div
                      key={tool.id}
                      className={`relative cursor-pointer transition-all duration-300 rounded-lg p-2 border ${
                        isRequired 
                          ? 'border-secondary bg-secondary/20'
                          : isSelected 
                            ? 'border-secondary bg-secondary/10 scale-105' 
                            : 'border-white/20 bg-primary-dark/20 hover:border-white/40 hover:scale-105'
                      }`}
                      onClick={() => !isRequired && toggleTool(tool.id)}
                    >
                      {isRequired && (
                        <div className="absolute -top-1 -right-1 bg-secondary text-white px-1 py-0.5 rounded-full text-xs font-bold">
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
                              ? 'bg-secondary border-secondary' 
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

      {/* Seção PDF Preview */}
      <PDFPreviewSection />

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
                👑 Agendar Consultoria Gratuita
              </button>
              <button className="px-8 py-4 bg-primary-dark/50 hover:bg-primary-dark/70 border border-yellow-400/50 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                💬 Conversar no WhatsApp
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
        <div className="grid grid-cols-4 gap-4">
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
        </div>

        {/* Comparação Rápida */}
        <div className="bg-primary-dark/30 backdrop-blur rounded-xl p-4 border border-white/10">
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
        </div>
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
    </div>
  );
};

export default PDFPreviewSection;