import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, CardContainer, InfoContainer, ButtonsContainer } from "./Styled"
import DislikeImg from "../../img/dislike.png"
import LikeImg from "../../img/like.png"

export default function MatchScreen() {
    const [profile, setProfile] = useState({})
    const [chooseProfile, setChooseProfile] = useState(false)

    useEffect(() => {
        getProfile();
      }, []);

    const getProfile = () => {
        axios
        .get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-cupolillo/person"
        )
        .then((res) => {
            setProfile(res.data.profile)
        }).catch((err)=> {
            console.log(err)
        })
    }

    const choosePerson = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios
        .post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-cupolillo/choose-person",
            body
        )
        .then((res) => {
            getProfile()
        }).catch((err)=> {
            console.log(err)
        })
    }

    const onClickLike = () => {
        setChooseProfile(true)
        choosePerson()
    }

    const onClickDislike = () => {
        setChooseProfile(false)
        choosePerson()
    }

    return (
        <CardContainer>
            <Image img src={profile.photo} />
            <InfoContainer>
                <p>{profile.name}</p>
                <p>{profile.age}</p>
                <p>{profile.bio}</p>
            </InfoContainer>
            <ButtonsContainer>
                <img src={DislikeImg} alt="botão amei" onClick={onClickDislike} />
                <img src={LikeImg} alt="botão não gostei" onClick={onClickLike} />
            </ButtonsContainer>
        </CardContainer>

    )
}
