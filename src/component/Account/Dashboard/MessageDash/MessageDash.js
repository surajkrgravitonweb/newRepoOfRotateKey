import React from 'react'
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationList,
  Conversation,
  Avatar
} from "@chatscope/chat-ui-kit-react";

const MessageDash = () => {
  return (
    <div style={{ position: "relative", height: "500px" }}>
  
    <MainContainer>
      <ChatContainer>
        <MessageList>
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "just now",
              sender: "Joe",
            }}
          />
        </MessageList>
        <MessageInput placeholder="Type message here" />
      </ChatContainer>
    </MainContainer>
  </div>
  )
}

export default MessageDash