import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { chats, chatMessages } from "../mock";
import ChatBox from "./ChatBox";
import ConversationList from "./ConversationList";

const useStyles = makeStyles((theme) => ({
  chatContainer: {
    marginTop: theme.spacing(2),
    minHeight: 600
  }
}));

export default function ChatContainer() {
  const classes = useStyles();
  const [activeConversation, setActiveConversation] = useState(
    chats.data.conversations[0].id
  );

  const handleConversation = (conversation) => {
    setActiveConversation(conversation.id);
  };
  return (
    <div className={classes.chatContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <ConversationList
            onSelect={handleConversation}
            conversations={chats.data.conversations}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ChatBox
            conversationId={activeConversation}
            chatMessages={chatMessages.data.chats
              .filter((e) => e.conversationId === activeConversation)
              .reverse()}
          />
        </Grid>
      </Grid>
    </div>
  );
}
