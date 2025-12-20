export interface IBrand {
  id: number;
  location: Location;
  name: string;
  desc: string;
  imgUrl: string;
  links: ILink[];
}

interface ILink {
  title: string;
  url: string;
}

type Location =
  | 'europe'
  | 'japan'
  | 'korea'
  | 'usa'
  | 'china'
  | 'russia'
  | 'asia'
  | 'others';
