import { useState } from 'react';
import { useLanguage } from '../../contexts/language';

type MethodType = 'upi' | 'bank' | 'qr';
type UpiStep = 'enter' | 'verified' | 'saved';
type BankStep = 'enter' | 'saved';
type QrStep = 'upload' | 'preview' | 'saved';

export function AddPaymentMethodDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  // Prototype: switch method type at top
  const [activeMethod, setActiveMethod] = useState<MethodType>('upi');
  // Per-method step state
  const [upiStep, setUpiStep] = useState<UpiStep>('enter');
  const [bankStep, setBankStep] = useState<BankStep>('enter');
  const [qrStep, setQrStep] = useState<QrStep>('upload');
  const [isDefault, setIsDefault] = useState(true);

  const poppins = { fontFamily: 'Poppins, sans-serif' };
  const inter = { fontFamily: 'Inter, sans-serif' };

  const methodMeta: Record<MethodType, { icon: string; title: string; subtitle: string; bg: string; shadow: string; accentColor: string }> = {
    upi: {
      icon: '📱',
      title: t({ english: 'Add UPI ID', hindi: 'UPI ID जोड़ें', tamil: 'UPI ID சேர்க்கவும்', marathi: 'UPI ID जोडा' }),
      subtitle: t({ english: 'PhonePe, GPay, Paytm, BHIM', hindi: 'PhonePe, GPay, Paytm, BHIM', tamil: 'PhonePe, GPay, Paytm, BHIM', marathi: 'PhonePe, GPay, Paytm, BHIM' }),
      bg: 'linear-gradient(135deg, var(--green), var(--green-light))',
      shadow: '0 4px 16px rgba(26,122,59,0.35)',
      accentColor: 'var(--green)',
    },
    bank: {
      icon: '🏦',
      title: t({ english: 'Add Bank Account', hindi: 'बैंक खाता जोड़ें', tamil: 'வங்கி கணக்கு சேர்க்கவும்', marathi: 'बँक खाते जोडा' }),
      subtitle: t({ english: 'NEFT / IMPS / direct transfer', hindi: 'NEFT / IMPS / सीधा ट्रांसफर', tamil: 'NEFT / IMPS / நேரடி பரிமாற்றம்', marathi: 'NEFT / IMPS / थेट ट्रान्सफर' }),
      bg: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
      shadow: '0 4px 16px rgba(30,64,175,0.35)',
      accentColor: '#1E40AF',
    },
    qr: {
      icon: '▦',
      title: t({ english: 'Add QR Code', hindi: 'QR कोड जोड़ें', tamil: 'QR குறியீடு சேர்க்கவும்', marathi: 'QR कोड जोडा' }),
      subtitle: t({ english: 'Upload or generate a scannable QR', hindi: 'स्कैनेबल QR अपलोड या बनाएं', tamil: 'QR பதிவேற்றவும் அல்லது உருவாக்கவும்', marathi: 'QR अपलोड करा किंवा तयार करा' }),
      bg: 'linear-gradient(135deg, #0E7490, #06B6D4)',
      shadow: '0 4px 16px rgba(14,116,144,0.35)',
      accentColor: '#0E7490',
    },
  };

  const meta = methodMeta[activeMethod];

  // Step indicators per method
  const upiSteps = [
    t({ english: 'Enter', hindi: 'दर्ज करें', tamil: 'உள்ளிடு', marathi: 'प्रविष्ट करा' }),
    t({ english: 'Verify', hindi: 'सत्यापित करें', tamil: 'சரிபார்', marathi: 'सत्यापित करा' }),
    t({ english: 'Save', hindi: 'सहेजें', tamil: 'சேமி', marathi: 'जतन करा' }),
  ];
  const bankSteps = [
    t({ english: 'Enter Details', hindi: 'विवरण दर्ज करें', tamil: 'விவரங்கள் உள்ளிடு', marathi: 'तपशील प्रविष्ट करा' }),
    t({ english: 'Save', hindi: 'सहेजें', tamil: 'சேமி', marathi: 'जतन करा' }),
  ];
  const qrSteps = [
    t({ english: 'Upload / Generate', hindi: 'अपलोड / बनाएं', tamil: 'பதிவேற்று / உருவாக்கு', marathi: 'अपलोड / तयार करा' }),
    t({ english: 'Preview', hindi: 'पूर्वावलोकन', tamil: 'முன்னோட்டம்', marathi: 'पूर्वावलोकन' }),
    t({ english: 'Save', hindi: 'सहेजें', tamil: 'சேமி', marathi: 'जतन करा' }),
  ];

  const currentSteps = activeMethod === 'upi' ? upiSteps : activeMethod === 'bank' ? bankSteps : qrSteps;
  const currentStepIndex = activeMethod === 'upi'
    ? (upiStep === 'enter' ? 0 : upiStep === 'verified' ? 1 : 2)
    : activeMethod === 'bank'
    ? (bankStep === 'enter' ? 0 : 1)
    : (qrStep === 'upload' ? 0 : qrStep === 'preview' ? 1 : 2);

  const isSaved = (activeMethod === 'upi' && upiStep === 'saved')
    || (activeMethod === 'bank' && bankStep === 'saved')
    || (activeMethod === 'qr' && qrStep === 'saved');

  const resetSteps = () => {
    setUpiStep('enter');
    setBankStep('enter');
    setQrStep('upload');
  };

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
            className="px-[18px] pt-3 pb-5 rounded-b-[36px]"
            style={{ background: meta.bg }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.75)', ...inter }}>
                  {meta.subtitle}
                </div>
                <div className="text-white text-[17px] font-bold" style={poppins}>
                  {meta.title}
                </div>
              </div>
              <div
                className="w-10 h-10 rounded-[12px] flex items-center justify-center text-[20px]"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                {meta.icon}
              </div>
            </div>

            {/* Step indicator */}
            {!isSaved && (
              <div className="flex items-center gap-1">
                {currentSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-1 flex-1">
                    <div className="flex items-center gap-1 flex-1">
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                        style={{
                          background: i <= currentStepIndex ? 'white' : 'rgba(255,255,255,0.25)',
                          color: i <= currentStepIndex ? meta.accentColor : 'rgba(255,255,255,0.6)',
                        }}
                      >
                        {i < currentStepIndex ? '✓' : i + 1}
                      </div>
                      <div
                        className="text-[9px] font-bold truncate"
                        style={{ color: i === currentStepIndex ? 'white' : 'rgba(255,255,255,0.55)', ...poppins }}
                      >
                        {step}
                      </div>
                    </div>
                    {i < currentSteps.length - 1 && (
                      <div
                        className="flex-shrink-0 h-[1.5px] w-4"
                        style={{ background: i < currentStepIndex ? 'white' : 'rgba(255,255,255,0.3)' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Prototype type switcher */}
          <div className="flex gap-1 mx-4 mt-3 rounded-[12px] p-1" style={{ background: '#F0EDE7' }}>
            {(['upi', 'bank', 'qr'] as MethodType[]).map(m => (
              <button
                key={m}
                type="button"
                onClick={() => { setActiveMethod(m); resetSteps(); }}
                className="flex-1 py-1.5 rounded-[9px] text-[10px] font-bold transition-all"
                style={{
                  background: activeMethod === m ? 'white' : 'transparent',
                  color: activeMethod === m ? methodMeta[m].accentColor : 'var(--text-soft)',
                  boxShadow: activeMethod === m ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
                  ...poppins,
                }}
              >
                {m === 'upi' ? '📱 UPI' : m === 'bank' ? '🏦 Bank' : '▦ QR'}
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">

            {/* SUCCESS STATE */}
            {isSaved && (
              <div className="flex flex-col items-center justify-center h-full gap-4 pb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-[32px]"
                  style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', boxShadow: '0 8px 24px rgba(26,122,59,0.35)' }}
                >
                  ✓
                </div>
                <div className="text-center">
                  <div className="text-[16px] font-bold mb-1" style={{ color: 'var(--green)', ...poppins }}>
                    {activeMethod === 'upi' ? 'UPI ID Saved!' : activeMethod === 'bank' ? 'Bank Account Saved!' : 'QR Code Saved!'}
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-mid)', ...inter }}>
                    {activeMethod === 'upi' ? 'ramesh.kumar@okicici · Ramesh Kumar' : activeMethod === 'bank' ? 'SBI · A/C ****4521' : 'QR from ramesh.kumar@okicici'}
                  </div>
                </div>
                <div
                  className="ky-tap-link rounded-[12px] px-4 py-2 text-[11px] font-bold"
                  style={{ background: 'rgba(26,122,59,0.08)', color: 'var(--green)', ...poppins }}
                  onClick={() => resetSteps()}
                >
                  ← Back to Payment Profile
                </div>
              </div>
            )}

            {/* UPI FORM */}
            {activeMethod === 'upi' && !isSaved && (
              <div className="bg-white rounded-[18px] p-4 space-y-3" style={{ boxShadow: 'var(--card-shadow)' }}>
                {/* UPI ID field */}
                <div>
                  <div className="text-[11px] font-bold mb-1.5" style={{ color: 'var(--text-dark)', ...poppins }}>
                    UPI ID
                  </div>
                  <div
                    className="w-full rounded-[10px] px-3 py-2.5 text-[12px] flex items-center justify-between"
                    style={{
                      border: upiStep === 'enter' ? '1.5px solid #E8E3DA' : '1.5px solid var(--green)',
                      background: upiStep === 'enter' ? '#FAFAFA' : 'white',
                      boxShadow: upiStep !== 'enter' ? '0 0 0 3px rgba(26,122,59,0.1)' : 'none',
                      ...inter,
                      color: 'var(--text-dark)',
                    }}
                  >
                    <span>ramesh.kumar@okicici</span>
                    {upiStep !== 'enter' && <span className="text-[11px]" style={{ color: 'var(--green)' }}>✓</span>}
                  </div>
                  <div className="text-[9px] mt-1" style={{ color: 'var(--text-soft)', ...inter }}>
                    Format: name@bankcode (e.g. @okicici, @ybl, @upi)
                  </div>
                </div>

                {/* Verified result — shown after verify */}
                {upiStep !== 'enter' && (
                  <div
                    className="flex items-center gap-2 rounded-[10px] px-3 py-2"
                    style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}
                  >
                    <div className="text-[14px]">✅</div>
                    <div>
                      <div className="text-[10px] font-bold" style={{ color: '#166534', ...poppins }}>UPI Verified</div>
                      <div className="text-[9px]" style={{ color: '#15803D', ...inter }}>ramesh.kumar@okicici · Ramesh Kumar</div>
                    </div>
                  </div>
                )}

                {/* Nickname — shown after verify */}
                {upiStep !== 'enter' && (
                  <div>
                    <div className="text-[11px] font-bold mb-1.5" style={{ color: 'var(--text-dark)', ...poppins }}>
                      Nickname (optional)
                    </div>
                    <div
                      className="w-full rounded-[10px] px-3 py-2.5 text-[12px]"
                      style={{ border: '1.5px solid #E8E3DA', background: '#FAFAFA', color: 'var(--text-mid)', ...inter }}
                    >
                      My PhonePe
                    </div>
                  </div>
                )}

                {/* Default toggle — shown after verify */}
                {upiStep !== 'enter' && (
                  <div className="flex items-center justify-between pt-1">
                    <div className="text-[11px]" style={{ color: 'var(--text-dark)', ...inter }}>Set as default payment method</div>
                    <div
                      className="ky-tap-link w-10 h-5 rounded-full flex items-center px-0.5"
                      style={{ background: isDefault ? 'var(--green)' : '#E0E0E0' }}
                      onClick={() => setIsDefault(v => !v)}
                    >
                      <div
                        className="w-4 h-4 rounded-full bg-white"
                        style={{ marginLeft: isDefault ? 'auto' : '0', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* BANK FORM */}
            {activeMethod === 'bank' && !isSaved && (
              <div className="bg-white rounded-[18px] p-4 space-y-3" style={{ boxShadow: 'var(--card-shadow)' }}>
                {[
                  { label: 'Account Holder Name', value: 'Ramesh Kumar' },
                  { label: 'Account Number', value: '•••• •••• 4521' },
                  { label: 'IFSC Code', value: 'SBIN0001234' },
                ].map((field, i) => (
                  <div key={i}>
                    <div className="text-[11px] font-bold mb-1.5" style={{ color: 'var(--text-dark)', ...poppins }}>{field.label}</div>
                    <div
                      className="w-full rounded-[10px] px-3 py-2.5 text-[12px]"
                      style={{ border: '1.5px solid #E8E3DA', background: '#FAFAFA', color: 'var(--text-dark)', ...inter }}
                    >
                      {field.value}
                    </div>
                  </div>
                ))}
                {/* Bank name auto-fetched */}
                <div>
                  <div className="text-[11px] font-bold mb-1.5" style={{ color: 'var(--text-dark)', ...poppins }}>Bank Name</div>
                  <div
                    className="rounded-[10px] px-3 py-2.5 flex items-center justify-between"
                    style={{ border: '1.5px solid #BBF7D0', background: '#F0FDF4' }}
                  >
                    <span className="text-[12px] font-bold" style={{ color: '#166534', ...poppins }}>State Bank of India</span>
                    <span className="text-[9px]" style={{ color: '#15803D', ...inter }}>Auto-fetched ✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="text-[11px]" style={{ color: 'var(--text-dark)', ...inter }}>Set as default payment method</div>
                  <div
                    className="ky-tap-link w-10 h-5 rounded-full flex items-center px-0.5"
                    style={{ background: isDefault ? '#1E40AF' : '#E0E0E0' }}
                    onClick={() => setIsDefault(v => !v)}
                  >
                    <div
                      className="w-4 h-4 rounded-full bg-white"
                      style={{ marginLeft: isDefault ? 'auto' : '0', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* QR FORM */}
            {activeMethod === 'qr' && !isSaved && (
              <div className="space-y-3">
                {qrStep === 'upload' && (
                  <>
                    {/* Upload zone */}
                    <div
                      className="ky-tap-link bg-white rounded-[18px] p-5 flex flex-col items-center gap-2"
                      style={{ boxShadow: 'var(--card-shadow)', border: '2px dashed rgba(14,116,144,0.35)' }}
                      onClick={() => setQrStep('preview')}
                    >
                      <div
                        className="w-14 h-14 rounded-[16px] flex items-center justify-center text-[28px]"
                        style={{ background: 'rgba(14,116,144,0.08)' }}
                      >
                        📷
                      </div>
                      <div className="text-[12px] font-bold" style={{ color: '#0E7490', ...poppins }}>
                        Tap to Upload QR Image
                      </div>
                      <div className="text-[9px]" style={{ color: 'var(--text-soft)', ...inter }}>JPG, PNG · Max 2MB</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-[1px]" style={{ background: '#E8E3DA' }} />
                      <div className="text-[10px]" style={{ color: 'var(--text-soft)', ...inter }}>or generate from UPI ID</div>
                      <div className="flex-1 h-[1px]" style={{ background: '#E8E3DA' }} />
                    </div>

                    {/* Generate from UPI */}
                    <div className="bg-white rounded-[18px] p-4" style={{ boxShadow: 'var(--card-shadow)' }}>
                      <div className="text-[11px] font-bold mb-2" style={{ color: 'var(--text-dark)', ...poppins }}>UPI ID</div>
                      <div
                        className="w-full rounded-[10px] px-3 py-2 text-[12px] mb-3"
                        style={{ border: '1.5px solid #E8E3DA', background: '#FAFAFA', color: 'var(--text-mid)', ...inter }}
                      >
                        ramesh.kumar@okicici
                      </div>
                      <div
                        className="ky-tap-cta-primary w-full rounded-[11px] py-2 text-center text-[11px] font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #0E7490, #06B6D4)' }}
                        onClick={() => setQrStep('preview')}
                      >
                        Generate QR
                      </div>
                    </div>
                  </>
                )}

                {qrStep === 'preview' && (
                  <div className="bg-white rounded-[18px] p-4 space-y-3" style={{ boxShadow: 'var(--card-shadow)' }}>
                    <div className="text-[11px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>QR Preview</div>
                    <div className="flex justify-center">
                      <div
                        className="w-28 h-28 rounded-[16px] flex items-center justify-center text-[48px]"
                        style={{ background: 'linear-gradient(135deg, #ECFEFF, #CFFAFE)', border: '2px solid rgba(14,116,144,0.25)' }}
                      >
                        ▦
                      </div>
                    </div>
                    <div className="text-[9px] text-center" style={{ color: 'var(--text-soft)', ...inter }}>
                      Generated from ramesh.kumar@okicici
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="text-[11px]" style={{ color: 'var(--text-dark)', ...inter }}>Set as default</div>
                      <div
                        className="ky-tap-link w-10 h-5 rounded-full flex items-center px-0.5"
                        style={{ background: isDefault ? '#0E7490' : '#E0E0E0' }}
                        onClick={() => setIsDefault(v => !v)}
                      >
                        <div
                          className="w-4 h-4 rounded-full bg-white"
                          style={{ marginLeft: isDefault ? 'auto' : '0', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                        />
                      </div>
                    </div>
                    <div
                      className="ky-tap-link text-center text-[10px]"
                      style={{ color: '#0E7490', ...inter }}
                      onClick={() => setQrStep('upload')}
                    >
                      ← Change QR
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {!isSaved && (
            <div className="px-4 pb-4 flex flex-col gap-2">
              <div
                className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[13px] font-bold text-center text-white"
                style={{ background: meta.bg, boxShadow: meta.shadow }}
                onClick={() => {
                  if (activeMethod === 'upi') {
                    if (upiStep === 'enter') setUpiStep('verified');
                    else setUpiStep('saved');
                  } else if (activeMethod === 'bank') {
                    setBankStep('saved');
                  } else {
                    if (qrStep === 'upload') setQrStep('preview');
                    else setQrStep('saved');
                  }
                }}
              >
                {activeMethod === 'upi' && upiStep === 'enter'
                  ? t({ english: 'Verify UPI ID', hindi: 'UPI ID सत्यापित करें', tamil: 'UPI ID சரிபார்', marathi: 'UPI ID सत्यापित करा' })
                  : activeMethod === 'upi' && upiStep === 'verified'
                  ? t({ english: 'Save UPI ID', hindi: 'UPI ID सहेजें', tamil: 'UPI ID சேமி', marathi: 'UPI ID जतन करा' })
                  : activeMethod === 'bank'
                  ? t({ english: 'Save Bank Account', hindi: 'बैंक खाता सहेजें', tamil: 'வங்கி கணக்கு சேமி', marathi: 'बँक खाते जतन करा' })
                  : qrStep === 'upload'
                  ? t({ english: 'Continue', hindi: 'जारी रखें', tamil: 'தொடர்க', marathi: 'सुरू ठेवा' })
                  : t({ english: 'Save QR Code', hindi: 'QR कोड सहेजें', tamil: 'QR குறியீடு சேமி', marathi: 'QR कोड जतन करा' })
                }
              </div>
              <div
                className="ky-tap-link w-full text-center text-[11px] py-1"
                style={{ color: 'var(--text-soft)', ...inter }}
                onClick={() => resetSteps()}
              >
                {t({ english: 'Cancel', hindi: 'रद्द करें', tamil: 'ரத்து செய்', marathi: 'रद्द करा' })}
              </div>
            </div>
          )}

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
