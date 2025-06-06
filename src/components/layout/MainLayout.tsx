import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  
  // Handle resize to adjust layout for responsive design
  useEffect(() => {
    const handleResize = () => {
      // Close menu on large screens
      if (window.innerWidth >= 768 && menuActive) {
        setMenuActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuActive]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#131313] to-[#08185c] text-white overflow-x-hidden">
      <Header />
      
      <main className={`transition-all duration-300 flex-grow pt-20 ${menuActive ? 'pl-[280px]' : 'pl-0'} md:px-6`}>
        <div className="container mx-auto max-w-7xl relative py-10">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
