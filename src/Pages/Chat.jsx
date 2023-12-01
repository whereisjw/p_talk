import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Header from "../components/Header";
import User from "../components/User";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  overflow: scroll;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
`;

const Chat = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header />
      <Link to="/chat/1">
        <User size="s" name="채팅방" sayHi="" />
      </Link>
      <Navbar />
    </Wrapper>
  );
};

export default Chat;
