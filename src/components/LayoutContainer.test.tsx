import React from 'react';
import { render, screen } from '../../test/test-utils';
import userEvent from '@testing-library/user-event'
import LayoutContainer from './LayoutContainer';
describe('Layout page', () => {
  it('can browse to the about page', async () => {
    // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
    const { getByTestId } = render(<LayoutContainer />);
    expect(getByTestId('layout-page')).toBeInTheDocument();

    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument()
    const newRoute = screen.getByText(/about/i);
    expect(newRoute).toBeInTheDocument();
  });
});