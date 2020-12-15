import React from "react";
import {
  Grid,
  Paper,
  makeStyles,
  Avatar,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  TextField
} from "@material-ui/core";
import { chats, chatMessages } from "../mock";
import { Height } from "@material-ui/icons";
import ChatBox from "./ChatBox";

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

function ConversationList() {
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

export default function ChatContainer() {
  const classes = useStyles();

  return (
    <div className={classes.chatContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.conversations}>
            <ConversationList />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper style={{ minHeight: 300, height: "100%" }}>
            <ChatBox />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
