import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MovieLogo from '../assets/homeTitle.webp'
import backgroundImage from '../assets/home.jpg'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGenres } from '../store'


export default function Netflix() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres())
    }, []);


    window.onscroll = () => {
        const isScrolled = (window.scrollX > 0 || window.scrollY > 0);
        setIsScrolled(isScrolled);
    };

    return (
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className="hero">
                <img
                    src={backgroundImage}
                    alt="background"
                    className='background-image'
                />
                <div className="container">
                    <div className="logo">
                        <img src={MovieLogo} alt="Movie Logo" />
                    </div>
                    <div className="buttons flex">
                        <button className='flex j-center a-center' onClick={() => navigate('/player')}>
                            <FaPlay /> Play
                        </button>
                        <button className='flex j-center a-center'>
                            <AiOutlineInfoCircle /> More Info
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    background-color:black;
    .hero {
        position: relative;
    }

    .hero .background-image {
        filter: brightness(70%);
    }

    .hero img {
        height: 100vh;
        width: 100vw;
    }

    .hero .container {
        position: absolute;
        buttom: 5rem;
    }

    .container .logo img {
        width: 100%;
        height: 100%;
        margin-left: 5rem;
    }

    .container .buttons {
        margin: 5rem;
        gap: 2rem;
    }

    .buttons button {
        font-size:1.4rem;
        gap:1rem;
        border-radius: 0.2rem;
        padding: 0.5rem; 
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor:pointer;
        transition: 0.3s ease-in-out;
    }

    .buttons button:hover {
        opacity: 0.8;
    }

    .buttons button:nth-of-type(2) {
        background-color: rgba(109, 109, 110, 0.7);
        color:white;
    }
    .buttons button:nth-of-type(2) svg {
        font-size: 1.8rem;
    }

`;
