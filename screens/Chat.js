import React, {useEffect, useState} from 'react';
import {
  View, 
  Text
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import api from '../api';

const Chat = (props) => {

  const {user} = props.navigation.state.params;

  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    api.updateMessages((msg)=>{
      setMessages((prevMsgs) => GiftedChat.append(prevMsgs, msg));
    });
  },[]);

  const onSend = async (msgs) => {
    msgs.forEach((msg) => {
      const { text, user } = msg;
      const message = { text, user, createdAt: new Date().getTime() };
      api.createMessages(message);
    });
  };

  return (
    <GiftedChat user={user} messages={messages} onSend={onSend}/>
  );
}

export default Chat;