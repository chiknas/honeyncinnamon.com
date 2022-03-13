export interface GalleryItemData {
  img: string;
  title: string;
  onClick?: () => void;
}

export interface GalleryGroupData {
  title?: string;
  items: GalleryItemData[];
}
