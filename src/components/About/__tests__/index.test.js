import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';

const { asFragment } = render(<About />);

afterEach(cleanup);

describe('About component', () => {
  it('renders', () => {
    render(<About />);
  });

  it('matches snapshot DOM node structure', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
