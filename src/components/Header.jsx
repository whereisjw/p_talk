import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUser, removeUser } from "../userinfo";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  h1 {
    font-size: 28px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  span {
    margin-left: 20px;
  }

  svg {
    scale: 1.2;
    cursor: pointer;
    &.hidden {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const user = getUser();
  console.log(user, "유저");
  return (
    <Wrapper>
      <motion.h1
        initial={{ color: "var(--text)" }}
        animate={{ color: "var(--accent)" }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="header_title">
        {user ? user.id + "님 반갑습니다" : "Lupin"}
      </motion.h1>
      <div className="header_title">
        <span>
          <svg
            className="hidden"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </span>
        <span>
          <svg
            className="hidden"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512">
            <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" />
          </svg>
        </span>
        <span>
          <svg
            onClick={() => {
              removeUser();
              navigate("/");
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </span>
      </div>
    </Wrapper>
  );
};

export default Header;
