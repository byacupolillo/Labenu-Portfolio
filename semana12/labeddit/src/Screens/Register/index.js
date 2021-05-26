import React from 'react';
import {useForm} from "../../Hooks/useForm"
import {TextField, Button} from '@material-ui/core'
import { FormContainer, SignupPageContainer } from './styled';
import { useHistory } from 'react-router-dom';
import {signup} from "../../Services/user"
import {useUnprotectPage} from '../../Hooks/useUnprotectPage'

const RegisterPage = () => {
    useUnprotectPage()
    const history = useHistory()
    const {form, onChange} = useForm({username: "", email: "", password: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target
        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        signup(form, history)
    }

    return (
        <SignupPageContainer>
            {/* <img src={logo} /> */}
            <FormContainer onSubmit={handleSubmission} >
                <TextField 
                    label="UserName"
                    variant="outlined"
                    name="username"
                    value={form.username}
                    onChange={handleInputChange}
                />
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                />
                <TextField  
                    label="Senha"
                    variant="outlined"                
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Cadastrar
                </Button>
            </FormContainer>
        </SignupPageContainer>
    )
}

export default RegisterPage;