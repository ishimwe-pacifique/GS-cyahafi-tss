'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User, RefreshCw, ChevronDown, Building2, GraduationCap, Phone, MapPin } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

const QUICK_QUESTIONS = [
  "What TSS trades do you offer?",
  "Tell me about the school levels",
  "Who is the Head Teacher?",
  "Where is the school located?",
  "How can I contact GS Cyahafi?"
];

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Muraho! 👋 Welcome to GS CYAHAFI/TSS AI Assistant. How can I help you today? Feel free to ask about our TSS technical trades, academic levels, leadership team, or admissions!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const generateAIResponse = (userQuery: string): string => {
    const query = userQuery.toLowerCase();

    if (query.includes('trade') || query.includes('tvet') || query.includes('tss') || query.includes('course') || query.includes('program') || query.includes('bdc') || query.includes('fbo')) {
      return "GS CYAHAFI TSS offers two specialized Technical Secondary School (TSS/TVET) career trades:\n\n1. 🏗️ **Building Construction (BDC)**: Practical training in structural building, masonry, drafting, and construction site management.\n\n2. 🍽️ **Food and Beverage Operations (FBO)**: Culinary arts, hospitality management, food preparation, and restaurant service excellence.";
    }

    if (query.includes('level') || query.includes('primary') || query.includes('nursery') || query.includes('ordinary') || query.includes('o level') || query.includes('o-level')) {
      return "GS CYAHAFI/TSS provides a comprehensive continuous education pathway:\n\n• 🧸 **Nursery & Primary**: Foundational literacy, numeracy, and character development.\n• 📚 **Ordinary Level (O-Level)**: General secondary academic curriculum preparing students for national exams.\n• 🛠️ **Technical Secondary School (TSS)**: Specialized 3-year vocational diploma tracks (BDC & FBO).";
    }

    if (query.includes('head teacher') || query.includes('director') || query.includes('principal') || query.includes('francoise') || query.includes('kaburame')) {
      return "The Head Teacher of GS CYAHAFI/TSS is **Francoise Nyiraneza Kaburame**. She leads our 10-member administrative team and 67 qualified teachers in delivering academic and technical excellence.";
    }

    if (query.includes('team') || query.includes('staff') || query.includes('teacher') || query.includes('leader') || query.includes('dos') || query.includes('dod') || query.includes('it')) {
      return "Our Dedicated Leadership Team includes:\n\n• **Francoise Nyiraneza Kaburame** - Head Teacher\n• **Nahimana Didie** - DOS General\n• **Tuyumvire Lois** - DOS TSS\n• **Peter** - Director of Discipline (DOD)\n• **Bosco** - Accountant\n• **Ishimwe Pacifique** - IT Support (+250 784 196 391)";
    }

    if (query.includes('location') || query.includes('where') || query.includes('address') || query.includes('gitega') || query.includes('nyarugenge') || query.includes('kigali')) {
      return "📍 **GS CYAHAFI/TSS Location**:\nWe are located in Gitega Sector, Nyarugenge District, Kigali City, Rwanda. You are warmly welcome to visit our campus!";
    }

    if (query.includes('contact') || query.includes('phone') || query.includes('email') || query.includes('reach') || query.includes('call') || query.includes('number')) {
      return "📞 **Contact GS CYAHAFI/TSS**:\n• **IT Support & Enquiries**: +250 784 196 391\n• **Administration**: +250 788 000 000\n• **Location**: Gitega, Nyarugenge District, Kigali, Rwanda\n\nFeel free to reach out anytime during official working hours!";
    }

    if (query.includes('history') || query.includes('stat') || query.includes('established') || query.includes('when') || query.includes('2005') || query.includes('classroom')) {
      return "🏫 **GS CYAHAFI/TSS Facts & History**:\n• **2005**: Established as a Primary School.\n• **2009**: Expanded to Lower Secondary (O-Level).\n• **2023**: Officially upgraded to a Technical Secondary School (TSS).\n• **Facilities**: 50 modern classrooms, 67 qualified teachers, 10 administrative leaders.";
    }

    if (query.includes('mission') || query.includes('vision') || query.includes('value') || query.includes('motto') || query.includes('light')) {
      return "🌟 **Vision**: \"GS CYAHAFI/TSS: The light of the Nation\"\n\n🎯 **Mission**: To provide basic education of international standard by promoting active and participatory methods.\n\n💎 **Core Values**:\n1. Autonomy & Active Participation\n2. Creativity\n3. Excellence, Discipline & Respect";
    }

    if (query.includes('hello') || query.includes('hi') || query.includes('muraho') || query.includes('hey') || query.includes('mwiriwe') || query.includes('mwaramutse')) {
      return "Muraho! 😊 How can I assist you with information about GS CYAHAFI/TSS today?";
    }

    return "Thank you for asking! GS CYAHAFI/TSS is dedicated to academic and technical excellence in Kigali, Rwanda. For specific enquiries regarding enrollment, fees, or campus visits, please contact our administrative desk at **+250 784 196 391** or visit us in Gitega, Nyarugenge.";
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = generateAIResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: "Muraho! 👋 Welcome back to GS CYAHAFI/TSS AI Assistant. How can I help you today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-[#0a1e34] text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg border border-[#b08d57]/40 animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-[#b08d57]" />
            <span>Chat with Cyahafi AI</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Assistant Chatbot"
          className="relative group w-14 h-14 bg-[#0a1e34] hover:bg-[#122e4d] text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-[#b08d57] transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#b08d57]/50"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#b08d57] transition-transform duration-300 rotate-90" />
          ) : (
            <div className="relative">
              <Bot className="w-7 h-7 text-[#b08d57]" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0a1e34] animate-pulse" />
            </div>
          )}
        </button>
      </div>

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#0a1e34] text-white p-4 flex items-center justify-between border-b-2 border-[#b08d57]">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-[#b08d57] text-[#0a1e34] flex items-center justify-center font-bold shadow">
                <Bot className="w-5 h-5 text-[#0a1e34]" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-[#0a1e34]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm leading-none text-white">Cyahafi AI Assistant</h3>
                  <Sparkles className="w-3.5 h-3.5 text-[#b08d57]" />
                </div>
                <p className="text-[10px] text-slate-300 font-medium mt-1">Online | GS CYAHAFI / TSS</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#0a1e34] text-[#b08d57] flex items-center justify-center flex-shrink-0 text-xs font-bold border border-[#b08d57]/50 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[82%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-[#0a1e34] text-white rounded-br-none shadow'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1 block px-1">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#b08d57] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1 shadow">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-7 h-7 rounded-full bg-[#0a1e34] text-[#b08d57] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#b08d57] rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-[#b08d57] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-[#b08d57] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Chips */}
          <div className="px-3 py-2 bg-slate-100 border-t border-slate-200 overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
            {QUICK_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="text-[11px] bg-white hover:bg-[#0a1e34] hover:text-white text-[#0a1e34] font-medium px-2.5 py-1 rounded-full border border-slate-300 hover:border-[#0a1e34] transition-all flex-shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-50 border border-slate-300 focus:border-[#b08d57] focus:ring-1 focus:ring-[#b08d57] rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-[#0a1e34] hover:bg-[#122e4d] disabled:opacity-40 text-[#b08d57] p-2.5 rounded-xl transition-all shadow focus:outline-none"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
