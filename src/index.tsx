import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupSmoothScrolling } from './components/utils/smoothScroll';

// Remover qualquer hash da URL ao carregar a página e configurar rolagem suave
if (typeof window !== 'undefined') {
  // Garantir que estamos no navegador
  window.addEventListener('DOMContentLoaded', () => {
    // Forçar a página a iniciar no topo
    window.scrollTo(0, 0);
    
    // Configurar rolagem suave para links de âncora
    setupSmoothScrolling();
  });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
