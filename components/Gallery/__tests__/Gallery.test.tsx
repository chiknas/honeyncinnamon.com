import { render, screen, userEvent } from 'testing/test-utils';
import { Gallery } from '../Gallery';
import { galleryMockData } from '../mockData';
import { GalleryGroupData } from '../types';

test('AAU, I can see the gallery split into groups', () => {
  render(<Gallery data={galleryMockData} />);

  expect(screen.getByText('Group 1')).toBeInTheDocument();
  expect(screen.getByText('Group 2')).toBeInTheDocument();
});

test('AAU, I can see the items in the gallery', () => {
  render(<Gallery data={galleryMockData} />);

  for (let i = 1; i < 19; i++) {
    expect(
      screen.getByRole('img', { name: `Makaronia me kima ${i}` })
    ).toBeInTheDocument();
    expect(screen.getByText(`Makaronia me kima ${i}`)).toBeInTheDocument();
  }
});

test('AAU, I can click elements with an onclick function attached to them.', () => {
  const alertMock = jest.spyOn(window, 'alert').mockImplementation();
  const galleryClickData: GalleryGroupData[] = [
    {
      title: 'Group Title',
      items: [
        {
          title: 'Non clickable item',
          img: '/path/test.jpg',
        },
        {
          title: 'Clickable item',
          img: '/path/test.jpg',
          onClick: () => {
            alert('I was clicked');
          },
        },
      ],
    },
  ];
  render(<Gallery data={galleryClickData} />);

  const nonClickableItem = screen.getByText('Non clickable item');
  const clickableItem = screen.getByText('Clickable item');

  // clicking the item with no function on it doesnt do anything
  userEvent.click(nonClickableItem);
  expect(alertMock).toHaveBeenCalledTimes(0);

  // but clicking the item with the function will call the alert
  userEvent.click(clickableItem);
  expect(alertMock).toHaveBeenCalledTimes(1);
});
