// src/__tests__/Home.test.tsx
import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';

// Mock all needed components
jest.mock('@/components/sections/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero">Hero Section</div>;
  };
});

jest.mock('@/components/sections/LocationInfo', () => {
  return function MockLocationInfo() {
    return <div data-testid="location-info">Location Info Section</div>;
  };
});

jest.mock('@/components/sections/Competitions', () => {
  return function MockCompetitions() {
    return <div data-testid="competitions">Competitions Section</div>;
  };
});

jest.mock('@/components/common/RotatingQuote', () => {
  return function MockRotatingQuote() {
    return <div data-testid="rotating-quote">Quote Section</div>;
  };
});

// Mock lucide-react to prevent ESM issues
jest.mock('lucide-react', () => ({
  Crown: () => <div data-testid="crown-icon">Crown</div>,
  Trophy: () => <div data-testid="trophy-icon">Trophy</div>,
  Clock: () => <div data-testid="clock-icon">Clock</div>,
  MapPin: () => <div data-testid="map-pin-icon">MapPin</div>,
  Globe: () => <div data-testid="globe-icon">Globe</div>
}));

// Import the page after all mocks are set up
const Home = require('@/app/page').default;

describe('Home Page', () => {
  it('renders all main sections', () => {
    render(<Home />);

    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('location-info')).toBeInTheDocument();
    expect(screen.getByTestId('competitions')).toBeInTheDocument();
  });

  it('has correct layout structure', () => {
    const { container } = render(<Home />);

    // Check if main tag exists
    expect(container.querySelector('main')).toBeInTheDocument();

    // Check if the layout container exists
    expect(container.querySelector('.max-w-7xl')).toBeInTheDocument();
  });

  it('maintains correct section order', () => {
    render(<Home />);
    const content = screen.getByRole('main').innerHTML;

    // Check section order using index positions
    const heroIndex = content.indexOf('data-testid="hero"');
    const locationIndex = content.indexOf('data-testid="location-info"');
    const competitionsIndex = content.indexOf('data-testid="competitions"');

    expect(heroIndex).toBeLessThan(locationIndex);
    expect(locationIndex).toBeLessThan(competitionsIndex);
  });
});