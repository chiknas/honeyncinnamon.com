import { CarouselItemData } from './types';

export const carouselMockData: CarouselItemData[] = Array.from(
  Array(100).keys()
).map((item) => ({
  img: '/images/recipes/MakaroniaMeKima/makaronia_me_saki.jpg',
  title: `Makaronia me kima ${item}`,
  onClick: () => {
    alert(item);
  },
}));
