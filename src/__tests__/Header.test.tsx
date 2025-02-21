// src/__tests__/Header.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/layout/Header';
import { ReactNode } from 'react';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon">Menu</div>,
  X: () => <div data-testid="close-icon">Close</div>,
  Crown: () => <div data-testid="crown-icon">Crown</div>
}));

describe('Header Component', () => {
  it('renders navigation links', () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('shows mobile menu when burger icon is clicked', () => {
    render(<Header />);

    // Initially menu should be hidden
    expect(screen.queryByRole('navigation')).not.toHaveClass('md:hidden');

    // Click burger menu
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    // Menu should be visible
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('shows club name', () => {
    render(<Header />);
    expect(screen.getByText('St Neots Chess Club')).toBeInTheDocument();
  });

  it('includes crown icon', () => {
    render(<Header />);
    expect(screen.getByTestId('crown-icon')).toBeInTheDocument();
  });
});