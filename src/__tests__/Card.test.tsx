// src/__tests__/Card.test.tsx
import { render, screen } from '@testing-library/react';
import Card from '@/components/common/Card';

describe('Card Component', () => {
  it('renders title and content', () => {
    const title = "Test Title";
    const content = "Test Content";

    render(
      <Card title={title}>
        <p>{content}</p>
      </Card>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('renders with icon when provided', () => {
    const mockIcon = <span data-testid="mock-icon">Icon</span>;

    render(
      <Card title="Test" icon={mockIcon}>
        <p>Content</p>
      </Card>
    );

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-class';

    const { container } = render(
      <Card title="Test" className={customClass}>
        <p>Content</p>
      </Card>
    );

    expect(container.firstChild).toHaveClass(customClass);
  });
});