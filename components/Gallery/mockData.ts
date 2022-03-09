import { GalleryGroupData } from './types';

export const galleryMockData: GalleryGroupData[] = Array.from(
  Array(2).keys()
).map((item, groupIndex) => ({
  title: `Group ${item + 1}`,
  items: Array.from(Array(9).keys()).map((t, itemIdex) => ({
    img: '/images/recipes/MakaroniaMeKima/makaronia_me_saki.jpg',
    title: `Makaronia me kima ${itemIdex + 1 + groupIndex * 9}`,
    onClick: () => {
      alert(itemIdex + 1 + groupIndex * 9);
    },
  })),
}));
