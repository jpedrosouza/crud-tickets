import React from 'react'
import styled from 'styled-components'
import RegisterForm from '../components/form/RegisterForm'
import Footer from '../components/Footer'

export default function Register() {
    // styling used styled components
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
        height: 358px;
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

    const SubText = styled.h2`
        @font-face {
            font-family: 'Roboto Regular';
            src: url('/fonts/Roboto/Roboto-Regular.ttf');
        }

        font-family: Roboto Regular;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #4F4F4F;
        margin: 0;

        span {
            @font-face {
                font-family: 'Roboto Black';
                src: url('/fonts/Roboto/Roboto-Black.ttf');
            }

            text-decoration: none;
            font-family: Roboto Black;
            font-style: normal;
            font-weight: 900;
            font-size: 12px;
            line-height: 14px;
            color: #4F4F4F;
            cursor: pointer;
        }
    `

    return (
        <React.Fragment>
            <Main>
                <Forms>
                    <Text>Ticket Database</Text>
                    <RegisterForm />
                    <SubText>Já possue uma conta? <span>Entrar</span> </SubText>
                </Forms>
            </Main>
            <Footer />
        </React.Fragment>
    )
}