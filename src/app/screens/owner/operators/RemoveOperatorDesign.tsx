import { useLanguage } from '../../../contexts/language';

export function RemoveOperatorDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const strings = {
    removeOperator: t({
      english: 'Remove Operator?',
      hindi: 'ऑपरेटर हटाएं?',
      tamil: 'செயல்படுத்தியை நீக்குமா?',
      marathi: 'ऑपरेटर हटवायचे?'
    }),
    warning: t({
      english: 'This will delink the operator from all equipment and bookings. This action cannot be undone.',
      hindi: 'इससे ऑपरेटर को सभी उपकरण और बुकिंग से डिलिंक कर दिया जाएगा। यह कार्रवाई पूर्ववत नहीं की जा सकती।',
      tamil: 'இது செயல்படுத்தியை அனைத்து உபகரணங்கள் மற்றும் முன்பதிவுகளிலிருந்து துண்டிக்கும். இந்த செயலைச் செயல்தவிர்க்க முடியாது.',
      marathi: 'यामुळे ऑपरेटरला सर्व उपकरणे आणि बुकिंगमधून डिलिंक केले जाईल. ही कृती पूर्ववत केली जाऊ शकत नाही.'
    }),
    cancel: t({
      english: 'Cancel',
      hindi: 'रद्द करें',
      tamil: 'ரத்துசெய்',
      marathi: 'रद्द करा'
    }),
    remove: t({
      english: 'Remove',
      hindi: 'हटाएं',
      tamil: 'நீக்கு',
      marathi: 'हटवा'
    }),
    operatorName: t({
      english: 'Operator',
      hindi: 'ऑपरेटर',
      tamil: 'செயல்படுத்தி',
      marathi: 'ऑपरेटर'
    })
  };

  const operator = {
    name: 'Ramesh Kumar',
    photo: '👨‍🌾'
  };

  const poppinsFont = { fontFamily: 'Poppins, sans-serif' };
  const interFont = { fontFamily: 'Inter, sans-serif' };

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
        <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col" style={{ background: 'var(--bg-primary)' }}>
          {/* Status Bar */}
          <div className="flex justify-between items-center px-[18px] py-[10px] relative z-10">
            <span className="font-bold text-[11px]" style={interFont}>9:48</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Overlay */}
          <div
            className="absolute inset-0 z-20 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.5)' }}
          >
            {/* Alert Dialog */}
            <div
              className="bg-white rounded-[20px] p-6 mx-4"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)', maxWidth: '280px' }}
            >
              {/* Warning Icon */}
              <div className="text-center mb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-[32px] mx-auto mb-3"
                  style={{ background: '#FEE2E2' }}
                >
                  ⚠️
                </div>
                <div
                  className="text-[18px] font-bold mb-2"
                  style={{ ...poppinsFont, color: 'var(--text-primary)' }}
                >
                  {strings.removeOperator}
                </div>
              </div>

              {/* Operator Info */}
              <div className="flex items-center gap-3 mb-4 px-4 py-3 rounded-xl" style={{ background: 'var(--bg-primary)' }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[24px]"
                  style={{ background: 'linear-gradient(135deg, #FFE0C8, #FFCBA4)' }}
                >
                  {operator.photo}
                </div>
                <div>
                  <div className="text-[16px] font-bold" style={{ ...poppinsFont, color: 'var(--text-primary)' }}>
                    {operator.name}
                  </div>
                  <div className="text-[14px]" style={{ color: 'var(--text-secondary)', ...interFont }}>
                    {strings.operatorName}
                  </div>
                </div>
              </div>

              {/* Warning Message */}
              <div
                className="text-[14px] text-center mb-6 px-2"
                style={{ color: 'var(--text-secondary)', ...interFont, lineHeight: '1.5' }}
              >
                {strings.warning}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  className="w-full py-3 rounded-[12px] text-[18px] font-bold"
                  style={{
                    background: '#CC3333',
                    color: 'white',
                    boxShadow: '0 4px 16px rgba(204,51,51,0.3)',
                    ...poppinsFont
                  }}
                >
                  {strings.remove}
                </button>
                <button
                  className="w-full py-3 rounded-[12px] text-[18px] font-bold"
                  style={{
                    border: '1.5px solid #E0E0E0',
                    color: 'var(--text-primary)',
                    ...poppinsFont
                  }}
                >
                  {strings.cancel}
                </button>
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
