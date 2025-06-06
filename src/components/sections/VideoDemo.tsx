import React, { useState } from 'react';

const VideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // This would typically interact with a video element ref in a real implementation
  };

  return (
    <section id="demo-video" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3">
            VEJA EM AÇÃO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona na prática</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Veja como nossa solução transforma o processo de criação e envio de propostas comerciais.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          {/* Video Placeholder or Player */}
          <div className="relative aspect-video bg-gradient-to-br from-primary/80 to-primary-light/80 overflow-hidden">
            {!isPlaying ? (
              <>
                {/* Video Thumbnail */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button 
                    onClick={handlePlayVideo}
                    className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center 
                              transform transition-transform duration-300 hover:scale-110 focus:outline-none
                              shadow-lg hover:shadow-secondary/50"
                    aria-label="Play demo video"
                  >
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <img 
                  src="/demo-thumbnail.jpg" 
                  alt="Demo video thumbnail" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </>
            ) : (
              <div className="w-full h-full">
                {/* Responsive iframe for video */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/watch?v=8K-hTZ4Cnkg?autoplay=1"
                  title="Product Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          {/* Video Controls (custom design) */}
          <div className="absolute bottom-4 left-0 right-0 mx-4 px-4 py-3 bg-black/70 backdrop-blur-sm rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <button className="text-white mr-4 hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isPlaying ? 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /> : 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  }
                </svg>
              </button>
              <span className="text-white text-sm hidden sm:inline-block">3:45 / 5:30</span>
            </div>
            <div className="flex items-center">
              <button className="text-white hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0a9 9 0 010 12.728m-9.9-2.829a9 9 0 010-12.726" />
                </svg>
              </button>
              <button className="text-white ml-4 hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Key Features Below Video */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '⚡',
              title: 'Rápido',
              description: 'Crie propostas em minutos, não horas'
            },
            {
              icon: '🎯',
              title: 'Preciso',
              description: 'Propostas personalizadas para cada cliente'
            },
            {
              icon: '📊',
              title: 'Analítico',
              description: 'Dados de engajamento em tempo real'
            },
            {
              icon: '🔒',
              title: 'Seguro',
              description: 'Proteção de dados e assinatura digital'
            }
          ].map((feature, index) => (
            <div key={index} className="p-5 bg-white/5 backdrop-blur-sm rounded-xl text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-secondary">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
