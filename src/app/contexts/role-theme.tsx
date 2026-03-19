import { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'farmer' | 'owner';

interface RoleTheme {
  gradient: string;
  gradientCss: string;
  shadow: string;
  accentColor: string;
  accentPale: string;
  buttonGradient: string;
  buttonShadow: string;
}

interface RoleThemeContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  theme: RoleTheme;
}

const RoleThemeContext = createContext<RoleThemeContextType | undefined>(undefined);

const themes: Record<UserRole, RoleTheme> = {
  farmer: {
    gradient: 'var(--gradient-green)',
    gradientCss: 'linear-gradient(135deg, #1F7A4C 0%, #2DAA6A 100%)',
    shadow: 'var(--card-shadow-green)',
    accentColor: 'var(--green-primary)',
    accentPale: 'var(--green-pale)',
    buttonGradient: 'var(--gradient-green)',
    buttonShadow: 'var(--card-shadow-green)'
  },
  owner: {
    gradient: 'var(--gradient-green)',
    gradientCss: 'linear-gradient(135deg, #1F7A4C 0%, #2DAA6A 100%)',
    shadow: 'var(--card-shadow-green)',
    accentColor: 'var(--saffron)',
    accentPale: 'var(--saffron-pale)',
    buttonGradient: 'var(--gradient-saffron)',
    buttonShadow: 'var(--card-shadow-saffron)'
  }
};

export function RoleThemeProvider({ children, initialRole = 'farmer' }: { children: ReactNode; initialRole?: UserRole }) {
  const [role, setRole] = useState<UserRole>(initialRole);

  return (
    <RoleThemeContext.Provider value={{ role, setRole, theme: themes[role] }}>
      {children}
    </RoleThemeContext.Provider>
  );
}

export function useRoleTheme() {
  const context = useContext(RoleThemeContext);
  if (!context) {
    throw new Error('useRoleTheme must be used within RoleThemeProvider');
  }
  return context;
}

// Helper hook for getting theme-aware styles
export function useThemedStyles() {
  const { theme } = useRoleTheme();
  
  return {
    headerStyle: {
      background: theme.gradient,
      boxShadow: theme.shadow,
      backgroundImage: `
        ${theme.gradient},
        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      `,
      backgroundBlendMode: 'overlay'
    },
    buttonStyle: {
      background: theme.buttonGradient,
      boxShadow: theme.buttonShadow
    },
    accentColor: theme.accentColor,
    accentPale: theme.accentPale
  };
}
