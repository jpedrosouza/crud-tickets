import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/form/LoginForm'
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

            font-family: Roboto Black;
            font-style: normal;
            font-weight: 900;
            font-size: 12px;
            line-height: 14px;
            color: #4F4F4F;
            cursor: pointer;
        }
    `

    return(
        <React.Fragment>
            <Main>
                <Forms>
                    <Text>Ticket Database</Text>
                    <LoginForm  />
                    <SubText>Não possue uma conta? <span>Cadastre-se</span> </SubText>
                </Forms>
            </Main>
            <Footer />
        </React.Fragment>
    )
}