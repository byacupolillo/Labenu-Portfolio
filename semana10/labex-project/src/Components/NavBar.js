import React from "react";
import { useHistory } from "react-router-dom";
import { NavContainer } from "./Styled"

export default function NavBar(){
    const history = useHistory();

    const goToHome = () => {
        history.push("/")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToTripsPage = () => {
        history.push("/listTrips")
    }

    return (

        <NavContainer>
            <h3>LabeX</h3>
            <button onClick={goToHome}>Home</button>
            <button onClick={goToTripsPage}>Trips</button>
            <button onClick={goToLoginPage}>Login Adm</button>
        </NavContainer>
    )
}