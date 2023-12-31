export type Movie = {
  id: number;
  title: string;
  description: string;
  rating: number;
  duration: string;
  genres: string[];
  releasedDate: string;
  trailerLink: string;
  image: string;
  isOnWatchlist?: boolean;
};
