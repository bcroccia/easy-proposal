import React, { useState, useRef, useEffect, CSSProperties } from 'react';

// --- Dados para os Cards (com novas cores e tamanhos) ---
const cardData = [
  {
    type: 'automation',
    title: 'Automação WhatsApp',
    subtitle: 'Solução via Chat',
    icon: '💬',
    badge: '🚀 Implementação Rápida',
    theme: {
      bg: 'bg-green-500',
      bgColor: 'bg-teal-900/95', // Cor de fundo do card
      border: 'border-green-400/30',
      text: 'text-green-300',
      button: 'bg-green-500 hover:bg-green-600',
      accent: 'text-green-400'
    },
    benefits: [
      'Integração WhatsApp Business',
      'Implementação em 24-48h',
      'Automação completa via chat',
    ],
    demo: (
      <div className="bg-white/5 rounded-xl p-4 border border-white/10 h-full">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">📱</span>
          </div>
          <span className="text-white font-medium text-sm">Assistente Automatizado</span>
          <span className="text-green-400 text-xs">● online</span>
        </div>
        <div className="space-y-2 text-xs">
          <div className="bg-green-500/20 p-2 rounded-lg text-white">
            🤖 Olá! Para gerar sua proposta, informe:
            <br />👤 Nome da Revendedora, 📦 Produto, 📊 Quantidade
          </div>
          <div className="bg-blue-500/20 p-2 rounded-lg text-white ml-6">
            Ana Silva, Brinco Gold, 5 unidades
          </div>
          <div className="bg-green-500/20 p-2 rounded-lg text-white">
            ✅ Proposta gerada! Proposta_Ana_Gold.pdf
          </div>
        </div>
      </div>
    ),
  },
  {
    type: 'saas',
    title: 'Sistema SaaS',
    subtitle: 'Plataforma Completa',
    icon: '🖥️',
    badge: '🏢 Solução Empresarial',
    theme: {
      bg: 'bg-blue-500',
      bgColor: 'bg-indigo-900/95', // Cor de fundo do card
      border: 'border-blue-400/30',
      text: 'text-blue-300',
      button: 'bg-blue-500 hover:bg-blue-600',
      accent: 'text-blue-400'
    },
    benefits: [
      'Interface web completa',
      'Relatórios e analytics',
      'Desenvolvimento personalizado',
    ],
    demo: (
      <div className="bg-white/5 rounded-xl p-4 border border-white/10 h-full">
         <div className="absolute top-2 right-2 px-2 py-1 bg-blue-500/30 text-blue-300 text-xs rounded">
           DEMONSTRAÇÃO
         </div>
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium text-sm">Dashboard Principal</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="bg-blue-500/20 p-2 rounded text-center text-white">Propostas</div>
            <div className="bg-green-500/20 p-2 rounded text-center text-white">Conversão</div>
            <div className="bg-purple-500/20 p-2 rounded text-center text-white">Receita</div>
          </div>
          <div className="bg-gray-500/20 p-2 rounded mt-2">
            <div className="text-white/60">Última proposta:</div>
            <div className="text-white">Proposta_Ana_Gold.pdf</div>
          </div>
        </div>
      </div>
    ),
  },
];

// --- INTERFACES ---

interface CardStyle extends CSSProperties {
  '--mouse-x'?: string;
  '--mouse-y'?: string;
}

interface CardProps {
  cardInfo: (typeof cardData)[0];
  isFlipped: boolean;
  onClick: () => void;
}

// --- COMPONENTES ---

