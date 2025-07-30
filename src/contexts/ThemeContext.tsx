import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Theme {
  isDark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    backgroundGradient: string;
    text: string;
    accent: string;
  };
}

const lightTheme: Theme = {
  isDark: false,
  colors: {
    primary: '#0a0a0a',
    secondary: '#ff0088',
    background: '#ffffff',
    backgroundGradient: 'linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(255, 0, 136, 1) 100%)',
    text: '#0c0f59',
    accent: '#333333',
  },
};

const darkTheme: Theme = {
  isDark: true,
  colors: {
    primary: '#240120',
    secondary: '#ff0088',
    background: '#240120',
    backgroundGradient: 'linear-gradient(150deg, rgba(36, 1, 32, 1) 0%, rgba(12, 15, 89, 0.98) 55%, rgba(255, 0, 136, 1) 100%)',
    text: '#ffffff',
    accent: '#0c0f59',
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
