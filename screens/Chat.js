import React from 'react';
import {
  View, 
  Text
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = (props) => {

  const user = {
    _id: 1,
    name: 'Maria',
    avatar: 'url'
  };

  const messages = [{
    _id: 1,
    text: 'Ola Pessoal',
    createdAt: new Date(),
    user:{
      _id: 1,
      name: 'João',
      avater: 'url' 
    }
  }];

  function onSendeMessage(messages){
    console.log(messages);
  }

  return (
    <GiftedChat user={user} messages={messages} onSend={onSendeMessage}/>
  );
}

export default Chat;