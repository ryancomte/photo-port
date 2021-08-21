import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Modal from '..';

const mockToggleModal = jest.fn();

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1,
};

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(
      <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
    );

    expect(asFragment()).toMatchSnapshot(); // Arrange the snapshot - declare variables
    // Assert the match
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );

    fireEvent.click(getByText('Close this modal'));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
