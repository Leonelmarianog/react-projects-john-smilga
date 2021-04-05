import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import peopleData from '../../data/people';

describe('App', () => {
  it('Renders correctly', () => {
    render(<App />);

    screen.debug();

    expect(screen.getByRole('heading', { name: 'Our Reviews' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: `${peopleData[0].name}` })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: `${peopleData[0].name}` }).src).toContain('.jpg');
    expect(screen.getByRole('heading', { name: `${peopleData[0].name}` })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: `${peopleData[0].job}` })).toBeInTheDocument();
    expect(screen.getByText(peopleData[0].bio)).toBeInTheDocument();
    expect(screen.getByTestId('next-btn')).toBeInTheDocument();
    expect(screen.getByTestId('previous-btn')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Surprise Me' })).toBeInTheDocument();
  });

  it('Has working pagination', () => {
    render(<App />);

    const $nextBtn = screen.getByTestId('next-btn');
    const $previousBtn = screen.getByTestId('previous-btn');

    expect(screen.getByRole('img', { name: `${peopleData[0].name}` })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: `${peopleData[0].name}` }).src).toContain('.jpg');
    expect(screen.getByRole('heading', { name: `${peopleData[0].name}` })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: `${peopleData[0].job}` })).toBeInTheDocument();
    expect(screen.getByText(peopleData[0].bio)).toBeInTheDocument();

    userEvent.click($previousBtn);

    expect(
      screen.getByRole('img', { name: `${peopleData[peopleData.length - 1].name}` })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: `${peopleData[peopleData.length - 1].name}` }).src
    ).toContain('.jpg');
    expect(
      screen.getByRole('heading', { name: `${peopleData[peopleData.length - 1].name}` })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: `${peopleData[peopleData.length - 1].job}` })
    ).toBeInTheDocument();
    expect(screen.getByText(peopleData[peopleData.length - 1].bio)).toBeInTheDocument();

    userEvent.click($nextBtn);

    expect(screen.getByRole('img', { name: `${peopleData[0].name}` })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: `${peopleData[0].name}` }).src).toContain('.jpg');
    expect(screen.getByRole('heading', { name: `${peopleData[0].name}` })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: `${peopleData[0].job}` })).toBeInTheDocument();
    expect(screen.getByText(peopleData[0].bio)).toBeInTheDocument();

    let index = 1;

    while (index !== peopleData.length) {
      userEvent.click($nextBtn);

      expect(screen.getByRole('img', { name: `${peopleData[index].name}` })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: `${peopleData[index].name}` }).src).toContain('.jpg');
      expect(
        screen.getByRole('heading', { name: `${peopleData[index].name}` })
      ).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: `${peopleData[index].job}` })).toBeInTheDocument();
      expect(screen.getByText(peopleData[index].bio)).toBeInTheDocument();

      index += 1;
    }

    userEvent.click($nextBtn);

    expect(screen.getByRole('img', { name: `${peopleData[0].name}` })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: `${peopleData[0].name}` }).src).toContain('.jpg');
    expect(screen.getByRole('heading', { name: `${peopleData[0].name}` })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: `${peopleData[0].job}` })).toBeInTheDocument();
    expect(screen.getByText(peopleData[0].bio)).toBeInTheDocument();

    userEvent.click($previousBtn);

    expect(
      screen.getByRole('img', { name: `${peopleData[peopleData.length - 1].name}` })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: `${peopleData[peopleData.length - 1].name}` }).src
    ).toContain('.jpg');
    expect(
      screen.getByRole('heading', { name: `${peopleData[peopleData.length - 1].name}` })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: `${peopleData[peopleData.length - 1].job}` })
    ).toBeInTheDocument();
    expect(screen.getByText(peopleData[peopleData.length - 1].bio)).toBeInTheDocument();
  });

  it('Has a working randomizer button', () => {
    render(<App />);

    const $randomPersonButton = screen.getByRole('button', { name: 'Surprise Me' });

    for (let i = 0; i < 10; i += 1) {
      let $image = screen.getByTestId('image').src;
      let $name = screen.getByTestId('name').textContent;
      let $job = screen.getByTestId('job').textContent;
      let $bio = screen.getByTestId('bio').textContent;

      userEvent.click($randomPersonButton);

      let $newImage = screen.getByTestId('image').src;
      let $newName = screen.getByTestId('name').textContent;
      let $newJob = screen.getByTestId('job').textContent;
      let $newBio = screen.getByTestId('bio').textContent;

      expect($newImage).not.toBe($image);
      expect($newName).not.toBe($name);
      expect($newJob).not.toBe($job);
      expect($newBio).not.toBe($bio);
    }
  });
});
