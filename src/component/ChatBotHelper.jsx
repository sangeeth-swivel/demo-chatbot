import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

// Instruction given to chatbot and there trigger component
const steps = [
  {
    id: '0',
    message: 'Hello!',
    trigger: '1', // Call the next step (id 1)
  }, {
    id: '1',
    message: 'Please write your username',
    trigger: '2', // Call step 2 for user input
  }, {
    id: '2',
    user: true, // Enable user input
    trigger: '3', // Call step 3 after input
  }, {
    id: '3',
    message: "Hi {previousValue}, how can I help you?", // Access previous input
    trigger: '4', // Call step 4 for options
  }, {
    id: '4',
    options: [
      { value: 1, label: 'View Courses' },
      { value: 2, label: 'Read Articles' },
    ],
    end: true, // Mark as the final step
  }
];

// Creating our own theme
const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Chatbot configuration
const config = {
  botAvatar: "chatbot-icon.png",
  floating: true,
};

const ChatBotHelper = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Simple-chatbot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
};

export default ChatBotHelper;