import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';

describe('Card', () => {
  it("Renders a person's data", () => {
    const personMock = {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    };

    render(<Card {...personMock} />);

    screen.debug();

    expect(screen.getByText('Bertie Yates')).toBeInTheDocument();
    expect(screen.getByText('29')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    const $image = document.querySelector('img');
    expect($image.src).toContain('.jpg');
  });
});
