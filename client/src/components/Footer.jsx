import React from 'react'
import styled from 'styled-components'

export default function Footer() {

    const Text = styled.p`
        @font-face {
            font-family: 'Roboto Light';
            src: url('/fonts/Roboto/Roboto-Light.ttf');
        }


        position: absolute;
        width: 100vw;
        text-align: center;
        bottom: 36px;
        font-family: Roboto Light;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        color: #333333;
    `

    return (
        <React.Fragment>
            <Text>Hands on Work IV Team</Text>
        </React.Fragment>
    )
}