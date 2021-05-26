import styled from "styled-components"
import Fab from '@material-ui/core/Fab';


export const FeedPageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const FabStyled = styled(Fab)`
    position: fixed;
    right: 20px;
    bottom: 20px;
`

export const NewPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 60px auto;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 40vh;
    justify-content: space-around;
    margin-bottom: 15px;
`