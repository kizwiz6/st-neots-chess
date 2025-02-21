// src/__tests__/RotatingQuote.test.tsx
import { render, screen } from '@testing-library/react';
import RotatingQuote from '@/components/common/RotatingQuote';
import { ReactNode } from 'react';

// Mock lucide-react
jest.mock('lucide-react', () => ({
  Quote: () => <div data-testid="quote-icon">Quote Icon</div>
}));

// Mock framer-motion with types
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: ReactNode; [key: string]: any }) => (
      <div {...props}>{children}</div>
    )
  },
  AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>
}));

// Mock the quotes data
jest.mock('@/data/quotes', () => ({
  chessQuotes: [{
    text: "Test quote",
    author: "Test Author",
    category: "strategy"
  }]
}));

describe('RotatingQuote Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<RotatingQuote />);
    expect(container).toBeInTheDocument();
  });

  it('displays quote content', () => {
    render(<RotatingQuote />);
    expect(screen.getByText(/Test quote/)).toBeInTheDocument();
    expect(screen.getByText(/Test Author/)).toBeInTheDocument();
  });

  it('has the quote icon', () => {
    render(<RotatingQuote />);
    expect(screen.getByTestId('quote-icon')).toBeInTheDocument();
  });
});