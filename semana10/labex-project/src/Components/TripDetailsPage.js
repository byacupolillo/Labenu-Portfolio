import React from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import NavBar from "./NavBar"

export default function TripDetailsPage(){
    useProtectedPage()

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

        <div>
            <NavBar />
        <p>Aqui ficam os detalhes das viagens</p>
        </div>
  );
}