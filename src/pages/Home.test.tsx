import React from 'react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';
import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
    const div = document.createElement("div");
    ReactDOM.render(<Home></Home>, div);
});
