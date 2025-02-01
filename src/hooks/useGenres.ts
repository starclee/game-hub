import genres from "../Data/genres.ts";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () => ({ data: genres, error: null, loading: false });

export default useGenres;
