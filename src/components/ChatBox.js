import React from "react";
import {
  TextField,
  makeStyles,
  IconButton,
  ListItemText,
  ListItem,
  Card,
  Paper
} from "@material-ui/core";
import { Send, AttachFile } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import { chatMessages, chats } from "../mock";
import { formatDate } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  messages: {
    display: "flex",
    flexDirection: "column-reverse",
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  message: {
    marginTop: 8,
    "& .MuiPaper-root": {
      padding: theme.spacing(1)
    },
    "& p": {
      margin: 0,
      fontSize: 11,
      fontWeight: 300
    }
  },
  messageField: {
    display: "flex",
    bottom: 0,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: grey[100]
  },
  inputField: {
    flexGrow: 1
  },
  shiftRight: {
    justifyContent: `flex-end !important`
  },
  shiftLeft: {
    justifyContent: `flex-start !important`
  }
}));

export default function ChatBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* messages */}
      <div className={classes.messages}>
        {chatMessages.data.chats.map((e, i) => (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: e.userType === "user" ? "flex-end" : "flex-start"
            }}
          >
            <div className={classes.message}>
              <Paper>{e.message}</Paper>
              <p
                style={{ textAlign: e.userType === "user" ? "right" : "left" }}
              >
                <em>{formatDate(e.createdAt)}</em>
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* send button */}
      <div className={classes.messageField}>
        <IconButton>
          <AttachFile />
        </IconButton>
        <TextField
          fullWidth
          placeholder="Type your message here"
          InputProps={{ disableUnderline: true }}
        />
        <IconButton>
          <Send />
        </IconButton>
      </div>
    </div>
  );
}
