import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TourList from '../TourList';

const toursDataMock = [
  {
    id: 1,
    name: 'Best of Paris in 7 Days Tour',
    info:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    image:
      'https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg',
    price: 1.995,
  },
  {
    id: 2,
    name: 'Best of Ireland in 14 Days Tour',
    info:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    image:
      'https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg',
    price: 3.895,
  },
];

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => jest.clearAllMocks());

describe('TourList', () => {
  it('Renders the expected amount of items', async () => {
    const responseMock = {
      ok: true,
      json: jest.fn().mockImplementationOnce(() => Promise.resolve(toursDataMock)),
    };
    global.fetch.mockImplementationOnce(() => Promise.resolve(responseMock));

    render(<TourList />);

    screen.debug();

    expect(screen.getByRole('heading', { name: 'Loading...' })).toBeInTheDocument();

    const $items = await screen.findAllByRole('article');

    expect($items).toHaveLength(2);
  });

  it('Allows to remove one or more items from the list', async () => {
    const responseMock = {
      ok: true,
      json: jest.fn().mockImplementationOnce(() => Promise.resolve(toursDataMock)),
    };
    global.fetch.mockImplementationOnce(() => Promise.resolve(responseMock));

    render(<TourList />);

    const $removeItemBtns = await screen.findAllByRole('button', { name: 'Not Interested' });

    expect(screen.getAllByRole('article')).toHaveLength(2);

    userEvent.click($removeItemBtns[0]);

    expect(screen.getAllByRole('article')).toHaveLength(1);

    userEvent.click($removeItemBtns[1]);

    expect(screen.queryAllByRole('article')).toHaveLength(0);
  });

  it('Allows to re-fetch items', async () => {
    const responseMock = {
      ok: true,
      json: jest.fn().mockImplementation(() => Promise.resolve(toursDataMock)),
    };
    global.fetch.mockImplementation(() => Promise.resolve(responseMock));

    render(<TourList />);

    const $removeItemBtns = await screen.findAllByRole('button', { name: 'Not Interested' });

    userEvent.click($removeItemBtns[0]);
    userEvent.click($removeItemBtns[1]);

    const $refreshBtn = screen.getByRole('button', { name: 'Refresh' });

    userEvent.click($refreshBtn);

    expect(screen.getByRole('heading', { name: 'Loading...' })).toBeInTheDocument();
    expect(await screen.findAllByRole('article')).toHaveLength(2);
  });

  it('Notifies user of an error if fetching fails', async () => {
    const responseMock = {
      ok: false,
    };
    global.fetch.mockImplementation(() => Promise.resolve(responseMock));

    render(<TourList />);

    expect(screen.getByRole('heading', { name: 'Loading...' })).toBeInTheDocument();
    expect(
      await screen.findByRole('heading', { name: 'Oops! Something went wrong! Please try again.' })
    ).toBeInTheDocument();
  });
});
