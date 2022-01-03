/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemNavbar from './ItemNavbar';

it('should render Header', () => {
  const { getByText } = render(<ItemNavbar href="/" text="Home"/>);
  expect(getByText('Home')).toBeInTheDocument();
});