// src/__tests__/LocationInfo.test.tsx
import { render } from '@testing-library/react';
import LocationInfo from '@/components/sections/LocationInfo';

// Mock the components that might cause issues
jest.mock('lucide-react', () => ({
  MapPin: () => <div data-testid="map-pin">MapPin</div>,
  Globe: () => <div data-testid="globe">Globe</div>,
  Clock: () => <div data-testid="clock">Clock</div>,
}));

describe('LocationInfo Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<LocationInfo />);
    expect(container).toBeInTheDocument();
  });
});