/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import { Box } from 'grommet/components/Box';
import { TextInput } from 'grommet/components/TextInput';
import { Button } from 'grommet/components/Button';
import { Keyboard } from 'grommet/components/Keyboard';
import { InfiniteScroll } from 'grommet/components/InfiniteScroll';
import socketIOClient from "socket.io-client";

import Message from '../message';

// const backgroundColor = "dark-3"
// const borderColor = "dark-2"

const ENDPOINT = "http://127.0.0.1:8080";

function Welcome() {

  const [ newMessage, setMessage ] = useState("")
  const [ roomMessages, setRoomMessages ] = useState([
  ])

  const messagesEndRef = useRef(null)

  const socket = socketIOClient(ENDPOINT);


  function handleSend() {
      // call api request
      setRoomMessages([
        ...roomMessages,
        {content: newMessage, key: roomMessages.length}
      ])
      socket.emit('chat message', newMessage)
      setMessage("")
      scrollToBottom()
  }

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "instant" })
  }

  useEffect(scrollToBottom, [roomMessages]);

  useEffect(() => {
    socket.connect()
    socket.on('connect', (data) => {
      console.log("c'est connecté", data)
    });

    socket.on('received message', (data) => {
      console.log("c'est reçus", data)
    });

    return () => socket.disconnect();
  }, []);

  return (
    <Box
      direction="column"
      height="100%"
    >
      <Box
        direction="column"
        height="95%"
        overflow="auto"
      >
        <InfiniteScroll items={roomMessages} show={roomMessages.length - 1}>
          {(element) => (
            <Message key={element.key} userName="Hoho" date="20/12/2030" content={element.content} />
          )}
        </InfiniteScroll>
        <div ref={messagesEndRef} />
      </Box>
      <Box
        direction="row"
      >
        <Box
          width="90%"
        >
          <Keyboard 
            onEnter={() => handleSend()}
          >
            <TextInput 
              placeholder="type here"
              value={newMessage}
              onChange={event => setMessage(event.target.value)}
            />
          </Keyboard>
        </Box>
        <Box
          margin={{left: 'medium'}}
        >
          <Button primary label="Send" size="medium" onClick={() => handleSend()} />
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;
