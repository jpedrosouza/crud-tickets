import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'

export default function Login() {

    const Main = styled.main`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    `

    const Forms = styled.div`
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
        width: 100vw;
        height: 208px;
    `

    const Text = styled.h1`
        @font-face {
            font-family: 'Roboto Bold';
            src: url('/fonts/Roboto/Roboto-Bold.ttf');
        }

        font-family: Roboto Bold;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #333333;
        margin: 0;
    `

    return(
        <React.Fragment>
            <Main>
                <Forms>
                    <Text>Ticket Database</Text>
                    <LoginForm  />
                </Forms>
            </Main>
            <Footer />
        </React.Fragment>
    )
}