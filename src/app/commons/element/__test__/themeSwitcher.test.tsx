import { screen, render, fireEvent } from '@testing-library/react';
import ThemeSwitch from '../themeSwitcher';
import { useTheme } from 'next-themes';

// Mock useTheme hook
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('check darkmode theme', () => {
  test('check icon in light mode', () => {
    const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;
    mockUseTheme.mockReturnValue({
      theme: 'light',
      setTheme: jest.fn(),
      themes: [],
    });

    render(<ThemeSwitch bgColor="" />);

    const bsMoon = screen.getByTestId('bs-moon');
    expect(bsMoon).toBeInTheDocument();
  });
  test('check icon in dark mode', () => {
    const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;
    mockUseTheme.mockReturnValue({
      theme: 'dark',
      setTheme: jest.fn(),
      themes: [],
    });

    render(<ThemeSwitch bgColor="" />);

    const bsSun = screen.getByTestId('bs-sun');
    expect(bsSun).toBeInTheDocument();
  });
});
