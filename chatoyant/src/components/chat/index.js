/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import { Box } from 'grommet/components/Box';
import { TextInput } from 'grommet/components/TextInput';
import { Button } from 'grommet/components/Button';
import { Keyboard } from 'grommet/components/Keyboard';
import { InfiniteScroll } from 'grommet/components/InfiniteScroll';
import socketIOClient from 'socket.io-client';
import displayText from '../../utils/languages';
import InputMessage from '../inputMessage';
import Message from '../message';
import getChat from '../../apiRequests/chat/getChat';
import { useAuthState } from '../../context';

const ENDPOINT = 'http://127.0.0.1:8080';

function Chat(props) {
  const [newMessage, setMessage] = useState('');
  const [roomMessages, setRoomMessages] = useState([]);

  const { roomData } = props

  const messagesEndRef = useRef(null);
  const { userDetails, token } = useAuthState();
  
  const socket = useRef();

  function handleSend(messageValue) {
    const date = new Date()

    const day = date.getDate() < 10?`0${date.getDate()}`:`${date.getDate()}`
    const month = date.getMonth() + 1 < 10?`0${date.getMonth() + 1}`:`${date.getMonth() + 1}`;
    const year = date.getFullYear();

    setRoomMessages([
      ...roomMessages,
      { content: messageValue, key: roomMessages.length, userName: userDetails.userName, date: `${day}/${month}/${year}` },
    ]);
    socket.current.emit('chat message', {message: messageValue, user: userDetails.userName, date: `${day}/${month}/${year}`});
    scrollToBottom();
  }

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'instant' });
  };

  useEffect(scrollToBottom, [roomMessages]);

  useEffect(() => {
    socket.current = socketIOClient(ENDPOINT);
    socket.current.connect();
    socket.current.on('connect', () => {
      socket.current.emit('connect room', roomData.roomName);
      
      socket.current.on('received message', (data) => {
        setRoomMessages([
          ...roomMessages,
          data
        ])
      });
    });

    return () => socket.current.disconnect();
  }, []);

  console.log(props.roomData.roomName);
  useEffect(() => {
    getChat(token, props.roomData.roomName).then((data) => {
      console.log('message', data);
    });
  }, []);

  useEffect(() => {
    console.log("intoUse", roomData)

    // return () => ();
  }, [roomData]);

  return (
    <Box direction="column" height="100%">
      <Box direction="column" height="95%" overflow="auto">
        <InfiniteScroll items={roomMessages} show={roomMessages.length - 1}>
          {(element) => (
            <Message
              key={element.key}
              userName={element.userName}
              date={element.date}
              content={element.content}
            />
          )}
        </InfiniteScroll>
        <div ref={messagesEndRef} />
      </Box>
      <InputMessage handleSend={handleSend} />
    </Box>
  );
}

export default Chat;
