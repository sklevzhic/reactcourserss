import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

describe('card-item', () => {
  it('should render header', () => {
    const wrapper = render(<Header />, { wrapper: BrowserRouter });
    console.log(wrapper);
  });
});
