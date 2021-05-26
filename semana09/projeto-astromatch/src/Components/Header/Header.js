import React from "react";
import { HeaderContainer } from "./Styled"
import Logo from "../../img/AstroMatch-logo.png"

export default function Header (){
    return(
        <HeaderContainer>
            <a href="index.html">
            <img src={Logo} alt="Logo da AstroMatch Pink"/>
            </a>
        </HeaderContainer>
    )

}