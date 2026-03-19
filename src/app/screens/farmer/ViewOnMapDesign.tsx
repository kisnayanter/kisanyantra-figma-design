export function ViewOnMapDesign() {
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'white' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:49</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div className="bg-white px-4 pt-4 pb-3" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-base" style={{ background: 'var(--cream)' }}>
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'var(--text-soft)' }}>
                  नक्शा देखें · View Map
                </div>
                <div 
                  className="text-[17px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                >
                  Location Map
                </div>
              </div>
              <div className="ky-tap-icon w-8 h-8 rounded-[10px] flex items-center justify-center text-base" style={{ background: 'var(--cream)' }}>
                📍
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex gap-2">
              <div 
                className="flex-1 rounded-lg px-3 py-2 flex items-center gap-2"
                style={{ background: 'var(--cream)', border: '1px solid #E8E3DA' }}
              >
                <span className="text-[12px]">🔍</span>
                <span className="text-[11px]" style={{ color: 'var(--text-soft)' }}>
                  Search location · स्थान खोजें
                </span>
              </div>
              <div className="ky-tap-mic w-8 h-8 rounded-lg flex items-center justify-center text-[12px]" style={{ background: 'var(--saffron)', color: 'white' }}>
                🎤
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 relative" style={{ background: '#F0F4F8' }}>
            {/* Map Background */}
            <div className="absolute inset-0" style={{ 
              background: 'linear-gradient(45deg, #E8F0FE 25%, transparent 25%), linear-gradient(-45deg, #E8F0FE 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #E8F0FE 75%), linear-gradient(-45deg, transparent 75%, #E8F0FE 75%)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }} />

            {/* Map Elements */}
            <div className="absolute inset-0">
              {/* Roads */}
              <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-300 opacity-50" />
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 opacity-60" />
              <div className="absolute top-3/4 left-0 right-0 h-1 bg-gray-300 opacity-50" />
              <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-gray-300 opacity-50" />
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-400 opacity-60" />
              <div className="absolute left-3/4 top-0 bottom-0 w-1 bg-gray-300 opacity-50" />

              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                <div className="text-[32px] animate-bounce">📍</div>
                <div 
                  className="rounded-lg px-2 py-1 text-[9px] font-bold mt-1"
                  style={{ background: 'white', border: '2px solid var(--saffron)', color: 'var(--saffron)' }}
                >
                  Your Farm · आपका खेत
                </div>
              </div>

              {/* Equipment Location */}
              <div className="absolute top-1/3 left-2/3">
                <div className="text-[24px]">🚜</div>
                <div 
                  className="rounded-lg px-2 py-1 text-[8px] font-bold"
                  style={{ background: 'white', border: '2px solid var(--green)', color: 'var(--green)' }}
                >
                  Equipment Location
                </div>
              </div>

              {/* Distance Line */}
              <div className="absolute top-1/2 left-1/2 w-px h-20 bg-dashed" style={{ 
                background: 'repeating-linear-gradient(to bottom, var(--saffron) 0px, var(--saffron) 4px, transparent 4px, transparent 8px)',
                transform: 'rotate(-45deg) translate(-10px, -20px)'
              }} />
            </div>

            {/* Map Controls */}
            <div className="absolute right-4 top-4 flex flex-col gap-2">
              <div className="ky-tap-icon w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[12px] shadow-lg">
                +
              </div>
              <div className="ky-tap-icon w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[12px] shadow-lg">
                −
              </div>
              <div className="ky-tap-icon w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[12px] shadow-lg">
                📍
              </div>
            </div>

            {/* Map Type Toggle */}
            <div className="absolute left-4 top-4 bg-white rounded-lg px-2 py-1 shadow-lg">
              <div className="flex gap-2">
                <div className="ky-tap-tab text-[9px] font-bold" style={{ color: 'var(--saffron)' }}>Map</div>
                <div className="ky-tap-tab text-[9px]" style={{ color: 'var(--text-soft)' }}>Satellite</div>
              </div>
            </div>
          </div>

          {/* Location Info Card */}
          <div className="absolute bottom-20 left-4 right-4">
            <div
              className="bg-white rounded-[18px] p-4 shadow-lg"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[20px]">📍</div>
                <div className="flex-1">
                  <div 
                    className="text-[13px] font-bold"
                    style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
                  >
                    Your Farm Location · आपका खेत स्थान
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)' }}>
                    Wardha, Maharashtra · NH-161 से 5 किमी
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="text-center">
                  <div className="text-[14px] font-bold" style={{ color: 'var(--green)' }}>2.4 km</div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>Distance · दूरी</div>
                </div>
                <div className="text-center">
                  <div className="text-[14px] font-bold" style={{ color: 'var(--saffron)' }}>15 min</div>
                  <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>Est. Time · समय</div>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="ky-tap-cta-primary flex-1 bg-[#25D366] text-white rounded-[12px] py-2 text-[10px] font-bold flex items-center justify-center gap-1">
                  🗺️ Get Directions · दिशा प्राप्त करें
                </div>
                <div className="ky-tap-cta-secondary flex-1 rounded-[12px] py-2 text-[10px] font-bold text-center" style={{ background: 'var(--cream)', color: 'var(--text-dark)' }}>
                  📍 Share Location · स्थान साझा करें
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <div className="ky-tap-share flex-1 bg-white rounded-[14px] py-3 text-[11px] font-bold text-center shadow-lg">
              📞 Call Owner · मालिक को कॉल करें
            </div>
            <div className="ky-tap-share flex-1 bg-white rounded-[14px] py-3 text-[11px] font-bold text-center shadow-lg">
              📲 WhatsApp · व्हाट्सएप
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
