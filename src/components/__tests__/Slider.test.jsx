import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Slider from '../Slider';

const peopleDataMock = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
];

describe('Slider', () => {
  it('Renders correctly', () => {
    const currentPersonIndex = 0;

    render(<Slider people={peopleDataMock} index={currentPersonIndex} />);

    for (let i = 0; i < peopleDataMock.length; i += 1) {
      expect(screen.getByRole('img', { name: peopleDataMock[i].name })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: peopleDataMock[i].name }).src).toContain('.jpg');
      expect(
        screen.getByRole('heading', { level: 1, name: peopleDataMock[i].name })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { level: 2, name: peopleDataMock[i].title })
      ).toBeInTheDocument();
      expect(screen.getByText(new RegExp(peopleDataMock[i].quote))).toBeInTheDocument();
    }

    expect(screen.getByRole('button', { name: 'next' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'previous' })).toBeInTheDocument();
  });

  it('Shows only one slide at a time', () => {
    let currentPersonIndex = 0;

    const { rerender } = render(<Slider people={peopleDataMock} index={currentPersonIndex} />);

    for (let i = 0; i < peopleDataMock.length; i += 1) {
      expect(screen.getByRole('img', { name: peopleDataMock[i].name })).toBeVisible();
      expect(screen.getByRole('heading', { level: 1, name: peopleDataMock[i].name })).toBeVisible();
      expect(
        screen.getByRole('heading', { level: 2, name: peopleDataMock[i].title })
      ).toBeVisible();
      expect(screen.getByText(new RegExp(peopleDataMock[i].quote))).toBeVisible();

      for (let j = 0; j < peopleDataMock.length; j += 1) {
        if (j === currentPersonIndex) {
          continue;
        }

        expect(screen.getByRole('img', { name: peopleDataMock[j].name })).not.toBeVisible();
        expect(
          screen.getByRole('heading', { level: 1, name: peopleDataMock[j].name })
        ).not.toBeVisible();
        expect(
          screen.getByRole('heading', { level: 2, name: peopleDataMock[j].title })
        ).not.toBeVisible();
        expect(screen.getByText(new RegExp(peopleDataMock[j].quote))).not.toBeVisible();
      }

      currentPersonIndex += 1;

      rerender(<Slider people={peopleDataMock} index={currentPersonIndex} />);
    }
  });

  it('Calls onClick callback handlers', () => {
    const currentPersonIndex = 0;
    const setIndexCallbackMock = jest.fn();

    render(
      <Slider
        people={peopleDataMock}
        index={currentPersonIndex}
        setIndexCallback={setIndexCallbackMock}
      />
    );

    userEvent.click(screen.getByRole('button', { name: 'next' }));
    userEvent.click(screen.getByRole('button', { name: 'previous' }));

    expect(setIndexCallbackMock).toHaveBeenCalledTimes(2);
  });
});
