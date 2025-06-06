import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatDemo: React.FC = () => {
  // Estado para o primeiro chat
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Sou o assistente de propostas. Como posso ajudar?", isUser: false, timestamp: new Date() },
    { text: "Posso criar uma proposta personalizada para você em segundos. Quais serviços você está oferecendo?", isUser: false, timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Estado para o segundo chat (automação)
  const [autoMessages, setAutoMessages] = useState<Message[]>([
    { text: "Olá! Sou o assistente automático de propostas 🤖", isUser: false, timestamp: new Date() },
    { text: "Para gerar sua proposta personalizada, me informe:\n\n👤 Nome da Revendedora\n💎 Nome do Produto\n📦 Quantidade", isUser: false, timestamp: new Date() }
  ]);
  const [autoInputValue, setAutoInputValue] = useState('');
  const [autoIsTyping, setAutoIsTyping] = useState(false);
  const [proposalGenerated, setProposalGenerated] = useState(false);
  const [generatingProposal, setGeneratingProposal] = useState(false);
  const [showPDFPreview, setShowPDFPreview] = useState(false);
  const autoMessagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages for both chats
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  useEffect(() => {
    autoMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [autoMessages]);

  // Simulated bot responses para o primeiro chat
  const getBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    const responses = [
      "Entendi! Você gostaria de incluir detalhes de preço e cronograma?",
      "Ótimo, baseado no que você compartilhou, posso gerar uma proposta com 3 opções de pacote: Básico, Padrão e Premium.",
      "Sua proposta está pronta! Você gostaria de visualizar, editar ou enviar para seu cliente agora?",
      "Perfeito! Vou personalizar a proposta com suas informações. Que tipo de projeto você está cotando?",
      "Excelente! Posso incluir termos de pagamento e cronograma detalhado na sua proposta."
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
  
  // Funções para o segundo chat (automação)
  const handleAutoSendMessage = () => {
    if (autoInputValue.trim() !== '') {
      const newMessage = { text: autoInputValue, isUser: true, timestamp: new Date() };
      setAutoMessages(prev => [...prev, newMessage]);
      setAutoInputValue('');
      getAutoResponse(autoInputValue);
    }
  };

  const handleAutoKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAutoSendMessage();
    }
  };
  
  // Simulação da geração automática de proposta
  const getAutoResponse = (userMessage: string) => {
    setAutoIsTyping(true);
    
    // Se a mensagem contém as informações pedidas
    if (userMessage.toLowerCase().includes('ana') || userMessage.toLowerCase().includes('revendedora')) {
      
      setTimeout(() => {
        setAutoIsTyping(false);
        setAutoMessages(prev => [...prev, { 
          text: "✅ Dados recebidos! Gerando proposta personalizada...", 
          isUser: false,
          timestamp: new Date()
        }]);
        
        // Inicia animação de geração
        setGeneratingProposal(true);
        
        // Após um tempo, mostra a proposta gerada
        setTimeout(() => {
          setGeneratingProposal(false);
          setProposalGenerated(true);
          setShowPDFPreview(true);
          setAutoMessages(prev => [...prev, { 
            text: "🎉 Proposta gerada com sucesso!\n\n📄 AnaSilva_PropostaComercial.pdf\n💰 Valor Total: R$ 766,15\n🕒 Gerada em 8 segundos\n\n✉️ Enviando automaticamente...", 
            isUser: false,
            timestamp: new Date()
          }]);
        }, 3000);
      }, 1000);
    } else {
      // Se a mensagem não tem as informações completas
      setTimeout(() => {
        setAutoIsTyping(false);
        setAutoMessages(prev => [...prev, { 
          text: "Por favor, me informe os dados completos:\n\n👤 Nome da Revendedora\n💎 Nome do Produto\n📦 Quantidade\n\nExemplo: 'Ana Silva, Anel Solitário, 5 unidades'", 
          isUser: false,
          timestamp: new Date()
        }]);
      }, 1000);
    }
  };

  // Componente PDF Preview
  const PDFPreview = () => {
    return (
      <div className={`bg-white rounded-lg shadow-2xl p-6 transition-all duration-500 ${showPDFPreview ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="border-b border-gray-200 pb-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">PDF</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Proposta Comercial</h3>
                <p className="text-sm text-gray-500">AnaSilva_PropostaComercial.pdf</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Gerado automaticamente</p>
              <p className="text-xs text-gray-400">{formatTime(new Date())}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Header da Proposta */}
          <div className="text-center border-b border-gray-100 pb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">PROPOSTA COMERCIAL</h2>
            <p className="text-sm text-gray-600">Para: Ana Silva - Revendedora Premium</p>
          </div>

          {/* Dados do Cliente */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">👤 Dados da Revendedora</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Nome:</strong> Ana Silva</p>
              <p><strong>Categoria:</strong> Revendedora Premium</p>
              <p><strong>Data:</strong> {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Produtos */}
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">💎 Produtos Selecionados</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Anel Solitário Diamante</span>
                <span className="font-medium">R$ 120,50</span>
              </div>
              <div className="flex justify-between">
                <span>Colar Pérola Clássico</span>
                <span className="font-medium">R$ 85,30</span>
              </div>
              <div className="flex justify-between">
                <span>Brinco Esmeralda</span>
                <span className="font-medium">R$ 95,80</span>
              </div>
              <div className="flex justify-between">
                <span>Pulseira Ouro 18k</span>
                <span className="font-medium">R$ 156,20</span>
              </div>
            </div>
          </div>

          {/* Desconto */}
          <div className="bg-yellow-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">🎯 Desconto Especial</h4>
            <div className="text-sm text-gray-600">
              <p>Desconto Revendedora Premium: <span className="text-green-600 font-medium">15%</span></p>
              <p>Desconto por Volume: <span className="text-green-600 font-medium">5%</span></p>
            </div>
          </div>

          {/* Total */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-lg">💰 VALOR TOTAL</h4>
                <p className="text-sm opacity-90">Desconto aplicado</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">R$ 766,15</p>
                <p className="text-sm opacity-90">À vista</p>
              </div>
            </div>
          </div>

          {/* Condições */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">📋 Condições</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <p>• Prazo de entrega: 3-5 dias úteis</p>
              <p>• Pagamento: PIX, cartão ou boleto</p>
              <p>• Frete grátis para pedidos acima de R$ 500</p>
              <p>• Garantia de 12 meses</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            Proposta gerada automaticamente • Sistema Anna Prata
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 mt-12">
          <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-4">
            <span className="mr-2">💬</span>
            ASSISTENTE INTELIGENTE
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Chat de Propostas Interativo
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Converse naturalmente e crie propostas profissionais em tempo real
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">💼 Chat Consultivo</h3>
            <p className="text-white/70 mb-6">
              Assistente guiado que ajuda você a criar propostas através de perguntas inteligentes
            </p>
            
            {/* Chat Widget 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              {/* Chat Header */}
              <div className="bg-slate-700/50 p-4 border-b border-white/10">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center text-white mr-3">
                    💼
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Assistente Consultivo</h4>
                    <p className="text-white/50 text-sm">Te ajuda passo a passo</p>
                  </div>
                </div>
              </div>
              
              {/* Chat Body */}
              <div className="h-80 p-4 overflow-y-auto bg-gradient-to-b from-slate-800/30 to-slate-700/30">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`rounded-2xl py-3 px-4 max-w-[85%] break-words ${
                        message.isUser 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-white/10 text-white rounded-tl-none'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isUser ? 'text-white/70' : 'text-white/50'}`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex mb-4">
                    <div className="bg-white/10 rounded-2xl py-3 px-4 rounded-tl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-white/60 animate-ping"></div>
                        <div className="w-2 h-2 rounded-full bg-white/60 animate-ping" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 rounded-full bg-white/60 animate-ping" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Chat Input */}
              <div className="p-3 bg-slate-700/50 border-t border-white/10">
                <div className="flex rounded-lg bg-white/10 overflow-hidden">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none placeholder-white/50"
                    placeholder="Descreva seu projeto..."
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="px-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
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
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">⚡ Chat Automático</h3>
            <p className="text-white/70 mb-6">
              Forneça os dados e receba uma proposta profissional instantaneamente
            </p>
            
            {/* Chat Widget 2 - Automação */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              {/* Chat Header */}
              <div className="bg-slate-700/50 p-4 border-b border-white/10">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/30 flex items-center justify-center text-white mr-3">
                    🤖
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Assistente Automático</h4>
                    <p className="text-white/50 text-sm">Geração instantânea</p>
                  </div>
                </div>
              </div>
              
              {/* Chat Body */}
              <div className="h-80 p-4 overflow-y-auto bg-gradient-to-b from-slate-800/30 to-slate-700/30">
                {autoMessages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`rounded-2xl py-3 px-4 max-w-[85%] break-words ${
                        message.isUser 
                          ? 'bg-cyan-600 text-white rounded-tr-none' 
                          : 'bg-white/10 text-white rounded-tl-none'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isUser ? 'text-white/70' : 'text-white/50'}`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {autoIsTyping && (
                  <div className="flex mb-4">
                    <div className="bg-white/10 rounded-2xl py-3 px-4 rounded-tl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-white/60 animate-ping"></div>
                        <div className="w-2 h-2 rounded-full bg-white/60 animate-ping" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 rounded-full bg-white/60 animate-ping" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Geração de proposta */}
                {generatingProposal && (
                  <div className="flex mb-4">
                    <div className="bg-white/10 rounded-2xl py-3 px-4 w-full rounded-tl-none">
                      <p className="text-white mb-3">🔄 Processando dados...</p>
                      <div className="w-full bg-white/5 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={autoMessagesEndRef} />
              </div>
              
              {/* Chat Input */}
              <div className="p-3 bg-slate-700/50 border-t border-white/10">
                <div className="flex rounded-lg bg-white/10 overflow-hidden">
                  <input
                    type="text"
                    value={autoInputValue}
                    onChange={(e) => setAutoInputValue(e.target.value)}
                    onKeyPress={handleAutoKeyPress}
                    className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none placeholder-white/50"
                    placeholder="Ex: Ana Silva, Anel Solitário, 5 unidades"
                    disabled={proposalGenerated}
                  />
                  <button 
                    onClick={handleAutoSendMessage}
                    className="px-4 bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
                    disabled={autoInputValue.trim() === '' || proposalGenerated}
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

        {/* Simulação do PDF Gerado */}
        {showPDFPreview && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-4">
                <span className="mr-2">📄</span>
                PDF GERADO AUTOMATICAMENTE
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Resultado da Automação
              </h3>
              <p className="text-white/70">
                Veja como fica a proposta profissional gerada em segundos
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <PDFPreview />
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-6 bg-slate-800/50 backdrop-blur border border-white/10 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">8s</div>
                  <div className="text-sm text-white/70">Tempo geração</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-white/70">Automatizado</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">R$ 766,15</div>
                  <div className="text-sm text-white/70">Valor calculado</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Final */}
        {/* <div className="text-center bg-gradient-to-r from-slate-700/60 to-indigo-700/60 backdrop-blur border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para Revolucionar suas Propostas?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Escolha entre o assistente consultivo ou a automação instantânea. Ambos geram propostas profissionais que convertem mais vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
              💼 Quero o Chat Consultivo
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
              ⚡ Quero a Automação
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ChatDemo;