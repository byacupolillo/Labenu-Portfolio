import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar"

export default function LoginPage(){
    const history = useHistory();

    const goToHome = () => {
        history.push("/")
    }

    const createNewTrip = () => {
        history.push("/createTrip")
    }

    return (

        <div>
            <NavBar />
            <h3>LabeX - Login Adm</h3>

        </div>
    )
}