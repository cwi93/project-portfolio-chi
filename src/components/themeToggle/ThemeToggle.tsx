import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ThemeToggleContainer, ToggleButton, IconWrapper } from './ThemeToggle.styled';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeToggleContainer isDark={theme.isDark}>
      <ToggleButton 
        onClick={toggleTheme} 
        isDark={theme.isDark}
        aria-label={`Switch to ${theme.isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme.isDark ? 'light' : 'dark'} mode`}
      >
        <IconWrapper>
          {theme.isDark ? (
            // Sun icon
            <span role="img" aria-label="sun">☀️</span>
          ) : (
            // Moon icon
            <span role="img" aria-label="moon">🌙</span>
          )}
        </IconWrapper>
      </ToggleButton>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;
