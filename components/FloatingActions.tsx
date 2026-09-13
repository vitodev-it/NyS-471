'use client';

import { useEffect, useRef, useState } from 'react';

// ─── SVG Icons ──────────────────────────────────────────────────────────────
function IconWhatsApp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function IconChevronUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function IconBot() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <line x1="12" y1="7" x2="12" y2="11" />
      <line x1="8" y1="16" x2="8" y2="16" strokeWidth="3" strokeLinecap="round" />
      <line x1="12" y1="16" x2="12" y2="16" strokeWidth="3" strokeLinecap="round" />
      <line x1="16" y1="16" x2="16" y2="16" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Chatbot FAQ data ────────────────────────────────────────────────────────
const FAQS = [
  {
    triggers: ['service', 'offer', 'do you do', 'what you'],
    answer: 'We offer Web Development, Mobile Apps, AI/ML Solutions, IoT Integration, Tech Training, Digital Strategy, and Startup Incubation. Type a service name to learn more!',
  },
  {
    triggers: ['price', 'cost', 'how much', 'rate', 'pricing'],
    answer: 'Our pricing is tailored to project scope. Starting from BND 500 for basic web projects. Contact us for a free quote!',
  },
  {
    triggers: ['contact', 'reach', 'phone', 'email', 'call'],
    answer: 'You can reach us at:\n+673 7194637\nynotsolutions.brn@gmail.com\nOr fill the Contact form on our site.',
  },
  {
    triggers: ['location', 'where', 'address', 'office', 'brunei'],
    answer: "We're based in Bandar Seri Begawan, Brunei Darussalam. We also serve clients remotely.",
  },
  {
    triggers: ['ai', 'machine learning', 'automation', 'intelligent'],
    answer: 'Our AI/ML services include intelligent automation, predictive analytics, chatbot development, and smart dashboards aligned with Industry 4.0 standards.',
  },
  {
    triggers: ['iot', 'sensor', 'device', 'smart', 'industry 4'],
    answer: 'We build IoT solutions: sensor integration, remote monitoring dashboards, and smart system connectivity for businesses and facilities.',
  },
  {
    triggers: ['wawasan', '2035', 'vision', 'national'],
    answer: 'All our solutions are aligned with Wawasan Brunei 2035, contributing to digital transformation, human capital development, and economic diversification.',
  },
  {
    triggers: ['training', 'course', 'learn', 'bootcamp', 'workshop'],
    answer: 'We run coding bootcamps, digital literacy workshops, corporate tech training, and youth programs. Contact us to book a session!',
  },
  {
    triggers: ['startup', 'incubat', 'new business', 'launch'],
    answer: 'YNot Labs supports Brunei startups with mentorship, technical guidance, networking, and connections to funding. Reach out to join!',
  },
  {
    triggers: ['thank', 'thanks', 'appreciate'],
    answer: "You're welcome! If you have more questions, feel free to ask. We're here to help!",
  },
  {
    triggers: ['bye', 'goodbye', 'see you', 'later'],
    answer: "Thank you for chatting with us! If you need anything else, don't hesitate to reach out. Have a great day!",
  },
  {
    triggers: ['team', 'who', 'founder', 'about company'],
    answer: 'YNot Solutions is a Brunei-based tech company focused on digital transformation. We combine Silicon Valley innovation with local expertise to deliver AI, IoT, and web solutions for businesses.',
  },
  {
    triggers: ['portfolio', 'project', 'client', 'work'],
    answer: "We've worked with various clients across government, corporate, and startup sectors. Visit our Gallery page to see some of our projects and events!",
  },
];

function getBotReply(input: string): string {
  const lower = input.toLowerCase();
  for (const faq of FAQS) {
    if (faq.triggers.some((t) => lower.includes(t))) return faq.answer;
  }
  if (/^(hi|hello|hey|salam|good|assalam)/i.test(lower)) {
    return "Hello! I'm YBot, your YNot Solutions assistant. How can I help you today?";
  }
  return "I'm not sure about that yet! For detailed enquiries, please contact us at ynotsolutions.brn@gmail.com or call +673 7194637. You can also visit our Contact page.";
}

type Msg = { text: string; type: 'bot' | 'user' };

// ─── Main Component ──────────────────────────────────────────────────────────
export default function FloatingActions() {
  const [scrollVisible, setScrollVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll visibility
  useEffect(() => {
    const onScroll = () => setScrollVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Greet on first open
  useEffect(() => {
    if (chatOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            text: "Hello! I'm YBot. Ask me about our services, pricing, location, or anything else!",
            type: 'bot',
          },
        ]);
      }, 300);
    }
  }, [chatOpen, messages.length]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { text, type: 'user' }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: getBotReply(text), type: 'bot' }]);
    }, 600);
  };

  const quickReplies = ['Our services', 'Pricing', 'Contact info', 'AI solutions'];

  return (
    <>
      {/* WhatsApp FAB */}
      <div className="fab-container">
        <a
          href="https://wa.me/6737194637?text=Hello%20YNot%20Solutions!"
          className="fab fab-whatsapp"
          title="Chat on WhatsApp"
          aria-label="WhatsApp us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWhatsApp />
        </a>
      </div>

      {/* Scroll to Top */}
      <button
        id="scrollTop"
        title="Back to top"
        aria-label="Scroll to top"
        className={scrollVisible ? 'visible' : ''}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IconChevronUp />
      </button>

      {/* YBot Trigger */}
      <button
        className="chatbot-trigger"
        aria-label="Open AI assistant"
        onClick={() => setChatOpen((v) => !v)}
      >
        <span className="chatbot-dot" />
        YBot — Ask me anything
      </button>

      {/* YBot Window */}
      <div
        className={`chatbot-window${chatOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="AI Chat Assistant"
      >
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-avatar">
            <IconBot />
          </div>
          <div className="chatbot-header-info">
            <strong>YBot AI Assistant</strong>
            <span>Usually replies instantly</span>
          </div>
          <button
            className="chatbot-close-btn"
            aria-label="Close chat"
            onClick={() => setChatOpen(false)}
          >
            <IconX />
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages" aria-live="polite">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.type}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="chatbot-quick-replies">
          {quickReplies.map((qr) => (
            <button key={qr} className="quick-reply" onClick={() => sendMessage(qr)}>
              {qr}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="chatbot-input-row">
          <input
            ref={inputRef}
            type="text"
            value={input}
            placeholder="Ask something..."
            autoComplete="off"
            aria-label="Chat message"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
          />
          <button
            className="chatbot-send"
            aria-label="Send message"
            onClick={() => sendMessage(input)}
          >
            <IconSend />
          </button>
        </div>
      </div>
    </>
  );
}
