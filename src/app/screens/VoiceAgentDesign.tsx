import { motion } from 'motion/react';

export function VoiceAgentDesign() {
  const waveHeights = [16, 32, 40, 48, 36, 28, 44, 24, 38, 20];

  return (
    <div className="relative mx-auto" style={{ width: '320px', height: '640px' }}>
      <div 
        className="absolute inset-0 rounded-[36px] overflow-hidden"
        style={{
          background: '#111',
          padding: '10px',
          boxShadow: '0 0 0 1px #333, 0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        <div 
          className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col items-center"
          style={{ background: 'linear-gradient(160deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)' }}
        >
          {/* Stars Background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px, 70px 70px',
              backgroundPosition: '0 0, 15px 15px'
            }}
          />

          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-[18px] py-[10px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <span className="font-bold text-[11px]" style={{ color: 'white' }}>9:45</span>
            <div className="text-[11px]">📶</div>
          </div>

          {/* Close Button */}
          <div className="absolute top-6 right-[18px] w-8 h-8 rounded-full flex items-center justify-center text-white text-base z-20" style={{ background: 'rgba(255,255,255,0.1)' }}>
            ✕
          </div>

          {/* Agent Face */}
          <motion.div
            animate={{ boxShadow: ['0 0 0 12px rgba(255,107,0,0.15), 0 0 0 24px rgba(255,107,0,0.08)', '0 0 0 18px rgba(255,107,0,0.12), 0 0 0 36px rgba(255,107,0,0.05)', '0 0 0 12px rgba(255,107,0,0.15), 0 0 0 24px rgba(255,107,0,0.08)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-[60px] w-[90px] h-[90px] rounded-full flex items-center justify-center text-[44px] relative z-10"
            style={{ background: 'linear-gradient(135deg, var(--saffron), var(--gold))' }}
          >
            🤖
          </motion.div>

          <div className="relative z-10 text-center">
            <div 
              className="text-white text-xl font-bold mt-4"
              style={{ fontFamily: "'Baloo 2', cursive" }}
            >
              Kisan Mitra
            </div>
            <div className="text-[12px] mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
              🟢 Listening · सुन रहा हूँ...
            </div>
          </div>

          {/* Speech Bubble */}
          <div
            className="mx-5 mt-6 rounded-[20px] rounded-bl-[4px] px-[18px] py-[14px] relative z-10"
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <div 
              className="text-white text-sm leading-relaxed"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              किस जिले में ट्रैक्टर चाहिए?
            </div>
            <div className="text-[11px] mt-1.5 italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Which district do you need a tractor in?
            </div>
          </div>

          {/* Waveform */}
          <div className="flex items-center gap-1 mt-7 h-12 relative z-10">
            {waveHeights.map((height, i) => (
              <motion.div
                key={i}
                className="w-1 rounded-sm"
                style={{ background: 'linear-gradient(180deg, var(--saffron), var(--gold))', height: `${height}px` }}
                animate={{ scaleY: [0.5, 1.2, 0.5], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.05 }}
              />
            ))}
          </div>

          {/* Main Mic Button */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-[36px] mt-7 relative z-10"
            style={{
              background: 'linear-gradient(135deg, var(--saffron), #FF8C38)',
              boxShadow: '0 8px 32px rgba(255,107,0,0.5)'
            }}
          >
            🎙️
          </div>

          <div
            className="text-[12px] mt-3 relative z-10"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Hold to speak · बोलने के लिए दबाएं
          </div>

          {/* Mode Pill */}
          <div
            className="absolute bottom-[30px] px-4 py-1.5 rounded-[20px] text-[11px] font-semibold tracking-wide z-10"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.7)'
            }}
          >
            Mode: <span style={{ color: 'var(--gold)' }}>Agentic</span> · WebSocket
          </div>

          {/* Notch */}
          <div 
            className="absolute top-[10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] z-50"
            style={{ borderRadius: '0 0 14px 14px' }}
          />
        </div>
      </div>
    </div>
  );
}
