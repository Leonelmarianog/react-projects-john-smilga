import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Tour from '../Tour';

const tourDataMock = {
  id: 1,
  name: 'Best of Paris in 7 Days Tour',
  info:
    "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  image: 'https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg',
  price: 1.995,
};

describe('Tour', () => {
  it('Renders correctly', () => {
    render(<Tour {...tourDataMock} removeTourCallback={() => {}} />);

    expect(screen.getByRole('img', { name: tourDataMock.name })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: tourDataMock.name }).src).toContain('.jpg');
    expect(screen.getByRole('heading', { name: tourDataMock.name })).toBeInTheDocument();
    expect(screen.getByText(`$${tourDataMock.price}`)).toBeInTheDocument();
    expect(screen.getByText(`${tourDataMock.info.substring(0, 200)}...`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Read more' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Not Interested' })).toBeInTheDocument();

    screen.debug();
  });

  it('Truncates info text', () => {
    render(<Tour {...tourDataMock} removeTourCallback={() => {}} />);

    expect(screen.getByText(`${tourDataMock.info.substring(0, 200)}...`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Read more' })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Read more' }));

    expect(screen.getByText(`${tourDataMock.info}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Read less' })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Read less' }));

    expect(screen.getByText(`${tourDataMock.info.substring(0, 200)}...`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Read more' })).toBeInTheDocument();
  });

  it('Invokes callback to remove itself', () => {
    const removeTourCallbackMock = jest.fn();

    render(<Tour {...tourDataMock} removeTourCallback={removeTourCallbackMock} />);

    userEvent.click(screen.getByRole('button', { name: 'Not Interested' }));

    expect(removeTourCallbackMock).toHaveBeenCalledTimes(1);
    expect(removeTourCallbackMock).toHaveBeenCalledWith(tourDataMock.id);
  });
});
