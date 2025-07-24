// src/__tests__/Footer.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';

describe('Footer Component', () => {
  it('renders copyright information', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© St Neots Chess Club ${currentYear}`))).toBeInTheDocument();
  });

  it('renders MIT License text', () => {
    render(<Footer />);
    expect(screen.getByText(/Released under the MIT License/)).toBeInTheDocument();
  });
});