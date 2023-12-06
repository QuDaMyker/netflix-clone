import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import video from '../assets/video.mp4'
import { IoPlayCircleSharp } from 'react-icons/io5'
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri'
import { BsCheck } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'

export default function Card({ movieData, isLiked = false }) {
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();
    return (
        <Container
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                alt="movie"
            />
            {
                isHovered && (
                    <div className="hover">
                        <div className="image-video-container">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                                alt="movie"
                                onClick={() => navigate('/player')}
                            />
                            <video src={video}
                                autoPlay
                                loop
                                // muted
                                onClick={() => navigate('/player')}
                            ></video>
                        </div>
                        <div className="info-container flex column">
                            <h3 className="name" onClick={() => navigate("/player")}>
                                {movieData.name}
                            </h3>
                            <div className="icons flex j-betwwen">
                                <div className="controls flex">
                                    <IoPlayCircleSharp title='play'
                                        onClick={() => navigate('/player')}
                                    />
                                    <RiThumbUpFill title='Like' />
                                    <RiThumbDownFill title='Dislike' />
                                    {
                                        isLiked ? (
                                            <BsCheck title='Remove From List' />
                                        ) :
                                            (< AiOutlinePlus title='All to my list' />
                                            )
                                    }
                                </div>
                                <div className="info">
                                    <BiChevronDown title='More Info' />
                                </div>
                            </div>
                            <div className="genres flex">
                                <ul className="flex">
                                    {
                                        movieData.genres.map((genre) => {
                                            <li key={genre}> {genre} </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </Container>
    )
}

const Container = styled.div`
    max-width: 230px;   
    width: 230px;
    height: 100%;
    cursor: pointer;
    position: relative;
    margin: 10px 0 10px 10px;
    
    img {
        border-radius: 0.2rem;
        width: 100%;
        height: 100%;
        z-index: 10;
    }

    .hover {
        z-index: 90;
        height: max-content;
        width: 20rem;
        position: absolute;
        top: -18vh;
        left: 0;
        border-radius: 0.3rem;
        box-shadow: rgba(0, 0, 0, 0.75) opx 3px 10px;
        background-color: #181818;
        transition: 0.3s ease-in-out;
    }

    .hover .image-video-container {
        position: relative;
        height: 140px;
    }

    .image-video-container img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
    }

    .image-video-container video {
        
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
    }

    .info-container {
        padding: 1rem;
        gap: 0.5rem;    
    }

    .info-container .icons .controls {
        display: flex;
        gap: 1rem;
    }

    .info-container .icons svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    .info-container .icons svg:hover {
        color: #b8b8b8;
    }

    .info-container .genres ul {
        gap: 1rem;
    }

    .info-container .genres ul li {
        padding-right: 0.7rem;
    }

    .info-container .genres ul li:first-of-type {
        list-style-type: none;
    }
`;
