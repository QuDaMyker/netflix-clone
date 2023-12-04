import axios from 'axios';

import {
    configureStore,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit'
import { API_MOVIEDB_KEY, TBDB_BASE_URL } from '../utils/constants';

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};

export const getGenres = createAsyncThunk('netflix/genres', async () => {
    const {
        data: { genres }
    } = await axios.get(
        (`${TBDB_BASE_URL}/genre/movie/list?api_key=${API_MOVIEDB_KEY}`)
    );
    return genres;
});

export const fetchMovies = createAsyncThunk('netflix/trending',
    async ({ type }, thunkApi) => {
        const { netflix: { genres } } = thunkApi.getState();
    }
)

const NetflixSlide = createSlice({
    name: 'Netflix',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.genres;
            state.genresLoaded = true;
        });
    },
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlide.reducer,
    },
});