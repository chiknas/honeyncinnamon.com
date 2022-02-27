export interface CarouselItemData {
  img: string;
  title: string;
  onClick?: () => void;
}

export interface CarouselState {
  page: number;
  pageSize: number;
  totalPages: number;
}
