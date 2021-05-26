import React from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import NavBar from "./NavBar"

const ApplicationForm = () => {

    const submitForm = () => {
        Axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/beatriz-cupolillo/trips/apply`)
            .then(res => {
                console.log(res)
                alert(res.data.message)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <NavBar />
            <h2>formulário de candidatura</h2>
            <div>
                <label>Nome:</label>
                <input
                    required
                    name="name"
                    type="text"
                    pattern="[A-Za-z ]{3,}"
                    title="No mínimo 3 letras!"
                     />
                <label>Idade:</label>
                <input
                    required
                    name="age"
                    type="number"
                    min="18"
                     />
                <label>Profissão:</label>
                <input
                    required
                    name="profession"
                    type="text"
                    pattern="[A-Za-z ]{10,}"
                    title="No mínimo 10 caracteres!"
                     />
                <label>País</label>
                <input
                    required
                    name="country"
                    />
                <label>Por que você é um bom candidato(a)?</label>
                <input
                    required
                    name="applicationText"
                    pattern="[A-Za-z ]{30,}"
                    title="No mínimo 30 caracteres!"
                     />
                <button type="submit">CANDIDATAR</button>
            </div>
        </div>
    )
    }

export default ApplicationForm
