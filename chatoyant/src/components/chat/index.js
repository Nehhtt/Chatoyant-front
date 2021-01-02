/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import { Box } from 'grommet/components/Box';
import { TextInput } from 'grommet/components/TextInput';
import { Button } from 'grommet/components/Button';
import { Keyboard } from 'grommet/components/Keyboard';
import { InfiniteScroll } from 'grommet/components/InfiniteScroll';

import Message from '../message';

// const backgroundColor = "dark-3"
// const borderColor = "dark-2"

function Welcome() {

  const [ newMessage, setMessage ] = useState("")
  const [ plain, setPlain ] = useState([
    {content: 'a',key: 0},
    {content: 'a',key: 1},
    {content: 'a',key: 2},
    {content: 'a',key: 3},
    {content: 'a',key: 4},
    {content: 'a',key: 5},
    {content: 'a',key: 6},
    {content: 'a',key: 7},
    {content: 'a',key: 8},
    {content: 'a',key: 9},
    {content: 'a',key: 10},
    {content: 'a',key: 11},
    {content: 'a',key: 12},
    {content: 'a',key: 13},
    {content: 'a',key: 14},
    {content: 'a',key: 15},
    {content: 'a',key: 16},
  ])

  const messagesEndRef = useRef(null)


  function handleSend() {
      // call api request
      setPlain([
        ...plain,
        {content: newMessage, key: plain.length}
      ])
      setMessage("")
      scrollToBottom()
  }

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "instant" })
  }

  useEffect(scrollToBottom, [plain]);

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
        <InfiniteScroll items={plain} show={plain.length - 1}>
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
