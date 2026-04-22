import { useState } from 'react';
import { useLanguage } from '../../contexts/language';
import { OwnerBottomNav } from '../../components/OwnerBottomNav';

export function ManagePaymentMethodsDesign() {
  const { selectText } = useLanguage();
  const t = (options: Parameters<typeof selectText>[0]) => selectText(options);

  const [expandedKey, setExpandedKey] = useState<string | null>('upi');
  const [confirmDeleteKey, setConfirmDeleteKey] = useState<string | null>(null);
  const [deletedKeys, setDeletedKeys] = useState<string[]>([]);

  const poppins = { fontFamily: 'Poppins, sans-serif' };
  const inter = { fontFamily: 'Inter, sans-serif' };

  const strings = {
    title: t({ english: 'Payment Methods', hindi: 'भुगतान विधियाँ', tamil: 'கட்டண முறைகள்', marathi: 'पेमेंट पद्धती' }),
    subtitle: t({ english: 'Manage how you get paid', hindi: 'प्राप्त भुगतान प्रबंधित करें', tamil: 'கட்டணம் பெற்கும் முறையை நிர்வகிக்கவும்', marathi: 'पेमेंट कसे मिळते ते व्यवस्थापित करा' }),
    default: t({ english: 'DEFAULT', hindi: 'डिफ़ॉल्ट', tamil: 'இயல்புநிலை', marathi: 'डीफॉल्ट' }),
    verified: t({ english: 'Verified', hindi: 'सत्यापित', tamil: 'சரிபார்க்கப்பட்டது', marathi: 'सत्यापित' }),
    unverified: t({ english: 'Unverified', hindi: 'असत्यापित', tamil: 'சரிபார்க்கப்படவில்லை', marathi: 'असत्यापित' }),
    setDefault: t({ english: 'Set as Default', hindi: 'डिफ़ॉल्ट सेट करें', tamil: 'இயல்புநிலையாக அமை', marathi: 'डीफॉल्ट म्हणून सेट करा' }),
    delete: t({ english: 'Delete', hindi: 'हटाएं', tamil: 'நீக்கு', marathi: 'हटवा' }),
    confirmDelete: t({ english: 'Confirm Delete?', hindi: 'हटाने की पुष्टि करें?', tamil: 'நீக்கலாமா?', marathi: 'हटवण्याची पुष्टी करा?' }),
    confirmDeleteDesc: t({ english: 'This cannot be undone.', hindi: 'यह पूर्ववत नहीं किया जा सकता।', tamil: 'இதை மீட்டெடுக்க முடியாது.', marathi: 'हे पूर्ववत करता येणार नाही.' }),
    cancelDelete: t({ english: 'Cancel', hindi: 'रद्द करें', tamil: 'ரத்து செய்', marathi: 'रद्द करा' }),
    yesDelete: t({ english: 'Yes, Delete', hindi: 'हाँ, हटाएं', tamil: 'ஆம், நீக்கு', marathi: 'हो, हटवा' }),
    addNew: t({ english: '+ Add New Method', hindi: '+ नई विधि जोड़ें', tamil: '+ புதிய முறையை சேர்க்கவும்', marathi: '+ नवीन पद्धत जोडा' }),
    requiresAtLeastOne: t({ english: 'Keep at least one method active to accept bookings', hindi: 'बुकिंग स्वीकार करने के लिए कम से कम एक विधि सक्रिय रखें', tamil: 'முன்பதிவுகளை ஏற்க குறைந்தது ஒரு முறை செயலில் வைக்கவும்', marathi: 'बुकिंग स्वीकारण्यासाठी किमान एक पद्धत सक्रिय ठेवा' }),
    disable: t({ english: 'Disable', hindi: 'अक्षम करें', tamil: 'முடக்கு', marathi: 'अक्षम करा' }),
    enable: t({ english: 'Enable', hindi: 'सक्षम करें', tamil: 'இயக்கு', marathi: 'सक्षम करा' }),
    lastUsed: t({ english: 'Last used', hindi: 'अंतिम बार', tamil: 'கடைசியாக', marathi: 'शेवटचे' }),
    methodsTitle: t({ english: 'Your Payment Methods', hindi: 'आपकी भुगतान विधियाँ', tamil: 'உங்கள் கட்டண முறைகள்', marathi: 'तुमच्या पेमेंट पद्धती' }),
    noMethods: t({ english: 'No payment methods added', hindi: 'कोई भुगतान विधि नहीं जोड़ी गई', tamil: 'எந்த கட்டண முறையும் சேர்க்கப்படவில்லை', marathi: 'कोणतीही पेमेंट पद्धत जोडली नाही' }),
    noMethodsDesc: t({ english: 'Add a method to start accepting bookings and receiving payments.', hindi: 'बुकिंग स्वीकार करने और भुगतान प्राप्त करने के लिए एक विधि जोड़ें।', tamil: 'முன்பதிவுகளை ஏற்கவும் கட்டணம் பெறவும் ஒரு முறையை சேர்க்கவும்.', marathi: 'बुकिंग स्वीकारण्यासाठी आणि पेमेंट प्राप्त करण्यासाठी एक पद्धत जोडा.' }),
    details: t({ english: 'Details', hindi: 'विवरण', tamil: 'விவரங்கள்', marathi: 'तपशील' }),
    resetProto: t({ english: '↺ Restore all (prototype)', hindi: '↺ सभी पुनर्स्थापित करें', tamil: '↺ அனைத்தையும் மீட்டமை', marathi: '↺ सर्व पुनर्संचयित करा' }),
  };

  const allMethods = [
    {
      key: 'upi',
      type: 'UPI',
      icon: '📱',
      name: 'My PhonePe',
      detail: 'ramesh.kumar@okicici',
      expandedRows: [
        { label: 'UPI ID', value: 'ramesh.kumar@okicici' },
        { label: 'Name', value: 'Ramesh Kumar' },
        { label: 'Nickname', value: 'My PhonePe' },
      ],
      isDefault: true,
      isVerified: true,
      isActive: true,
      lastUsed: 'Jul 12, 2025',
      bg: 'linear-gradient(135deg, var(--green), var(--green-light))',
      accentColor: 'var(--green)',
      toggleBg: 'var(--green)',
    },
    {
      key: 'bank',
      type: 'Bank',
      icon: '🏦',
      name: 'State Bank of India',
      detail: 'A/C ****4521 · SBIN0001234',
      expandedRows: [
        { label: 'Account Holder', value: 'Ramesh Kumar' },
        { label: 'Account No.', value: '****4521' },
        { label: 'IFSC', value: 'SBIN0001234' },
        { label: 'Bank', value: 'State Bank of India' },
      ],
      isDefault: false,
      isVerified: true,
      isActive: true,
      lastUsed: 'Jun 28, 2025',
      bg: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
      accentColor: '#1E40AF',
      toggleBg: '#1E40AF',
    },
    {
      key: 'qr',
      type: 'QR',
      icon: '▦',
      name: 'My QR Code',
      detail: 'Generated from UPI ID',
      expandedRows: [
        { label: 'Source', value: 'ramesh.kumar@okicici' },
        { label: 'Type', value: 'Auto-generated' },
      ],
      isDefault: false,
      isVerified: false,
      isActive: false,
      lastUsed: null,
      bg: 'linear-gradient(135deg, #0E7490, #06B6D4)',
      accentColor: '#0E7490',
      toggleBg: '#0E7490',
    },
  ];

  const methods = allMethods.filter(m => !deletedKeys.includes(m.key));

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
            <span className="font-bold text-[11px]">9:50</span>
            <div className="flex gap-1 items-center text-[11px]">📶 🔋</div>
          </div>

          {/* Header */}
          <div
            className="px-[18px] pt-3 pb-5 rounded-b-[36px]"
            style={{ background: 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="ky-tap-back w-8 h-8 rounded-[10px] flex items-center justify-center text-white text-base"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                ←
              </div>
              <div className="flex-1">
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.75)', ...inter }}>
                  {strings.subtitle}
                </div>
                <div className="text-white text-[17px] font-bold" style={poppins}>
                  {strings.title}
                </div>
              </div>
              <div
                className="rounded-full px-2.5 py-1 text-[10px] font-bold"
                style={{ background: 'rgba(255,255,255,0.2)', color: 'white', ...poppins }}
              >
                {methods.length} Methods
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 -mt-1">

            {/* Empty state */}
            {methods.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-4 py-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-[28px]"
                  style={{ background: 'rgba(26,122,59,0.08)' }}
                >
                  💳
                </div>
                <div className="text-center">
                  <div className="text-[13px] font-bold mb-1" style={{ color: 'var(--text-dark)', ...poppins }}>
                    {strings.noMethods}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--text-soft)', ...inter }}>
                    {strings.noMethodsDesc}
                  </div>
                </div>
                <div
                  className="ky-tap-link text-[10px]"
                  style={{ color: 'var(--text-hint)', ...inter }}
                  onClick={() => setDeletedKeys([])}
                >
                  {strings.resetProto}
                </div>
              </div>
            )}

            {methods.length > 0 && (
              <>
                <div className="text-[10px] font-bold mb-2 uppercase tracking-wide" style={{ color: 'var(--text-soft)', ...poppins }}>
                  {strings.methodsTitle}
                </div>

                <div className="space-y-2 mb-3">
                  {methods.map((method) => {
                    const isExpanded = expandedKey === method.key;
                    const isConfirmingDelete = confirmDeleteKey === method.key;

                    return (
                      <div
                        key={method.key}
                        className="bg-white rounded-[18px] overflow-hidden"
                        style={{
                          boxShadow: 'var(--card-shadow)',
                          opacity: method.isActive ? 1 : 0.65,
                          border: isExpanded ? `1.5px solid ${method.accentColor}44` : '1.5px solid transparent',
                        }}
                      >
                        {/* Row header — tap to expand */}
                        <div
                          className="ky-tap-link p-3 flex items-center gap-3"
                          onClick={() => setExpandedKey(isExpanded ? null : method.key)}
                        >
                          <div
                            className="w-10 h-10 rounded-[12px] flex items-center justify-center text-[18px] flex-shrink-0"
                            style={{ background: method.bg }}
                          >
                            {method.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <div className="text-[12px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>
                                {method.name}
                              </div>
                              {method.isDefault && (
                                <span
                                  className="px-1.5 py-0.5 rounded-md text-[8px] font-bold text-white"
                                  style={{ background: 'var(--green)' }}
                                >
                                  {strings.default}
                                </span>
                              )}
                              <span
                                className="px-1.5 py-0.5 rounded-md text-[8px] font-bold"
                                style={{
                                  background: method.isVerified ? '#F0FDF4' : '#FEF9C3',
                                  color: method.isVerified ? '#166534' : '#854D0E',
                                }}
                              >
                                {method.isVerified ? `✓ ${strings.verified}` : `! ${strings.unverified}`}
                              </span>
                            </div>
                            <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-soft)', ...inter }}>
                              {method.detail}
                            </div>
                          </div>
                          {/* Chevron */}
                          <div
                            className="text-[14px] transition-transform flex-shrink-0"
                            style={{
                              color: 'var(--text-soft)',
                              transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                            }}
                          >
                            ›
                          </div>
                        </div>

                        {/* Expanded accordion content */}
                        {isExpanded && (
                          <>
                            <div style={{ borderTop: '1px solid #F5F2ED' }} />

                            {/* Detail rows */}
                            <div className="px-3 py-2 space-y-1.5">
                              {method.expandedRows.map((row, ri) => (
                                <div key={ri} className="flex justify-between items-center">
                                  <span className="text-[10px]" style={{ color: 'var(--text-soft)', ...inter }}>{row.label}</span>
                                  <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)', ...poppins }}>{row.value}</span>
                                </div>
                              ))}
                              {method.lastUsed && (
                                <div className="flex justify-between items-center">
                                  <span className="text-[10px]" style={{ color: 'var(--text-soft)', ...inter }}>{strings.lastUsed}</span>
                                  <span className="text-[10px]" style={{ color: 'var(--text-hint)', ...inter }}>{method.lastUsed}</span>
                                </div>
                              )}
                              {/* Active toggle row */}
                              <div className="flex items-center justify-between pt-1">
                                <span className="text-[10px] font-bold" style={{ color: 'var(--text-dark)', ...inter }}>
                                  {method.isActive ? strings.disable : strings.enable}
                                </span>
                                <div
                                  className="ky-tap-link w-10 h-5 rounded-full flex items-center px-0.5"
                                  style={{ background: method.isActive ? method.toggleBg : '#E0E0E0' }}
                                >
                                  <div
                                    className="w-4 h-4 rounded-full bg-white"
                                    style={{ marginLeft: method.isActive ? 'auto' : '0', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div style={{ borderTop: '1px solid #F5F2ED' }} />

                            {/* Confirm delete inline row */}
                            {isConfirmingDelete ? (
                              <div
                                className="px-3 py-2.5 flex items-center gap-2"
                                style={{ background: '#FEF2F2' }}
                              >
                                <div className="flex-1 min-w-0">
                                  <div className="text-[10px] font-bold" style={{ color: '#DC2626', ...poppins }}>{strings.confirmDelete}</div>
                                  <div className="text-[9px]" style={{ color: '#EF4444', ...inter }}>{strings.confirmDeleteDesc}</div>
                                </div>
                                <div
                                  className="ky-tap-link rounded-[8px] px-2.5 py-1 text-[9px] font-bold"
                                  style={{ background: '#F5F5F5', color: 'var(--text-mid)', ...poppins }}
                                  onClick={() => setConfirmDeleteKey(null)}
                                >
                                  {strings.cancelDelete}
                                </div>
                                <div
                                  className="ky-tap-link rounded-[8px] px-2.5 py-1 text-[9px] font-bold text-white"
                                  style={{ background: '#DC2626', ...poppins }}
                                  onClick={() => {
                                    setDeletedKeys(prev => [...prev, method.key]);
                                    setConfirmDeleteKey(null);
                                    setExpandedKey(null);
                                  }}
                                >
                                  {strings.yesDelete}
                                </div>
                              </div>
                            ) : (
                              /* Actions row */
                              <div className="flex">
                                {!method.isDefault && (
                                  <>
                                    <div
                                      className="ky-tap-link flex-1 py-2 text-center text-[10px] font-bold"
                                      style={{ color: method.accentColor, ...poppins }}
                                    >
                                      {strings.setDefault}
                                    </div>
                                    <div style={{ width: '1px', background: '#F0EDE7' }} />
                                  </>
                                )}
                                <div
                                  className="ky-tap-link flex-1 py-2 text-center text-[10px] font-bold"
                                  style={{ color: method.isDefault ? 'var(--text-hint)' : '#EF4444', ...poppins }}
                                  onClick={() => !method.isDefault && setConfirmDeleteKey(method.key)}
                                >
                                  🗑 {strings.delete}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Info banner */}
                <div
                  className="rounded-[13px] p-3 flex items-start gap-2 mb-2"
                  style={{ background: 'rgba(26,122,59,0.06)', border: '1px solid rgba(26,122,59,0.15)' }}
                >
                  <div className="text-[12px]">ℹ️</div>
                  <div className="text-[9px] leading-relaxed" style={{ color: 'var(--text-mid)', ...inter }}>
                    {strings.requiresAtLeastOne}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Add new */}
          <div className="px-4 pb-2">
            <div
              className="ky-tap-cta-primary w-full rounded-[14px] py-3 text-[12px] font-bold text-center"
              style={{ background: 'linear-gradient(135deg, var(--green), var(--green-light))', color: 'white', boxShadow: '0 4px 16px rgba(26,122,59,0.3)' }}
            >
              {strings.addNew}
            </div>
          </div>

          <OwnerBottomNav activeTab="profile" />

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
