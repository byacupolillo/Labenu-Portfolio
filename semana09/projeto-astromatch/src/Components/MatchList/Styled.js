import styled from "styled-components";


export const Image = styled.img `
  width: 50px;
  height: 50px;
  border-radius: 50px;
` 

export const ListContainer = styled.div`
    display: flex;
    padding: 2px;
    height: 90px;
    margin-left: 10px;
`

export const ClearButton = styled.button`
    font-size: 1em;
    margin: 28px 0px 10px 25px;
    padding: 0.25em 1em;
    border-radius: 3px;
    color: palevioletred;
    border: 2px solid palevioletred;
    background-color: white;
    &:hover{
        background-color: #fcf7f7;
    }
`