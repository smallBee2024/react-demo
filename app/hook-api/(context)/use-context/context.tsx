import { createContext, useContext } from 'react';

export type ThemeType = 'light' | 'dark';

export interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  count: number;
  setCount: (count: number) => void;
}

// 1. 创建 Context
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  count: 0,
  setCount: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
} & ThemeContextType;

// 2. 创建 Provider 组件
export const ThemeProvider = ({
  children,
  theme,
  toggleTheme,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. 自定义 Hook（可选，提升可读性）
export const useTheme = () => useContext(ThemeContext);