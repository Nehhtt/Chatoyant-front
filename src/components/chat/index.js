import React, { useState, useRef, useEffect } from 'react';
import { Box } from 'grommet/components/Box';
import { InfiniteScroll } from 'grommet/components/InfiniteScroll';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';
import InputMessage from '../inputMessage';
import Message from '../message';
import getChat from '../../apiRequests/chat/getChat';
import { useAuthState } from '../../context';

const ENDPOINT = 'https://chatoyant-back.herokuapp.com';

function Chat(props) {
  const [roomMessages, setRoomMessages] = useState([]);

  const { roomData } = props;

  const messagesEndRef = useRef(null);

  const { userDetails, token } = useAuthState();

  const socket = useRef();
  
  function handleSend(messageValue) {
    const date = new Date();

    const day =
      date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`;
    const year = date.getFullYear();
    const hour = `${date.getHours()}H${date.getMinutes()}`;

    setRoomMessages([
      ...roomMessages,
      {
        message: messageValue,
        key: roomMessages.length,
        sender: userDetails.userName,
        date: `${day}/${month}/${year} - ${hour}`,
      },
    ]);
    socket.current.emit('chat message', {
      message: messageValue,
      userName: userDetails.userName,
      date: `${day}/${month}/${year} - ${hour}`,
      chatName: roomData.roomName,
    });
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
        setRoomMessages([...roomMessages, data]);
      });
    });

    return () => {
      socket.current.emit('leave room', props.roomData.roomName)
      socket.current.disconnect()
    };
  }, []);

  useEffect(() => {
    getChat(token, props.roomData.roomName).then((data) => {
      setRoomMessages(data.data.chat);
    });
  }, [roomData]);

  return (
    <Box direction="column" height="100%">
      <Box direction="column" height="95%" overflow="auto">
        <InfiniteScroll items={roomMessages} show={roomMessages.length - 1}>
          {(element) => (
            <Message
              key={Math.random()}
              userName={element.sender}
              date={element.date}
              content={element.message}
              isUser={element.sender === userDetails.userName}
            />
          )}
        </InfiniteScroll>
        <div ref={messagesEndRef} />
      </Box>
      <InputMessage handleSend={handleSend} />
    </Box>
  );
}

Chat.propTypes = {
  roomData: PropTypes.object,
  roomName: PropTypes.string,
};

export default Chat;
