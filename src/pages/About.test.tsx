import React from 'react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { render, fireEvent} from '../../test/test-utils';
import About from './About';
describe('About', () => {
  it('should be able to verify the About page rendered correctly', () => {
    // You should be able to verify the About page rendered correctly.
    const { getByTestId } = render(<About />);
    expect(getByTestId('about-us-page')).toBeInTheDocument();
  });
  it('header renders with correct text', () => {
    const { getByTestId } = render(<About />);
    const headerEl = getByTestId('header');
    expect(headerEl.textContent).toBe("About Page");
  });
  it('Counter initially start with text of 0', () => {
    const { getByTestId } = render(<About />);
    const counterEl = getByTestId('counter');
    expect(counterEl.textContent).toBe("0");
  });
  it('Increment button renders with Increment', () => {
    const { getByTestId } = render(<About />);
    const incrementEl = getByTestId('increment');
    expect(incrementEl.textContent).toBe("Increment");
  });
  it('clicks button and fires increment counter', () => {
    // You should be able to click the increment button and verify the count.
    const { getByTestId } = render(<About />);
    const btnIncrement = getByTestId('increment');
    const counterEl = getByTestId('counter');
    expect(counterEl.textContent).toBe("0");
    fireEvent.click(btnIncrement);
    expect(counterEl.textContent).toBe("1");
  });
});
