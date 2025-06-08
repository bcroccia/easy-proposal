import React, { useState, useEffect, useRef } from 'react';

// --- Dados para os Cards de Funcionalidades ---
const features = [
    {
      title: 'Automação WhatsApp',
      description: 'Receba o PDF via WhatsApp e gere propostas automaticamente em 30 segundos.',
      icon: '�',
      gradient: 'bg-gradient-to-br from-green-600 to-emerald-700',
      benefits: [
        'Integração direta com WhatsApp',
        'Processamento instantâneo',
        'Zero intervenção manual'
      ]
    },
    {
      title: 'Dashboard Profissional',
      description: 'Interface completa para gerenciar propostas, clientes e relatórios em tempo real.',
      icon: '📊',
      gradient: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      benefits: [
        'Métricas em tempo real',
        'Interface intuitiva',
        'Controle total dos dados'
      ]
    },
    {
      title: 'PDF Personalizado',
      description: 'Gere PDFs profissionais com sua identidade visual e PDFs atualizados automaticamente.',
      icon: '📄',
      gradient: 'bg-gradient-to-br from-purple-600 to-pink-700',
      benefits: [
        'Design profissional',
        'Marca personalizada',
        'Geração instantânea'
      ]
    },
    {
      title: 'Integração Google Sheets',
      description: 'Conecte com suas planilhas existentes para manter preços e dados sempre atualizados.',
      icon: '📈',
      gradient: 'bg-gradient-to-br from-teal-600 to-cyan-700',
      benefits: [
        'Sincronização automática',
        'Preços sempre atuais',
        'Fácil de gerenciar'
      ]
    },
    {
      title: 'Multi-usuário',
      description: 'Permita que toda sua equipe use o sistema com diferentes níveis de permissão.',
      icon: '👥',
      gradient: 'bg-gradient-to-br from-orange-600 to-red-700',
      benefits: [
        'Controle de acesso',
        'Colaboração em equipe',
        'Histórico de ações'
      ]
    },
    {
      title: 'Escalabilidade Total',
      description: 'Sistema cresce junto com seu negócio, sem limitações de propostas ou usuários.',
      icon: '🚀',
      gradient: 'bg-gradient-to-br from-indigo-600 to-purple-700',
      benefits: [
        'Crescimento ilimitado',
        'Performance constante',
        'Suporte 24/7'
      ]
    }
];

// --- COMPONENTE DO CARD DE FUNCIONALIDADE ---
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  benefits: string[];
  isActive: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description,
  icon, 
  gradient, 
  benefits,
  isActive, 
}) => {
  const cardContentRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || !cardContentRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { top, left, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = (y / height - 0.5) * -25;
    const rotateY = (x / width - 0.5) * 25;

    cardContentRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const onMouseLeave = () => {
    if (!cardContentRef.current) return;
    cardContentRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div 
      className={`relative w-full h-full rounded-2xl transition-all duration-500 transform ${isActive ? '' : 'opacity-90'}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div 
        ref={cardContentRef}
        className={`relative p-6 w-full h-full rounded-2xl backdrop-blur-sm border transition-all duration-500 overflow-hidden ${
          isActive 
            ? `${gradient} border-white/30 shadow-2xl shadow-blue-500/25` 
            : 'bg-gray-800/90 border-white/10'
        }`}
      >
        <div className="relative z-10">
            {/* Icon */}
            <div className={`w-16 h-16 rounded-xl ${isActive ? 'bg-white/20' : 'bg-white/10'} flex items-center justify-center mb-4 shadow-lg text-3xl transition-all duration-300 ${isActive ? '-rotate-12 scale-110' : ''}`}>
              {icon}
            </div>
            
            {/* Content */}
            <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80'}`}>
              {title}
            </h3>
            
            <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-white/90' : 'text-white/60'}`}>
              {description}
            </p>

            {/* Benefits - Show when active */}
            <div className={`transition-all duration-500 overflow-hidden mt-4 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                <span className="mr-2">✨</span>
                Benefícios:
              </h4>
              <ul className="space-y-1">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-xs text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 mt-1.5 flex-shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
        </div>
        {/* Animated border for active card */}
        {isActive && (
            <div className="absolute inset-0 rounded-2xl card-glow pointer-events-none">
                <div className={`w-full h-full ${gradient} opacity-100`}></div>
            </div>
        )}
      </div>
    </div>
  );
};


// --- COMPONENTE DA SECÇÃO DE FUNCIONALIDADES ---
const FeaturesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % features.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isPaused]);


  const getCardStyle = (index: number) => {
    const numItems = features.length;
    let offset = index - currentIndex;

    if (offset > numItems / 2) offset -= numItems;
    if (offset < -numItems / 2) offset += numItems;

    const isVisible = Math.abs(offset) <= 2;
    const isCenter = offset === 0;

    let transform = 'scale(0.4) opacity-0';
    let zIndex = 0;
    
    if (isVisible) {
      const translateX = isCenter ? 0 : Math.sign(offset) * (Math.abs(offset) * 45 + 35);
      const scale = isCenter ? 1 : 0.7;
      zIndex = isCenter ? 10 : 5 - Math.abs(offset);
      
      transform = `translateX(${translateX}%) scale(${scale})`;
    }
    
    return { transform, zIndex, opacity: isVisible ? 1 : 0 };
  };

  return (
    <div className="">
      <style>{`
        .card-glow {
            animation: bg-spin 4s linear infinite;
            filter: blur(1.5rem);
            z-index: -1;
        }

        @keyframes bg-spin {
            to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <span className="mr-2 text-cyan-400">⚡</span>
            RECURSOS PRINCIPAIS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Soluções Sob Medida
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            A Loophid AI oferece todas as ferramentas necessárias para automatizar 
            e acelerar seu processo comercial com tecnologia de ponta.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
            className="relative h-96 md:h-[450px] w-full flex items-center justify-center mb-4" 
            style={{ perspective: '1200px' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="absolute w-72 h-96 md:w-80 md:h-[420px] cursor-pointer transition-all duration-500 ease-in-out"
                    style={getCardStyle(index)}
                    onClick={() => setCurrentIndex(index)}
                >
                    <FeatureCard
                        {...feature}
                        isActive={currentIndex === index}
                    />
                </div>
            ))}
        </div>
        
        {/* Pagination dots */}
        {/* <div className="flex justify-center gap-2 mt-4">
            {features.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-cyan-400 scale-125' : 'bg-gray-600 hover:bg-gray-400'}`}
                />
            ))}
        </div> */}

      </div>
    </div>
  );
};


export default function App() {
    return <FeaturesSection />
}
