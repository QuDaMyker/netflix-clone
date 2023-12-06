import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLikedMovies } from '../store'
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-configure';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Card from '../components/Card';


export default function UserLiked() {
    const [isScrolled, setIsScrolled] = useState(false);
    const movies = useSelector((state) => state.netflix.movies);

    const [email, setEmail] = useState(undefined);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEmail(currentUser.email);
        else navigate('/login');
    })
    useEffect(() => {
        if (email) {
            dispatch(getUserLikedMovies(email));
        }
    }, [email]);



    window.onscroll = () => {
        const isScrolled = (window.scrollX > 0 || window.scrollY > 0);
        setIsScrolled(isScrolled);
    };


    return (
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className="content flex column">
                <h1>My list</h1>
                {
                    movies.length === 0 ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="grid flex">
                            {movies.map((movie, index) => (
                                <Card movieData={movie} index={index} key={movie.id} isLiked={true} />
                            ))}
                        </div>
                    )
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    .content {
        margin: 2rem;
        margin-top: 8rem;
        gap: 3rem;
    }

    .content h1 {
        margin-left: 3rem;
    }

    .grid {
     flex-wrap: wrap;
     gap: 1rem;
    }


`;
