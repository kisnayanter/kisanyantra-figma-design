export function ToastNotificationsDesign() {
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
            <span className="font-bold text-[11px]">9:47</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div 
            className="px-5 pt-4 pb-[32px] rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  🛎️ UI Component Library
                </div>
                <div 
                  className="text-white text-[20px] font-bold"
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                >
                  Toast Notifications
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5 -mt-4 space-y-4">
            {/* Success Toast */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3 animate-slide-in"
              style={{
                background: 'linear-gradient(135deg, #22A04F 0%, #1A7A3B 100%)',
                boxShadow: '0 8px 24px rgba(34, 160, 79, 0.35)'
              }}
            >
              <div className="flex-shrink-0 text-2xl">✅</div>
              <div className="flex-1">
                <div className="text-white font-bold text-[14px] mb-0.5">
                  Booking Confirmed!
                </div>
                <div className="text-white text-[12px]" style={{ opacity: 0.9 }}>
                  Your tractor booking for Jan 15-17 has been confirmed
                </div>
              </div>
              <button className="flex-shrink-0 text-white text-lg opacity-70 hover:opacity-100">
                ✕
              </button>
            </div>

            {/* Error Toast */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3 animate-slide-in"
              style={{
                background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
                boxShadow: '0 8px 24px rgba(231, 76, 60, 0.35)'
              }}
            >
              <div className="flex-shrink-0 text-2xl">❌</div>
              <div className="flex-1">
                <div className="text-white font-bold text-[14px] mb-0.5">
                  Payment Failed
                </div>
                <div className="text-white text-[12px]" style={{ opacity: 0.9 }}>
                  Unable to process payment. Please try again
                </div>
              </div>
              <button className="flex-shrink-0 text-white text-lg opacity-70 hover:opacity-100">
                ✕
              </button>
            </div>

            {/* Warning Toast */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3 animate-slide-in"
              style={{
                background: 'linear-gradient(135deg, #F5A623 0%, #E67E22 100%)',
                boxShadow: '0 8px 24px rgba(245, 166, 35, 0.35)'
              }}
            >
              <div className="flex-shrink-0 text-2xl">⚠️</div>
              <div className="flex-1">
                <div className="text-white font-bold text-[14px] mb-0.5">
                  Incomplete Profile
                </div>
                <div className="text-white text-[12px]" style={{ opacity: 0.9 }}>
                  Add your location to see nearby equipment
                </div>
              </div>
              <button className="flex-shrink-0 text-white text-lg opacity-70 hover:opacity-100">
                ✕
              </button>
            </div>

            {/* Info Toast */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3 animate-slide-in"
              style={{
                background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
                boxShadow: '0 8px 24px rgba(52, 152, 219, 0.35)'
              }}
            >
              <div className="flex-shrink-0 text-2xl">ℹ️</div>
              <div className="flex-1">
                <div className="text-white font-bold text-[14px] mb-0.5">
                  Equipment Added
                </div>
                <div className="text-white text-[12px]" style={{ opacity: 0.9 }}>
                  Your John Deere 5310 is now listed
                </div>
              </div>
              <button className="flex-shrink-0 text-white text-lg opacity-70 hover:opacity-100">
                ✕
              </button>
            </div>

            {/* Loading Toast */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3 animate-slide-in"
              style={{
                background: 'white',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                border: '2px solid #E8E3DA'
              }}
            >
              <div className="flex-shrink-0 text-2xl animate-spin">⏳</div>
              <div className="flex-1">
                <div className="font-bold text-[14px] mb-0.5" style={{ color: 'var(--text-dark)' }}>
                  Uploading Photos...
                </div>
                <div className="text-[12px]" style={{ color: 'var(--text-mid)' }}>
                  Please wait while we process your images
                </div>
              </div>
            </div>

            {/* Action Toast with Button */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3 animate-slide-in"
              style={{
                background: 'linear-gradient(135deg, var(--saffron) 0%, #FF8C38 100%)',
                boxShadow: '0 8px 24px rgba(255, 107, 0, 0.35)'
              }}
            >
              <div className="flex-shrink-0 text-2xl">🎉</div>
              <div className="flex-1">
                <div className="text-white font-bold text-[14px] mb-0.5">
                  Profile Updated!
                </div>
                <div className="text-white text-[12px] mb-2" style={{ opacity: 0.9 }}>
                  Your changes have been saved successfully
                </div>
                <button
                  className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-white hover:opacity-90 transition-opacity"
                  style={{ color: 'var(--saffron)' }}
                >
                  View Profile
                </button>
              </div>
              <button className="flex-shrink-0 text-white text-lg opacity-70 hover:opacity-100">
                ✕
              </button>
            </div>

            {/* API Use Cases Info Card */}
            <div
              className="rounded-2xl p-4 mt-6"
              style={{
                background: 'white',
                boxShadow: 'var(--card-shadow)'
              }}
            >
              <div className="text-[11px] font-semibold mb-3" style={{ color: 'var(--text-soft)' }}>
                API Response States · API प्रतिक्रिया
              </div>
              <div className="space-y-2 text-[11px]" style={{ color: 'var(--text-mid)' }}>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span><strong>Success:</strong> Booking confirmed, Equipment listed, Profile updated</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0">❌</span>
                  <span><strong>Error:</strong> Payment failed, Network error, Invalid data</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0">⚠️</span>
                  <span><strong>Warning:</strong> Missing info, Session expiring, Low balance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0">⏳</span>
                  <span><strong>Loading:</strong> Uploading files, Processing payment, Fetching data</span>
                </div>
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

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
