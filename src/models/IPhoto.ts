export interface IPhoto {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  views: number;
  likes?: number;
  comments?: number;
  isCopyrightHolder?: boolean | undefined;
  isShowDescription?: boolean | undefined;
}
