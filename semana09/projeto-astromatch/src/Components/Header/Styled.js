import styled from "styled-components";

export const HeaderContainer = styled.div `
    width: 100%;
    height: 60px;
    display:flex;
    flex-direction: column;
    border-radius: 5px;
    > a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        > img {
            width:75%;
        }
    }
` 