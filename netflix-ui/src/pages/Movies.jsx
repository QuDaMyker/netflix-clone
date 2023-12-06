import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useFetcher, useNavigate } from "react-router-dom";
import { fetchMovies, getGenres } from '../store'
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-configure';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

export default function Movies() {
    const [isScrolled, setIsScrolled] = useState(false);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        if (genresLoaded) {
            dispatch(fetchMovies({ genres, type: "movie" }));
        }
    }, [genresLoaded]);

    window.onscroll = () => {
        const isScrolled = (window.scrollX > 0 || window.scrollY > 0);
        setIsScrolled(isScrolled);
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        //if (currentUser) navigate("/");
    })

    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>
            <div className="data">
                <SelectGenre genres={genres} type="movie" />
                {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
            </div>
        </Container>
    )
}


const Container = styled.div`
    .data {
        margin-top: 8rem;
    }

    .data .not-available {
        text-align: center;
        color: white;
        margin-top: 4rem;
    }
`;
