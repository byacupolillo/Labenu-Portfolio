import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar"

export default function HomePage() {
    const history = useHistory();

    const goToTripsPage = () => {
        history.push("/listTrips")
    }

    return (
        <div>
            <NavBar />
            <div>
                <p>“You want to wake up in the morning and think the future is going to be great - 
                    and that’s what being a spacefaring civilization is all about. 
                    It’s about believing in the future and thinking that the future will be better than the past. 
                    And I can’t think of anything more exciting than going out there and being among the stars.”
                    <br></br>
                    -Elon Musk</p>
                <button onClick={goToTripsPage}>Verificar missões disponíveis</button>
            </div>
        </div>
    )
}
