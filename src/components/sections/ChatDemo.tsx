import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Sou o assistente de propostas. Como posso ajudar?", isUser: false, timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulated bot responses
  const getBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    const responses = [
      "Posso criar uma proposta personalizada para você em segundos. Quais serviços você está oferecendo?",
      "Entendi! Você gostaria de incluir detalhes de preço e cronograma?",
      "Ótimo, baseado no que você compartilhou, posso gerar uma proposta com 3 opções de pacote: Básico, Padrão e Premium.",
      "Sua proposta está pronta! Você gostaria de visualizar, editar ou enviar para seu cliente agora?",
      "Enviei a proposta para o email do cliente. Você receberá notificações quando ele abrir e interagir com o documento."
    ];
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        text: responses[Math.floor(Math.random() * responses.length)], 
        isUser: false,
        timestamp: new Date()
      }]);
    }, 1500);
  };
  
  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = { text: inputValue, isUser: true, timestamp: new Date() };
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      getBotResponse(inputValue);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section id="chat-demo" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3">
            INTERAÇÃO INTUITIVA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Assistente de propostas inteligente</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            O assistente guia você por todo o processo de criação, personalizando cada detalhe conforme sua necessidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Crie propostas através de uma simples conversa</h3>
            <p className="text-lg text-white/70 mb-6">
              Nosso assistente inteligente transforma suas necessidades em uma proposta profissional através de uma interface conversacional natural.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['Responde perguntas sobre como criar propostas impactantes', 
                'Sugere melhorias e melhores práticas em tempo real',
                'Preenche automaticamente dados do cliente e do projeto',
                'Adapta o conteúdo com base em seus objetivos comerciais'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mr-3 mt-1">✓</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Chat Widget - Responsive */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl max-w-md mx-auto lg:mx-0 w-full">
            {/* Chat Header */}
            <div className="bg-primary-dark p-4 border-b border-white/10">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-white mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Assistente de Propostas</h4>
                  <p className="text-white/50 text-sm">Online agora</p>
                </div>
              </div>
            </div>
            
            {/* Chat Body */}
            <div className="h-80 p-4 overflow-y-auto bg-gradient-to-b from-primary-dark/50 to-primary/30">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`rounded-2xl py-2 px-4 max-w-[85%] break-words ${
                      message.isUser 
                        ? 'bg-secondary text-white rounded-tr-none' 
                        : 'bg-white/10 text-white rounded-tl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isUser ? 'text-white/70' : 'text-white/50'}`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex mb-4">
                  <div className="bg-white/10 rounded-2xl py-2 px-4 rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-white/60 animate-typing-dot1"></div>
                      <div className="w-2 h-2 rounded-full bg-white/60 animate-typing-dot2"></div>
                      <div className="w-2 h-2 rounded-full bg-white/60 animate-typing-dot3"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat Input */}
            <div className="p-3 bg-primary-dark/80 border-t border-white/10">
              <div className="flex rounded-lg bg-white/10 overflow-hidden">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none placeholder-white/50"
                  placeholder="Digite sua mensagem..."
                />
                <button 
                  onClick={handleSendMessage}
                  className="px-4 bg-secondary text-white"
                  disabled={inputValue.trim() === ''}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
