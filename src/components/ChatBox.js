import React, { useState, useEffect } from "react";
import { TextField, makeStyles, IconButton, Paper } from "@material-ui/core";
import { Send, AttachFile } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import { formatDate } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    maxHeight: 600
  },
  messages: {
    display: "flex",
    flexDirection: "column-reverse",
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  message: {
    maxWidth: "60%",
    overflowWrap: "break-word",
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

export default function ChatBox(props) {
  const { chatMessages, conversationId } = props;
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [canSend, setCanSend] = useState(false);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    setMessages(chatMessages);
  }, [chatMessages]);

  const handleMessageField = (event) => {
    const text = event.target.value;
    if (text.length > 0) {
      setTextInput(text);
      setCanSend(true);
    }
  };

  const handleOnSend = () => {
    if (canSend) {
      const newMessage = {
        chatTypeId: 1,
        message: textInput,
        userType: "user",
        createdAt: new Date().toISOString(),
        conversationId: conversationId
      };
      setMessages([newMessage, ...messages]);
    }
  };
  return (
    <Paper style={{ minHeight: 300, height: "100%" }}>
      <div className={classes.root}>
        {/* messages */}
        <div className={classes.messages}>
          {messages.map((e, i) => (
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent:
                  e.userType === "user" ? "flex-end" : "flex-start"
              }}
            >
              <div className={classes.message}>
                <Paper>{e.message}</Paper>
                <p
                  style={{
                    textAlign: e.userType === "user" ? "right" : "left"
                  }}
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
            onChange={handleMessageField}
          />
          <IconButton
            disabled={!canSend}
            color="primary"
            onClick={handleOnSend}
          >
            <Send />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}
