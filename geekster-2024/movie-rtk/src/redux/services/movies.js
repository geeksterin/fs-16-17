import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const popularMoviesApi = createApi({
  reducerPath: "popularMovies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    headers: {
      authorization:
        "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU5MzM1Yjg5Y2E3NWE3MGJjY2UxYzcyYmZkMDQ4ZCIsInN1YiI6IjYzYmVkN2FiODU4Njc4MDBmMDhjZjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHes_rn51wewxY_7nZLxGssnd67J8ieiLOIo2Bg_FI",
    },
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => "movie/popular",
    }),
    getTopRatedMovies: builder.query({
      query: () => "movie/top_rated",
    }),
    upcomingMovies: builder.query({
      query: () => "movie/upcoming",
    }),
    searchMovies: builder.query({
      query: (searchQuery) => `/search/multi?query=${searchQuery}&page=1`,
    }),
  }),
});

console.log({ popularMoviesApi });
export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useUpcomingMoviesQuery,
  useSearchMoviesQuery,
} = popularMoviesApi;
