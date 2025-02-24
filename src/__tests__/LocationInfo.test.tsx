// src/__tests__/LocationInfo.test.tsx
import { render, screen } from '@testing-library/react';
import LocationInfo from '@/components/sections/LocationInfo';

// Mock React useState
const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn((init) => [init, mockSetState])
}));

// Mock components and constants
jest.mock('lucide-react', () => ({
  MapPin: () => <div data-testid="map-pin">MapPin</div>,
  Globe: () => <div data-testid="globe">Globe</div>,
  Clock: () => <div data-testid="clock">Clock</div>,
}));

jest.mock('@/utils/constants', () => ({
  CLUB_INFO: {
    meetingTime: {
      day: "Monday",
      time: "7:30pm"
    },
    address: {
      venue: "St. Neots Conservative Club",
      street: "12 New St",
      city: "St. Neots",
      postcode: "PE19 1AE"
    }
  }
}));

describe('LocationInfo Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<LocationInfo />);
    expect(container).toBeInTheDocument();
  });

  it('renders map view by default', () => {
    render(<LocationInfo />);
    expect(screen.getByTitle('location')).toBeInTheDocument();
  });
});