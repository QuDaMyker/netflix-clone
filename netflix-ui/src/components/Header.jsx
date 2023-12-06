import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import logo from '../assets/logo.png'
export default function Header(pros) {
    const navigate = useNavigate();
    return (
        <Container className='flex a-center j-between'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button onClick={() => navigate(pros.login ? '/login' : '/signup')}>
                {pros.login ? "Login" : "Sign In"}
            </button>
        </Container>
    )
}

const Container = styled.div`
padding: 0 4rem;
.logo {
    img {
        height: 5rem;
    }
}
button {
    padding: 0.3rem 0.8rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    border-radius: 0.2rem;
    font-weight:bold;
    font-size:1.05rem;
    color: white;
}
`;