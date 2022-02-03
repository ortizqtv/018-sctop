import { render, screen } from '@testing-library/react';
import H1 from '../H1';

describe('H1', () => {
  test('expect a H1 component to render', () => {
    render(<H1>h1</H1>);

    const H1Component = screen.getByText('h1');

    expect(H1Component).toBeInTheDocument();
  });
});
