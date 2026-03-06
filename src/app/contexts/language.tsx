import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export type LanguageOption = 'english' | 'hindi' | 'tamil' | 'marathi';

interface LanguageContextValue {
  language: LanguageOption;
  setLanguage: (value: LanguageOption) => void;
  selectText: (options: Partial<Record<LanguageOption, string>>) => string;
}

const DEFAULT_LANGUAGE: LanguageOption = 'english';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageOption>(DEFAULT_LANGUAGE);

  const selectText = useCallback(
    (options: Partial<Record<LanguageOption, string>>) => {
      return (
        options[language] ??
        options.english ??
        options.hindi ??
        options.tamil ??
        options.marathi ??
        ''
      );
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, selectText }),
    [language, selectText]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
