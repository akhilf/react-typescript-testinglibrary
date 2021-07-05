import React from 'react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';
import Home from './Home';
describe('Home', () => {
  it('should be able to verify the Home page rendered correctly', () => {
    // You should be able to show that you can verify Home rendered correctly
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home-page')).toBeInTheDocument();
  });
  it('header renders with correct text', () => {
    const { getByTestId } = render(<Home />);
    const headerEl = getByTestId('header');
    expect(headerEl.textContent).toBe("Welcome!");
  });
});
