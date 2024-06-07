import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useSearchMoviesQuery,
} from "./redux/services/movies";
import { useSelector } from "react-redux";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: popularMoviesData,
    error: popularMoviesError,
    isLoading: populareMoviesLoading,
  } = useGetPopularMoviesQuery();
  const {
    data: topRatedMoviesData,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesLoading,
  } = useGetTopRatedMoviesQuery();

  const {
    data: searchData,
    error: searchError,
    isLoading: searchLoading,
  } = useSearchMoviesQuery(searchQuery);

  console.log({
    searchData,
    searchError,
    searchLoading,
  });

  if (populareMoviesLoading || topRatedMoviesLoading) {
    return <h1>Loading...</h1>;
  }

  if (popularMoviesError || topRatedMoviesError) {
    return <h1>Failed to load the data </h1>;
  }

  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        <h1>Search Results</h1>
        {searchData?.results?.map((movie) => (
          <p key={movie.id}>{movie?.original_title}</p>
        ))}
      </div>

      <div>
        <h1>Popular Movies</h1>
        {popularMoviesData?.results?.map((movie) => (
          <p key={movie.id}>{movie?.original_title}</p>
        ))}
      </div>

      <div>
        <h1>Top rated Movies</h1>
        {topRatedMoviesData?.results?.map((movie) => (
          <p key={movie.id}>{movie?.original_title}</p>
        ))}
      </div>
    </>
  );
}

export default App;
