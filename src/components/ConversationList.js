import React from "react";
import { Card, CardMedia, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chatContainer: {
    marginTop: theme.spacing(2),
    minHeight: 600
  },

  conversations: {
    padding: theme.spacing(1)
  },

  conversationTile: {
    margin: theme.spacing(1),
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

export default function ConversationList() {
  const classes = useStyles();
  return (
    <div>
      {chats.data.conversations.map((e, i) => (
        <Card key={i} className={classes.conversationTile}>
          <CardMedia
            className={classes.conversationTileImage}
            image={e.user.profilePic}
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
    </div>
  );
}
