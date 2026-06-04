import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles, X, MessageCircle, ChevronDown } from 'lucide-react'
import { sendMessage, suggestedQuestions } from '../lib/ai'
import { profile } from '../data/profile'

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-4">
      <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-blue-500/30">
        <img src={profile.images.aiAvatar} alt="AI" className="w-full h-full object-cover" />
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-bl-sm max-w-[80%]"
        style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map(i => (
            <motion.div key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
              animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ChatMessage({ message }) {
  const isUser = message.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-end gap-2 mb-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      {!isUser && (
        <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-blue-500/30">
          <img src={profile.images.aiAvatar} alt="AI" className="w-full h-full object-cover" />
        </div>
      )}
      {isUser && (
        <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-display text-xs font-bold text-white"
          style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', flexShrink: 0 }}>
          AE
        </div>
      )}

      {/* Bubble */}
      <div
        className={`px-4 py-3 rounded-2xl max-w-[80%] text-xs leading-relaxed whitespace-pre-wrap ${
          isUser ? 'rounded-br-sm' : 'rounded-bl-sm'
        }`}
        style={isUser ? {
          background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
          color: '#fff',
          border: '1px solid rgba(96,165,250,0.3)',
        } : {
          background: 'rgba(59,130,246,0.08)',
          color: '#cbd5e1',
          border: '1px solid rgba(59,130,246,0.15)',
        }}
      >
        {message.content}
      </div>
    </motion.div>
  )
}

function SuggestedQuestion({ q, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, x: 2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(q.text)}
      className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white transition-all duration-150 flex items-center gap-2"
      style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.12)' }}
    >
      <span className="flex-shrink-0">{q.emoji}</span>
      <span>{q.text}</span>
    </motion.button>
  )
}

// Desktop panel version
export function AIAssistantPanel() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hallo! Ich bin der AI Assistant von Ahmed. Ich kann dir Fragen über ihn, seine Kenntnisse, Projekte und Ziele beantworten. Frag mich einfach! 😊',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const handleSend = async (text) => {
    const msg = (text || input).trim()
    if (!msg || loading) return

    setInput('')
    setShowSuggestions(false)
    const newMessages = [...messages, { role: 'user', content: msg }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const reply = await sendMessage(newMessages.map(m => ({ role: m.role, content: m.content })))
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Entschuldigung, es gab einen Fehler. Bitte versuche es erneut.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-white/5 flex-shrink-0">
        <div className="relative">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-blue-500/40">
            <img src={profile.images.aiAvatar} alt="AI Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-navy-800"
            style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Sparkles size={12} className="text-violet-400" />
            <span className="text-sm font-semibold text-white font-display">AI Assistant</span>
          </div>
          <span className="text-xs text-green-400 font-mono">● Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 min-h-0" style={{ scrollbarWidth: 'thin' }}>
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}
        {loading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      <AnimatePresence>
        {showSuggestions && messages.length < 3 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-3 pb-2 flex flex-col gap-1.5 flex-shrink-0 max-h-48 overflow-y-auto"
          >
            {suggestedQuestions.slice(0, 5).map((q) => (
              <SuggestedQuestion key={q.text} q={q} onClick={handleSend} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div className="p-3 border-t border-white/5 flex-shrink-0">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)' }}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Stelle eine Frage..."
            className="flex-1 bg-transparent text-xs text-white placeholder-slate-600 outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
            style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
          >
            <Send size={12} className="text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

// "Why IT?" sidebar card
export function WhyITCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl p-4 mt-4"
      style={{
        background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(59,130,246,0.08))',
        border: '1px solid rgba(139,92,246,0.2)',
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base">💜</span>
        <span className="text-sm font-display font-semibold text-violet-300">Warum IT?</span>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">
        Technologie fasziniert mich, weil sie jeden Tag die Welt verändert. Ich möchte verstehen,
        wie Dinge funktionieren, Menschen helfen und meine Ideen in echte Lösungen verwandeln.
      </p>
    </motion.div>
  )
}

// Mobile floating button + modal
export default function AIAssistantMobile() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hallo! Ich bin der AI Assistant von Ahmed. Frag mich alles über ihn! 😊',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, loading, open])

  const handleSend = async (text) => {
    const msg = (text || input).trim()
    if (!msg || loading) return
    setInput('')
    setShowSuggestions(false)
    const newMessages = [...messages, { role: 'user', content: msg }]
    setMessages(newMessages)
    setLoading(true)
    try {
      const reply = await sendMessage(newMessages.map(m => ({ role: m.role, content: m.content })))
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Entschuldigung, Fehler. Bitte nochmal versuchen.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              boxShadow: '0 0 25px rgba(59,130,246,0.5)',
            }}
          >
            <MessageCircle size={22} className="text-white" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-navy-900"
              style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Chat panel */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-3xl overflow-hidden"
              style={{
                height: '85vh',
                background: 'rgba(8,15,34,0.97)',
                border: '1px solid rgba(59,130,246,0.2)',
                borderBottom: 'none',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/5 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-blue-500/40">
                      <img src={profile.images.aiAvatar} alt="AI" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-navy-900" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Sparkles size={11} className="text-violet-400" />
                      <span className="text-sm font-semibold text-white font-display">AI Career Assistant</span>
                    </div>
                    <span className="text-xs text-green-400 font-mono">● Online</span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg, i) => (
                  <ChatMessage key={i} message={msg} />
                ))}
                {loading && <TypingIndicator />}
                <div ref={bottomRef} />
              </div>

              {/* Suggestions */}
              <AnimatePresence>
                {showSuggestions && messages.length < 3 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-3 pb-2 flex flex-col gap-1.5 flex-shrink-0"
                  >
                    <p className="text-xs text-slate-600 font-mono mb-1 px-1">Vorgeschlagene Fragen:</p>
                    {suggestedQuestions.slice(0, 4).map((q) => (
                      <SuggestedQuestion key={q.text} q={q} onClick={handleSend} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input */}
              <div className="p-4 border-t border-white/5 flex-shrink-0 pb-safe">
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl"
                  style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)' }}>
                  <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleSend() }}
                    placeholder="Stelle eine Frage..."
                    className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
                  />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleSend()}
                    disabled={!input.trim() || loading}
                    className="w-9 h-9 rounded-xl flex items-center justify-center disabled:opacity-30 transition-all"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                  >
                    <Send size={14} className="text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
