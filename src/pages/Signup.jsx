import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
export default function Signup() {
    return (
        <Container>
            <BackgroundImage />
            <div className="content">
                <Header login />
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>UInlimited movies, TV shows and more</h1>
                        <h4>Watch any where. Cancel any time</h4>
                        <h6>Ready to watch? Enter your email to create or restart membership</h6>
                    </div>
                    <div className="form">
                        <input type="email" placeholder="Email Address" name="email" id="" />
                        <input type="password" placeholder="Password" name="password" id="" />
                        <button>Get Started</button>
                    </div>
                    <button>Log In</button>
                </div>
            </div>

        </Container>
    )
}

const Container = styled.div`
position: relative;
.content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rbga(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    display: gird;
    grid-template-rows:15vh;
}
`;
