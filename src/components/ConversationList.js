import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  makeStyles,
  Paper
} from "@material-ui/core";
import { chats } from "../mock";
const useStyles = makeStyles((theme) => ({
  conversations: {
    padding: theme.spacing(1)
  },
  conversationTile: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center"
  },
  conversationTileImage: {
    width: 80,
    height: 80,
    objectFit: "cover",
    borderRadius: "50%"
  },
  conversationTileContent: {
    textAlign: "start",
    "& p": {
      margin: 0
    }
  }
}));

export default function ConversationList(props) {
  const { onSelect } = props;
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const handleOnSelect = (converation, index) => {
    if (onSelect) {
      onSelect(converation);
    }
    setActive(index);
  };
  return (
    <div>
      <Paper className={classes.conversations}>
        {chats.data.conversations.map((e, i) => (
          <Card
            key={i}
            className={classes.conversationTile}
            onClick={() => handleOnSelect(e, i)}
            raised={active === i}
          >
            <CardMedia
              className={classes.conversationTileImage}
              // using a fallback image not sure why Firbase images won't load
              // image={e.user.profilePic}
              image="https://material-ui.com/static/images/avatar/1.jpg"
              title="Avatar"
            />
            <CardContent className={classes.conversationTileContent}>
              <div>
                <b>{e.user.firstName}</b>
                <p>{e.chats.length > 0 ? e.chats[0].message : ""}</p>
                <span>12/10/2020</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </Paper>
    </div>
  );
}
