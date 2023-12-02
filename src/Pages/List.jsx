import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import User from "../components/User";
import Header from "../components/Header";
import { getUser } from "../userinfo";
import axios from "axios";

const Info = styled.div`
  text-align: center;
  display: block;
  background-color: #fafafa;
  color: var(--accent);
  padding: 10px 0;
  font-size: 16px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    fill: rgba(0, 0, 0, 0.3);
    margin-right: 5px;
  }
`;

const UserList = styled.div`
  margin-top: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 10px;
  padding-left: 25px;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  overflow: scroll;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
`;

const List = () => {
  const [list, setList] = useState();
  axios
    .get(`http://127.0.0.1:4845/list`)
    .then((res) => setList(res.data))
    .catch((err) => console.log(err));
  return (
    <Wrapper>
      <Header />
      <Info>
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
          Frineds' Name Display
        </Link>
      </Info>
      <User name="개발자 박씨" sayHi="날씨가 춥네요" />
      <UserList>가입유저목록</UserList>
      {list?.map((v) => (
        <User size="s" name={v.uid} sayHi={v.sayhi} />
      ))}

      <Navbar></Navbar>
    </Wrapper>
  );
};

export default List;
