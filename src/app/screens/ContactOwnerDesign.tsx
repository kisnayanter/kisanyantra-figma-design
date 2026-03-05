export function ContactOwnerDesign() {
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--cream)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div 
            className="px-[18px] pt-5 pb-6 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  मालिक से संपर्क करें · Contact Owner
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Contact Owner
                </div>
              </div>
            </div>

            {/* Owner Info */}
            <div 
              className="rounded-[16px] p-4 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-[24px]"
                style={{ background: 'rgba(255,255,255,0.25)' }}
              >
                👨‍🌾
              </div>
              <div className="flex-1">
                <div className="text-white text-[14px] font-bold">
                  हरप्रीत सिंह · Harpreet Singh
                </div>
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Equipment Owner · Ludhiana, Punjab
                </div>
                <div className="flex gap-1 mt-1">
                  <div className="text-[10px]" style={{ color: '#F5A623' }}>★★★★★</div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.75)' }}>4.8 (23 reviews)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div 
              className="text-[12px] font-bold mb-4"
              style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
            >
              📞 Contact Options · संपर्क विकल्प
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div
                className="bg-white rounded-[18px] p-4 text-center"
                style={{ 
                  boxShadow: 'var(--card-shadow)',
                  borderTop: '3px solid #25D366'
                }}
              >
                <div className="text-[28px] mb-2">📲</div>
                <div 
                  className="text-[12px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                >
                  WhatsApp
                </div>
                <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                  व्हाट्सएप
                </div>
              </div>

              <div
                className="bg-white rounded-[18px] p-4 text-center"
                style={{ 
                  boxShadow: 'var(--card-shadow)',
                  borderTop: '3px solid #0088CC'
                }}
              >
                <div className="text-[28px] mb-2">📞</div>
                <div 
                  className="text-[12px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                >
                  Call
                </div>
                <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                  कॉल
                </div>
              </div>
            </div>

            {/* Message Templates */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💬 Quick Messages · त्वरित संदेश
              </div>
              <div className="space-y-2">
                {[
                  'Hello, I have a booking confirmation for Jul 10-12. Just wanted to confirm the details.',
                  'Hi, could you please provide directions to your location?',
                  'Is the equipment ready for the scheduled dates?',
                  'What time should I expect the equipment to arrive?'
                ].map((message, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3 text-[10px] cursor-pointer"
                    style={{ 
                      background: 'var(--cream)', 
                      border: '1px solid #E8E3DA',
                      color: 'var(--text-mid)'
                    }}
                  >
                    {message}
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Message */}
            <div
              className="bg-white rounded-[18px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                ✏️ Custom Message · कस्टम संदेश
              </div>
              <div 
                className="rounded-lg p-3 text-[11px]"
                style={{ 
                  background: 'var(--cream)', 
                  border: '1px solid #E8E3DA',
                  minHeight: '80px'
                }}
              >
                Type your message here... · यहां अपना संदेश टाइप करें...
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                  0/160 characters
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px]" style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}>
                    📎
                  </div>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px]" style={{ background: 'var(--green-pale)', color: 'var(--green)' }}>
                    🎤
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div
              className="bg-white rounded-[18px] p-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[12px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📋 Contact Information · संपर्क जानकारी
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>Phone · फोन</span>
                  <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)' }}>+91 98765 43210</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>WhatsApp · व्हाट्सएप</span>
                  <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)' }}>+91 98765 43210</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>Email · ईमेल</span>
                  <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)' }}>harpreet@email.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px]" style={{ color: 'var(--text-soft)' }}>Location · स्थान</span>
                  <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)' }}>Ludhiana, Punjab</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div className="w-full bg-[#25D366] text-white rounded-[14px] py-3 text-[12px] font-bold flex items-center justify-center gap-1.5">
              📲 Send WhatsApp Message · संदेश भेजें
            </div>
            <div className="flex gap-2">
              <div
                className="flex-1 bg-[#0088CC] text-white rounded-[14px] py-3 text-xs font-bold text-center"
              >
                📞 Call Now · कॉल करें
              </div>
              <div
                className="flex-1 rounded-[14px] py-3 text-xs font-bold text-center"
                style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
              >
                Back · वापस
              </div>
            </div>
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
