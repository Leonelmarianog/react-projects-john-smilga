import React from 'react';
import { screen, render, within, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Card from '../Card';

describe('Card', () => {
  afterEach(() => global.localStorage.clear());

  it('Allows to add new items', () => {
    render(<Card />);

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'milk');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'fish');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('Alerts users when a item is added', async () => {
    render(<Card />);

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByRole('heading', { level: 1, name: 'Item Added' })).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByRole('heading', { level: 1, name: 'Item Added' }), {
      timeout: 5000,
    });
  });

  it('Allows to edit an specific item', () => {
    render(<Card />);

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'milk');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'fish');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('eggs')).toBeInTheDocument();
    expect(screen.getByText('milk')).toBeInTheDocument();
    expect(screen.getByText('fish')).toBeInTheDocument();

    const $items = document.querySelectorAll('li');

    userEvent.click(within($items[1]).getByRole('button', { name: 'edit item' }));
    userEvent.clear(screen.getByPlaceholderText('e.g. eggs'));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'cheese');
    userEvent.click(screen.getByRole('button', { name: 'Edit' }));

    expect(screen.getByText('eggs')).toBeInTheDocument();
    expect(screen.getByText('cheese')).toBeInTheDocument();
    expect(screen.getByText('fish')).toBeInTheDocument();
    expect(screen.queryByText('milk')).not.toBeInTheDocument();
  });

  it('Alerts users when an item is modified', async () => {
    render(<Card />);

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.click(screen.getByRole('button', { name: 'edit item' }));
    userEvent.clear(screen.getByPlaceholderText('e.g. eggs'));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'cheese');
    userEvent.click(screen.getByRole('button', { name: 'Edit' }));

    expect(screen.getByRole('heading', { level: 1, name: 'Item Modified' })).toBeInTheDocument();
    await waitForElementToBeRemoved(
      screen.getByRole('heading', { level: 1, name: 'Item Modified' }),
      {
        timeout: 5000,
      }
    );
  });

  it('Allows to delete a specific item', () => {
    render(<Card />);

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'milk');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'fish');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('eggs')).toBeInTheDocument();
    expect(screen.getByText('milk')).toBeInTheDocument();
    expect(screen.getByText('fish')).toBeInTheDocument();

    const $items = document.querySelectorAll('li');

    userEvent.click(within($items[1]).getByRole('button', { name: 'delete item' }));

    expect(screen.getByText('eggs')).toBeInTheDocument();
    expect(screen.getByText('fish')).toBeInTheDocument();
    expect(screen.queryByText('milk')).not.toBeInTheDocument();
  });

  it('Alerts users when an item is deleted', async () => {
    render(<Card />);

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.click(screen.getByRole('button', { name: 'delete item' }));

    expect(screen.getByRole('heading', { level: 1, name: 'Item Removed' })).toBeInTheDocument();
    await waitForElementToBeRemoved(
      screen.getByRole('heading', { level: 1, name: 'Item Removed' }),
      {
        timeout: 5000,
      }
    );
  });

  it('Allows to clear the list', () => {
    render(<Card />);

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'milk');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'fish');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('eggs')).toBeInTheDocument();
    expect(screen.getByText('milk')).toBeInTheDocument();
    expect(screen.getByText('fish')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Clear All' }));

    expect(screen.queryByText('eggs')).not.toBeInTheDocument();
    expect(screen.queryByText('milk')).not.toBeInTheDocument();
    expect(screen.queryByText('fish')).not.toBeInTheDocument();
  });

  it('Alerts users when the list is cleared', async () => {
    render(<Card />);

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.click(screen.getByRole('button', { name: 'Clear All' }));

    expect(screen.getByRole('heading', { level: 1, name: 'List Cleared' })).toBeInTheDocument();
    await waitForElementToBeRemoved(
      screen.getByRole('heading', { level: 1, name: 'List Cleared' }),
      {
        timeout: 5000,
      }
    );
  });

  it('Alerts the user when there is no more space for items', () => {
    render(<Card />);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    setItemSpy.mockImplementationOnce(() => {
      throw new Error();
    });

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(
      screen.getByRole('heading', { level: 1, name: 'No space left, delete some items' })
    ).toBeInTheDocument();
  });

  it('Clears the input field after adding, editing or removing items', () => {
    render(<Card />);

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    expect(screen.getByPlaceholderText('e.g. eggs')).toHaveValue('');

    userEvent.click(screen.getByRole('button', { name: 'edit item' }));
    userEvent.clear(screen.getByPlaceholderText('e.g. eggs'));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'cheese');
    userEvent.click(screen.getByRole('button', { name: 'Edit' }));
    expect(screen.getByPlaceholderText('e.g. eggs')).toHaveValue('');

    userEvent.click(screen.getByRole('button', { name: 'delete item' }));
    expect(screen.getByPlaceholderText('e.g. eggs')).toHaveValue('');

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.click(screen.getByRole('button', { name: 'Clear All' }));
    expect(screen.getByPlaceholderText('e.g. eggs')).toHaveValue('');
  });
});
