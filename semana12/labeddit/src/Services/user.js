import axios from "axios"
import {BASE_URL} from "../Constants/apiContant"
import { goToFeed } from "../Routes/Coordinator"

export const login = (body, history) => {
    
    axios.post(`${BASE_URL}/login`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeed(history)
    }).catch(error => {
        alert("Email ou senha inválidos!")
        console.log(error.message)
    })
}

export const signup = (body, history) => {
    
    axios.post(`${BASE_URL}/signup`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeed(history)
    }).catch(error => {
        console.log(error.message)
    })
}

