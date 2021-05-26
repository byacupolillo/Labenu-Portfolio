import {React, useState, useEffect}  from "react";
import { useHistory, useParams } from "react-router-dom";
import { useProtectPage } from '../../Hooks/useProtectPage'
import { goToFeed } from '../../Routes/Coordinator'
import { BASE_URL } from '../../Constants/apiContant'
import { PostContainer } from "./styled"
import { Typography } from '@material-ui/core';
import { useRequestData } from "../../Hooks/useRequestData";
import PostCard from "../../Components/PostCard/PostCard";

function PostDetails () {
    useProtectPage()
    const history = useHistory()
    const params = useParams()
    const data = useRequestData(`${BASE_URL}/posts/${params.id}`)

      return (
        <PostContainer>
            {data && <div>
                <Typography variant="h5" color="primary" align="center">
                    {data.username}
                </Typography>
                <Typography variant="h5" color="primary" align="center">
                    {data.title}
                </Typography>
                <Typography align="center">
                    {data.text}
                </Typography>
                <Typography align="center">
                    {data.votesCount}
                </Typography>
            </div>}
        </PostContainer>
      )
}

export default PostDetails
