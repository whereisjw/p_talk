import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import StatusBar from "../components/StatusBar";
import { io } from "socket.io-client";
import { useForm } from "react-hook-form";
import { getUser } from "../userinfo";

const Wrapper = styled.div`
  overflow: scroll;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  border-radius: 5px;
  background-color: #abc1d1;
`;
const InnerWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  position: fixed;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;

  h1 {
    font-size: 28px;
    font-weight: 600;
  }
  span {
    margin-left: 20px;
  }
  svg {
    scale: 1.2;
    &:hover {
      color: var(--accent);
      cursor: pointer;
    }
  }
`;
const Main = styled.main`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .time {
    color: white;
    background-color: var(--accent);
    padding: 8px 15px;
    border-radius: 25px;
    font-size: 14px;
    margin-bottom: 25px;
  }
`;

const MessageRow = styled.div`
  &.mine {
    flex-direction: row-reverse;
    .message_payload span:first-child {
      background-color: yellow;
      color: black;
      order: 1;
      margin-right: 0;
      margin-left: 5px;
    }
  }
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  img {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .message_author {
    opacity: 0.8;
    font-size: 13px;
    margin-bottom: 8px;
    display: block;
  }
  .message_payload {
    display: flex;
    align-items: flex-end;
    span:first-child {
      background-color: var(--accent);
      padding: 8px 10px;
      border-radius: 10px;
      margin-right: 5px;
      opacity: 0.8;
      font-size: 13px;
      border-top-left-radius: 0px;
    }
    span:last-child {
      opacity: 0.8;
      font-size: 13px;
    }
  }
`;
const Form = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px 25px;
  align-items: center;
  .last_svg {
    position: absolute;
    right: 40px;
    top: 11px;
    opacity: 0.5;
    background-color: transparent;
  }
  .form_column:first-child {
    width: 10%;
  }
  .form_column:last-child {
    width: 90%;
  }
  input {
    padding: 12px 10px;
    height: 30px;
    width: 100%;
    border: 2px solid var(--accent);
    border-radius: 20px;
  }
`;
const socket = io();
socket.emit("ask-join", "1");
const ChatRoom = () => {
  const userInfo = getUser();
  const [update, setUpdate] = useState();
  const [down, setDown] = useState([]);
  useEffect(() => {
    socket.emit("message", { id: userInfo.id, msg: update });
  }, [update]);
  socket.on("broadcast", (data) => {
    console.log(data, "서버에서받은");
    setDown([...down, data]);
  });

  const onValid = (data) => {
    setValue("msg", "");
    setUpdate(data.msg);

    console.log(update, "update");
  };
  console.log(down);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <Wrapper>
      <StatusBar />
      <InnerWrapper>
        <motion.h1>
          <IoArrowBack onClick={() => navigate(-1)} />
        </motion.h1>
        <div className="header_title">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </span>
        </div>
      </InnerWrapper>
      <Main>
        <div className="time">Tuesday, June 30, 2020</div>

        {down.map((v, i) =>
          v.id === userInfo.id ? (
            <MessageRow className="mine">
              <div className="message_content">
                <div className="message_payload">
                  <span
                    style={{
                      borderTopRightRadius: "0",
                      borderTopLeftRadius: "10px",
                    }}>
                    {v.msg && v.msg}
                  </span>
                  <span>21:27</span>
                </div>
              </div>
            </MessageRow>
          ) : (
            <MessageRow key={i}>
              <img src="https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fCVFRCU5NCU4NCVFQiVBMSU5QyVFRCU5NSU4NHxlbnwwfHwwfHx8MA%3D%3D" />
              <div className="message_content">
                <span className="message_author">{v.id}</span>
                <div className="message_payload">
                  <span>{v?.msg}</span>
                  <span>21:27</span>
                </div>
              </div>
            </MessageRow>
          )
        )}
      </Main>
      <Form>
        <div className="form_column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512">
            <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        </div>

        <div className="form_column">
          <form onSubmit={handleSubmit(onValid)}>
            <input
              type="text"
              {...register("msg")}
              placeholder="Write amessage..."
            />{" "}
          </form>
          <svg
            className="last_svg"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512">
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>{" "}
        </div>
      </Form>
    </Wrapper>
  );
};

export default ChatRoom;
