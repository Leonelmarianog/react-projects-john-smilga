import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Card from '../Card';

const personDataMock = {
  id: 1,
  name: 'susan smith',
  job: 'web developer',
  image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  bio:
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
};

const nextPersonCallbackMock = jest.fn();
const previousPersonCallbackMock = jest.fn();
const randomPersonCallbackMock = jest.fn();

describe('Card', () => {
  it("Renders a person's information correctly", () => {
    render(<Card {...personDataMock} />);

    screen.debug();

    expect(screen.getByRole('img', { name: 'susan smith' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'susan smith' }).src).toContain('.jpg');
    expect(screen.getByRole('heading', { name: 'susan smith' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'web developer' })).toBeInTheDocument();
    expect(screen.getByText(personDataMock.bio)).toBeInTheDocument();
  });

  it('calls the onClick callback handlers', () => {
    render(
      <Card
        {...personDataMock}
        nextPersonCallback={nextPersonCallbackMock}
        previousPersonCallback={previousPersonCallbackMock}
        randomPersonCallback={randomPersonCallbackMock}
      />
    );

    expect(screen.getByTestId('next-btn')).toBeInTheDocument();
    expect(screen.getByTestId('previous-btn')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Surprise Me' })).toBeInTheDocument();

    userEvent.click(screen.getByTestId('next-btn'));
    userEvent.click(screen.getByTestId('previous-btn'));
    userEvent.click(screen.getByRole('button', { name: 'Surprise Me' }));

    expect(nextPersonCallbackMock).toHaveBeenCalledTimes(1);
    expect(previousPersonCallbackMock).toHaveBeenCalledTimes(1);
    expect(randomPersonCallbackMock).toHaveBeenCalledTimes(1);
  });
});
