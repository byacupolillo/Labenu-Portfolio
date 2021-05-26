import React from 'react';
import styled from "styled-components"

const CardError = styled.div `
display: flex;
justify-content: center;
align-items: center;
background-color: #FFF;
padding: 30px;
`

const ErrorPage = () => {
    return (
    <CardError>
        <h3>Ixi, algo deu errado... </h3>
    </CardError>
    )
}

export default ErrorPage;