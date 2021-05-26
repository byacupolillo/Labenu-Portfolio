import React from 'react'
import {ButtonsContainer} from "./styled"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin } from '../../Routes/Coordinator'
import Logo from '../../assets/logo-labeddit.png'

const NavBar = () => {
    const history = useHistory()

    const logout = () => {
      localStorage.removeItem("token");
      goToLogin(history)
    }


    return (
        <AppBar className={'appbar'}>
          <Toolbar>
            <img src={Logo} width='50px'/>
            <ButtonsContainer>
              <Button color="inherit" onClick={() => goToFeed(history)}>LabEddit</Button>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </ButtonsContainer>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar;