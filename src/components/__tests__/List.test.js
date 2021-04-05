import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import List from '../List';

const peopleDataMock = [
  {
    id: 1,
    name: 'Bertie Yates',
    age: 29,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    age: 32,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
];

describe('List', () => {
  it('Renders the amount of birthdays', () => {
    render(<List peopleData={peopleDataMock} />);

    screen.debug();

    expect(screen.getByRole('heading', { name: /2 birthdays/i })).toBeInTheDocument();
  });

  it("Renders people's data", () => {
    render(<List peopleData={peopleDataMock} />);

    screen.debug();

    expect(screen.getByRole('img', { name: 'Bertie Yates' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Bertie Yates' }).src).toContain('.jpg');
    expect(screen.getByText('Bertie Yates')).toBeInTheDocument();
    expect(screen.getByText('29')).toBeInTheDocument();

    expect(screen.getByRole('img', { name: 'Hester Hogan' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Hester Hogan' }).src).toContain('.jpg');
    expect(screen.getByText('Hester Hogan')).toBeInTheDocument();
    expect(screen.getByText('32')).toBeInTheDocument();
  });

  it('Removes all birthdays', () => {
    render(<List peopleData={peopleDataMock} />);

    screen.debug();

    let $birthdays = screen.getAllByRole('listitem');

    expect($birthdays).toHaveLength(2);

    userEvent.click(screen.getByRole('button', { name: /Delete all/i }));

    screen.debug();

    $birthdays = screen.queryAllByRole('img');

    expect($birthdays).toHaveLength(0);
  });
});
