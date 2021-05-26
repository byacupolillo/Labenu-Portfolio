import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar"
import Axios from "axios"

const ListTripsPage = ()  => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        Axios
            .get
            ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/beatriz-cupolillo/trips")
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const history = useHistory();

    const goToApplicationForm = () => {
        history.push("/applicationForm")
    }

    const allTrips = trips.map((trip) => {
        return (
            <div key={trip.id}>
                <p>Nome da Viagem: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Destino: {trip.planet}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Data: {trip.date} </p>
                <button onClick={goToApplicationForm}>Aplique para essa viagem!</button>
            </div>
        )
    })

    return (
        <div>
            <NavBar />
            {allTrips}
        </div>
    );
}

export default ListTripsPage;