const Card = ({ cardInfo, isFlipped, onClick }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const initialRotation = cardInfo.type === 'automation' ? 'rotate(-6deg)' : 'rotate(6deg)';
  const [style, setStyle] = useState<CardStyle>({ transform: `perspective(1000px) ${initialRotation}` });

  useEffect(() => {
    if (isFlipped) {
      setStyle({
        transform: 'perspective(2000px) scale(1.1) rotateY(180deg)',
      });
    } else {
      setStyle({
        transform: `perspective(1000px) ${initialRotation}`,
      });
    }
  }, [isFlipped, initialRotation]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped || !cardRef.current) return;
    const { clientX, clientY } = e;
    const { top, left, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = (y / height - 0.5) * -25;
    const rotateY = (x / width - 0.5) * 25;

    setStyle({
      transform: `perspective(1000px) ${initialRotation} rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      '--mouse-x': `${x}px`,
      '--mouse-y': `${y}px`,
    });
  };

  const onMouseLeave = () => {
    if (isFlipped) return;
    setStyle({
      transform: `perspective(1000px) ${initialRotation}`,
    });
  };

  return (
    <div
      ref={cardRef}
      className="card-container relative transition-transform duration-700 ease-in-out cursor-pointer w-[350px] h-[520px]"
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
        {/* FACE FRONTAL */}
        <div className="card-face card-front">
          <div className={`card-front-content relative w-full h-full ${cardInfo.theme.bgColor} rounded-2xl p-6 flex flex-col backdrop-blur-sm ${cardInfo.theme.border} border`}>
            <div className={`absolute -top-3 left-6 px-3 py-1 ${cardInfo.theme.bg} text-white text-sm font-medium rounded-full`}>
              {cardInfo.badge}
            </div>
            <div className="flex items-center gap-4 mb-4 mt-2">
              <div className={`w-12 h-12 ${cardInfo.theme.bg} rounded-xl flex items-center justify-center text-2xl`}>
                {cardInfo.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{cardInfo.title}</h3>
                <p className={`${cardInfo.theme.text} text-sm`}>{cardInfo.subtitle}</p>
              </div>
            </div>
            <div className="flex-grow my-2">
              {cardInfo.demo}
            </div>
            <p className="text-center text-white/60 text-xs mt-4">Clique para ver os benefícios</p>
          </div>
        </div>

        {/* FACE TRASEIRA */}
        <div className="card-face card-back">
          <div className={`relative w-full h-full ${cardInfo.theme.bgColor} rounded-2xl p-6 flex flex-col justify-center items-center text-center backdrop-blur-sm ${cardInfo.theme.border} border`}>
            <h3 className="text-3xl font-bold mb-6 text-white">Principais Benefícios</h3>
            <ul className="space-y-3 text-white/90 text-md mb-6 text-left self-start w-full flex-grow">
              {cardInfo.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className={`${cardInfo.theme.accent} text-xl`}>✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 ${cardInfo.theme.button} text-white font-medium rounded-lg transition-colors`}>
              Contratar {cardInfo.title}
            </button>
          </div>
        </div>
    </div>
  );
};

const HeroSection = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };
    
  return (
    <div className="">
      <style>{`
        .card-container {
            transform-style: preserve-3d;
        }
        .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            border-radius: 1rem;
            z-index: 2;
        }
        .card-back {
            transform: rotateY(180deg);
        }
        .card-container::before, .card-container::after {
          content: "";
          position: absolute;
          left: -2px; right: -2px; top: -2px; bottom: -2px;
          border-radius: 1rem;
          background-image: linear-gradient(
            var(--angle, 0deg), 
            rgba(192, 132, 252, 0.8), 
            rgba(250, 204, 21, 0.8), 
            rgba(52, 211, 153, 0.8), 
            rgba(59, 130, 246, 0.8)
          );
          background-size: 300% 300%;
          animation: bg-spin 5s linear infinite;
          z-index: -1;
        }
        .card-container::after {
          filter: blur(20px);
        }
        .card-container:hover .card-front-content::before {
          opacity: 1;
        }
        .card-front-content::before {
            content: '';
            position: absolute;
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%);
            top: var(--mouse-y, 50%);
            left: var(--mouse-x, 50%);
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.2s;
            pointer-events: none;
            z-index: 3;
        }
        @property --angle {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
        }
        @keyframes bg-spin {
          to { --angle: 360deg; }
        }
      `}</style>
      
      {/* Container para o layout sobreposto */}
      {/* AJUSTE: A largura do container foi reduzida para aproximar os cards */}
      <div className="flex flex-col lg:relative lg:w-[730px] lg:h-[520px] items-center gap-16 lg:gap-0">
        {cardData.map((card, index) => {
          const isFlipped = flippedCardIndex === index;
          const isAnyFlipped = flippedCardIndex !== null;

          // Lógica de posicionamento para telas grandes
          const positionClasses = `
            lg:absolute lg:top-0 transition-all duration-700 ease-in-out
            ${isFlipped 
                ? 'lg:left-1/2 lg:-translate-x-1/2' // Centraliza o card virado
                : (index === 0 ? 'lg:left-0' : 'lg:right-0') // Posição padrão
            }
            
          `;

          return (
            <div
              key={index}
              className={positionClasses}
              // O z-index garante que o card clicado fique na frente
              style={{ zIndex: isFlipped ? 30 : index + 1 }}
            >
              <Card
                cardInfo={card}
                isFlipped={isFlipped}
                onClick={() => handleCardClick(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function App() {
    return <HeroSection />
}
