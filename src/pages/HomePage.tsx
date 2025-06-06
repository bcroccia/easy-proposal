import React, { useState, useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import VideoDemo from '../components/sections/VideoDemo';
import ChatDemo from '../components/sections/ChatDemo';
import ImpactSection from '../components/sections/ImpactSection';
import PricingSection from '../components/sections/PricingSection';
import NextSteps from '../components/sections/NextSteps';
import CtaSection from '../components/sections/CtaSection';
// import ServiceOptionProps from '../components/sections/CompactServiceBuilder';
import AutomationWorkflow from '../components/sections/AutomationWorkflow';
import PDFPreviewSection from '../components/sections/PDFPreviewSection'; 
import CompactServiceBuilder from '../components/sections/CompactServiceBuilder';
import CompleteSolutionBuilder from '../components/sections/CompleteSolutionBuilder';

const HomePage: React.FC = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  
  
  // Impedir rolagem automática para âncoras ao carregar a página
  useEffect(() => {
    // Forçar a página a iniciar no topo
    window.scrollTo(0, 0);
    
    // Desabilitar restauração automática de posição do navegador
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Remover qualquer hash da URL ao carregar a página
    if (window.location.hash) {
      window.history.replaceState(
        null, 
        document.title, 
        window.location.pathname + window.location.search
      );
    }
    
    // Configurar rolagem suave para links de âncora
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', href);
          }
        }
      }
    };
    
    // Adicionar evento para links de âncora
    document.addEventListener('click', handleAnchorClick);
    
    // Remover evento quando o componente for desmontado
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Show floating CTA after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 600) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AutomationWorkflow />
      <ChatDemo />
      <PDFPreviewSection />
      <CompactServiceBuilder />
      <VideoDemo />
      <CompleteSolutionBuilder />
      <ImpactSection />
      <PricingSection />
      <CtaSection />
      <NextSteps />
      
      {/* Floating CTA for mobile - responsive */}
      {showFloatingCTA && (
        <div className="fixed bottom-5 left-0 right-0 z-50 px-4 sm:px-6 md:hidden">
          <div className="bg-secondary rounded-lg shadow-lg p-4 flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Pronto para começar?</p>
            </div>
            <a 
              href="#solucoes-automacao" 
              className="px-4 py-2 bg-white text-secondary rounded-lg font-medium text-sm whitespace-nowrap"
            >
              Soluções de Automação
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
