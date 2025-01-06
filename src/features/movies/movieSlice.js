import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApikey";

const initialState = {
    movies: {},
    shows:{},
    moviesorshows:{},
    isLoading: false
};

// Define the async thunk
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (movietext) => {
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movietext}}&type=movie`);
    return response.data; // Return the response data to be used in fulfilled reducer
});
export const fetchShows = createAsyncThunk("movies/fetchShows", async (showtext) => {
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${showtext}&type=series`);
    return response.data; // Return the response data to be used in fulfilled reducer
});
export const fetchMoviesorShows = createAsyncThunk("movies/fetchMoviesorShows", async (id) => {
    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data; // Return the response data to be used in fulfilled reducer
});

// Create the slice
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeMoviesorShows: (state)=>{
            state.moviesorshows={}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.movies = payload; // Update the state with the fetched movies
            })
            .addCase(fetchMovies.rejected, () => {
                console.log("Fetching movies: rejected");
            })
            .addCase(fetchShows.pending, (state) => {
                state.isLoading = true;
              })
            .addCase(fetchShows.fulfilled, (state, { payload }) => {
                console.log("Fetching series: success");
                state.shows = payload; // Update the state with the fetched movies
            })
            .addCase(fetchMoviesorShows.fulfilled, (state, { payload }) => {
                console.log("Fetching : success");
                state.moviesorshows = payload; // Update the state with the fetched movies
            });
    },
});

// Export actions and selectors
export const { removeMoviesorShows } = movieSlice.actions;
export const getMovies = (state) => state.movies.movies;
export const getShows = (state) => state.movies.shows;
export const getMoviesorShows = (state) => state.movies.moviesorshows;
export const getIsLoading = (state) => state.movies.isLoading;
export default movieSlice.reducer;
