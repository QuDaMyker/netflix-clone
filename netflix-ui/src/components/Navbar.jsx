import React, { useState } from 'react'
import styled from 'styled-components';
import logo from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { FaPowerOff, FaSearch } from 'react-icons/fa';
import { firebaseAuth } from '../utils/firebase-configure';
import { signOut, onAuthStateChanged } from 'firebase/auth';


export default function Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  })

  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="links flex">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button onClick={() => {
            signOut(firebaseAuth)
          }}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  
  nav {
    position: sticky;
    top: 0;
    height: 5.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
  }
  .left {
    gap: 2rem;
  }

  .left .brand img {
    height: 4rem;
  }

  .left .links {
    list-style-type: none;
    gap: 2rem;
  }

  .left .links li a{
    color: white;
    text-decoration: none;
  }

  .right {
    gap: 1rem;
  }

  .right button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .right button:focus {
    outline: none;
  }

  .right button svg {
    color: #f34242;
    font-size: 1.2rem;
  }

  .right .search {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    padding-left: 0.5rem;
  }

  .right .search button {
    background-color: transparent;
    border: none;
  }

  .right .search  button:focus {
    outline: none;
  }

  .right .search button svg {
    color: white;
    font-size: 1.2rem;
  }

  .right .search input {
    width: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    background-color: transparent;
    border: none;
    color: white;
  }
  .right .search input:focus {
    outline: none;
  }

  .right .show-search {
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .right .show-search input {
    width: 100%;
    opacity: 1;
    visibility: visible;
    padding: 0.3rem;
  }
`;
