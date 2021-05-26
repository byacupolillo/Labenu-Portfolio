import React from "react";
import { useHistory } from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { goToPostDetails } from "../../Routes/Coordinator";
import { CardStyled, CardMediaStyled } from './styled'

const PostCard = (props) => {
    const history = useHistory()

    return (
      <CardStyled onClick={() => goToPostDetails(history, props.id)}>
        <CardActionArea>
          <CardMediaStyled>
            <h3>{props.username}</h3>
            <h1> {props.title}</h1>
            <p> {props.text} </p>
            </CardMediaStyled>
        </CardActionArea>
      </CardStyled>
    );
}

export default PostCard;