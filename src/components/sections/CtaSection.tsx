import React, { useState, useEffect } from 'react';

const CtaSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2025-06-13T23:59:59').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
      
      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: '🎯',
      title: '15% de Desconto',
      description: 'No valor total do projeto',
      value: 'Economia até R$ 1.800',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '📱',
      title: 'Setup WhatsApp Grátis',
      description: 'Configuração completa incluída',
      value: 'Valor: R$ 800',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '🎨',
      title: 'Design Personalizado',
      description: 'PDF com sua identidade visual',
      value: 'Valor: R$ 500',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: '📞',
      title: 'Suporte Estendido',
      description: '60 dias ao invés de 30',
      value: 'Valor: R$ 400',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800/50 to-indigo-800/50 backdrop-blur border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl">
          
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500/30 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-indigo-500/20 blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative px-6 py-12 md:p-16">
            
            {/* Countdown Timer */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-4 animate-pulse">
                <span className="mr-2">⏰</span>
                OFERTA LIMITADA
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Proposta Válida por:
                </span>
              </h2>
              
              {/* Countdown Display */}
              <div className="flex justify-center gap-4 mb-8">
                {[
                  { value: timeLeft.days, label: 'Dias' },
                  { value: timeLeft.hours, label: 'Horas' },
                  { value: timeLeft.minutes, label: 'Min' },
                  { value: timeLeft.seconds, label: 'Seg' }
                ].map((time, index) => (
                  <div key={index} className="bg-gradient-to-br from-red-600 to-orange-600 rounded-xl p-4 min-w-[80px] shadow-lg">
                    <div className="text-2xl md:text-3xl font-bold text-white">{time.value.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-red-100">{time.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content with responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  🚀 Transforme Seu Negócio Agora
                </h3>
                <p className="text-lg text-white/80 mb-8">
                  Junte-se a centenas de empresas que já automatizaram suas propostas 
                  e estão fechando <strong className="text-cyan-300">40% mais negócios</strong> com nossa solução.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    🎯 Garantir Desconto
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold border border-white/30 rounded-xl transition-all duration-300 transform hover:scale-105">
                    💬 Falar com Especialista
                  </button>
                </div>
                
                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/60 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    ✓ Sem taxa de setup
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    ✓ Garantia de resultado
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    ✓ Suporte completo
                  </div>
                </div>
              </div>
              
              {/* Right Column - Benefits */}
              <div>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">
                    🎁 Se fecharmos até <span className="text-red-300">13/06/2025</span>, você ganha:
                  </h4>
                  <p className="text-white/70 text-sm">Benefícios exclusivos no valor de R$ 3.500</p>
                </div>
                
                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br ${benefit.color} rounded-xl p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                        activeCard === index ? 'ring-4 ring-white/30 scale-105' : ''
                      }`}
                      onMouseEnter={() => setActiveCard(index)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      <div className="flex items-center mb-2">
                        <span className={`text-2xl mr-3 ${activeCard === index ? 'animate-bounce' : ''}`}>
                          {benefit.icon}
                        </span>
                        <h5 className="font-bold text-white text-sm">{benefit.title}</h5>
                      </div>
                      <p className="text-white/90 text-xs mb-1">{benefit.description}</p>
                      <p className="text-white/70 text-xs font-semibold">{benefit.value}</p>
                    </div>
                  ))}
                </div>
                
                {/* Pricing with Discount */}
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur border border-green-500/30 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-white mb-4 text-center">💰 Preços com Desconto:</h5>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <div>
                        <span className="text-white font-semibold">🔧 Automação:</span>
                        <div className="text-sm text-white/70">
                          <span className="line-through">R$ 5.500</span> → <span className="text-green-300 font-bold">R$ 4.675</span>
                        </div>
                      </div>
                      <div className="text-green-300 font-bold text-sm">-R$ 825</div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <div>
                        <span className="text-white font-semibold">💻 Micro SaaS:</span>
                        <div className="text-sm text-white/70">
                          <span className="line-through">R$ 12.000</span> → <span className="text-green-300 font-bold">R$ 10.200</span>
                        </div>
                      </div>
                      <div className="text-green-300 font-bold text-sm">-R$ 1.800</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-green-600/20 rounded-lg text-center">
                    <span className="text-green-300 font-bold">
                      🎯 Economia total: até R$ 5.300 em benefícios!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                  🚀 Aproveitar Oferta Agora
                </button>
                <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                  📞 Falar no WhatsApp
                </button>
              </div>
              <p className="text-white/50 text-sm mt-4">
                ⚡ Resposta em até 2 horas • 🔒 Seus dados estão seguros
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;