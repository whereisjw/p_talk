import React, { useEffect, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100%;
  background-color: #f9f9fa;
  padding: 20px 40px;
  border-top: 1px solid rgba(121, 121, 121, 0.5);
  ul {
    display: flex;
    justify-content: space-between;
    li {
      a {
        &.active {
          fill: var(--accent);
        }
      }
    }
  }
`;

const UserSvg = styled.svg`
  scale: 2;
`;
const ChatSvg = styled.svg`
  scale: 2;
`;
const WeatherSvg = styled.svg`
  scale: 2;
`;
const MoreSvg = styled.svg`
  scale: 2;
`;

const Notification = styled.span`
  position: absolute;
  top: -20px;
  left: 10px;
  z-index: 1;
  background-color: tomato;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: white;
  font-weight: 600;
`;

const Navbar = () => {
  const [click, setClick] = useState(1);

  return (
    <>
      <Wrapper>
        <ul>
          <li>
            <Link
              to="/list"
              onClick={() => setClick(1)}
              className={useMatch("/list") ? "active" : null}>
              <UserSvg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </UserSvg>
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              onClick={() => setClick(2)}
              style={{
                position: "relative",
              }}
              className={useMatch("/chat") ? "active" : null}>
              <Notification>1</Notification>
              <ChatSvg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512">
                <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
              </ChatSvg>
            </Link>
          </li>
          <li>
            <Link to="">
              <WeatherSvg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512">
                {" "}
                <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
              </WeatherSvg>
            </Link>
          </li>
          <li>
            <Link to="">
              <MoreSvg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512">
                <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
              </MoreSvg>
            </Link>
          </li>
        </ul>
      </Wrapper>
    </>
  );
};

export default Navbar;
