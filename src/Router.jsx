import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import StatusBar from "./components/StatusBar";
import List from "./Pages/List";
import styled from "styled-components";
import Chat from "./Pages/Chat";
import Signup from "./Pages/Signup";
import ChatRoom from "./Pages/ChatRoom";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  min-height: 680px;
  border-radius: 5px;
  border: 1px solid var(--accent);
  padding-bottom: 20px;
`;

const Router = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <Routes>
          <Route path="/list" element={<List />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/chat/1" element={<ChatRoom />}></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

export default Router;
