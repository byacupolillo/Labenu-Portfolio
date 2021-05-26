import React from 'react';
import { useProtectPage } from '../../Hooks/useProtectPage'
import { useRequestData } from '../../Hooks/useRequestData'
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../Constants/apiContant'
import { FeedPageContainer, NewPostContainer, FormContainer  } from './styled'
import PostCard from '../../Components/PostCard/PostCard'
import { useForm } from '../../Hooks/useForm'
import { createPosts } from '../../Services/Posts'
import {TextField, Button, Typography} from '@material-ui/core'



const FeedPage = () => {
    useProtectPage()
    const history = useHistory()
    const allPosts = useRequestData(`${BASE_URL}/posts`, [])
    const { form, onChange } = useForm({ title: "", text: "" });

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createPosts(form, history);
    };


    return (
        <div>
            <NewPostContainer>
                <FormContainer onSubmit={handleSubmit}>
                    <TextField
                        name="title"
                        value={form.title}
                        onChange={handleInputChange}
                        placeholder={"Titulo"}
                    />

                    <TextField
                        name="text"
                        value={form.text}
                        onChange={handleInputChange}
                        placeholder={"Digite aqui seu post"}
                    />
                    <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Postar
                </Button>
                </FormContainer>
            </NewPostContainer>
            <FeedPageContainer>
                {allPosts && allPosts.posts && allPosts.posts.map((post) => {
                    return <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        username={post.username}
                        text={post.text}
                        commentsCount={post.commentsCount}
                        votesCount={post.votesCount}
                        direction={post.userVoteDirection}
                    />
                })}
                {/* <FabStyled color="primary" onClick={() => goToAddPost(history)}>
                +
            </FabStyled> */}
            </FeedPageContainer>
        </div>
    )
}

export default FeedPage;