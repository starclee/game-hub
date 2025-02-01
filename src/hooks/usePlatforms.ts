import platforms from "../Data/platforms.ts";

// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => ({ data: platforms, error: null, isLoading: false });

export default usePlatforms;
