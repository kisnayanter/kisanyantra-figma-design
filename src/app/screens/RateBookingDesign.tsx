export function RateBookingDesign() {
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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: '#F8F5F0' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]">9:51</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header - Fixed with saffron gradient */}
          <div 
            className="px-5 pt-4 pb-[60px] rounded-b-[36px]"
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
                  Rate Service · रेटिंग दें
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Rate Your Experience
                </div>
              </div>
            </div>

            {/* Equipment Info */}
            <div 
              className="rounded-[16px] p-4 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div 
                className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[24px]"
                style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
              >
                🚜
              </div>
              <div className="flex-1">
                <div className="text-white text-[14px] font-bold">
                  Mahindra 475 DI
                </div>
                <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  हरप्रीत सिंह · Harpreet Singh · Jul 10-12
                </div>
              </div>
            </div>
          </div>

          {/* Content Area with proper scroll behavior */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-8">
            {/* Star Rating */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4 text-center"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                ⭐ Overall Rating · समग्र रेटिंग
              </div>
              <div className="text-[40px] mb-3">⭐⭐⭐⭐⭐</div>
              <div className="text-[12px] font-bold mb-2" style={{ color: 'var(--saffron)' }}>
                Excellent · उत्कृष्ट
              </div>
              <div className="text-[9px]" style={{ color: 'var(--text-soft)' }}>
                Tap stars to rate · रेट करने के लिए सितारों पर टैप करें
              </div>
            </div>

            {/* Detailed Rating */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📊 Detailed Rating · विस्तृत रेटिंग
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Equipment Quality · उपकरण गुणवत्ता', rating: '⭐⭐⭐⭐⭐' },
                  { label: 'Owner Behavior · मालिक का व्यवहार', rating: '⭐⭐⭐⭐⭐' },
                  { label: 'On-time Arrival · समय पर आगमन', rating: '⭐⭐⭐⭐☆' },
                  { label: 'Value for Money · पैसे का मूल्य', rating: '⭐⭐⭐⭐⭐' }
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-[9px]" style={{ color: 'var(--text-dark)' }}>{item.label}</span>
                    <span className="text-[14px]">{item.rating}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                💬 Write Review · समीक्षा लिखें
              </div>
              <div 
                className="rounded-lg p-3 text-[10px]"
                style={{ 
                  background: 'var(--cream)', 
                  border: '1px solid #E8E3DA',
                  minHeight: '100px'
                }}
              >
                Tell us about your experience... · अपना अनुभव बताएं...
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-[8px]" style={{ color: 'var(--text-soft)' }}>
                  0/300 characters
                </div>
                <div className="flex gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px]" style={{ background: 'var(--saffron-pale)', color: 'var(--saffron)' }}>
                    📷
                  </div>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px]" style={{ background: 'var(--green-pale)', color: 'var(--green)' }}>
                    📎
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tags */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                🏷️ Quick Tags · त्वरित टैग
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Professional · पेशेवर',
                  'On Time · समय पर',
                  'Good Equipment · अच्छा उपकरण',
                  'Helpful · सहायक',
                  'Reasonable · उचित',
                  'Well Maintained · अच्छी तरह से रखरखाव'
                ].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-lg px-2 py-1 text-[8px] font-bold cursor-pointer"
                    style={{ 
                      background: 'var(--saffron-pale)', 
                      color: 'var(--saffron)',
                      border: '1px solid var(--saffron)'
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Photos */}
            <div
              className="bg-white rounded-[20px] p-4 mb-4"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div 
                className="text-[11px] font-bold mb-3"
                style={{ fontFamily: "'Baloo 2', cursive", color: 'var(--text-dark)' }}
              >
                📷 Add Photos · फोटो जोड़ें
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div 
                  className="aspect-square rounded-lg flex items-center justify-center text-[18px]"
                  style={{ background: 'var(--cream)', border: '2px dashed #E8E3DA' }}
                >
                  📷
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 pb-4 flex flex-col gap-2">
            <div className="w-full bg-[#25D366] text-white rounded-[14px] py-3 text-[11px] font-bold flex items-center justify-center gap-1.5">
              ⭐ Submit Review · समीक्षा जमा करें
            </div>
            <div
              className="w-full rounded-[14px] py-3 text-xs font-bold text-center"
              style={{ background: 'white', color: 'var(--text-mid)', border: '1.5px solid #E0E0E0' }}
            >
              Skip for Now · अभी छोड़ें
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
