// src/__tests__/ChessPattern.test.tsx
import { render } from '@testing-library/react';
import { ChessPatternAnimated } from '@/components/common/ChessPattern';

describe('ChessPattern Component', () => {
  it('renders chess pattern grid', () => {
    const { container } = render(<ChessPatternAnimated />);

    // Check if grid is rendered
    const gridCells = container.getElementsByClassName('aspect-square');
    expect(gridCells.length).toBe(64); // 8x8 chess board
  });

  it('has correct styling classes', () => {
    const { container } = render(<ChessPatternAnimated />);

    // Check main container classes
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('fixed', 'inset-0', 'z-0', 'pointer-events-none');
  });

  it('applies animation class', () => {
    const { container } = render(<ChessPatternAnimated />);

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('animate-chess-fade');
  });
});