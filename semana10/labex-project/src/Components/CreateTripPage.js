import React from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import NavBar from "./NavBar"

export default function CreateTripPage(){
    useProtectedPage()

    const history = useHistory();

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <div>
            <NavBar />
            <h3>LabeX - Create Trip</h3>
            <button onClick={goToLoginPage}>Logout</button>
        </div>
    )
}