import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import axios from "axios";
import { getUser } from "../userinfo";

const Wrapper = styled.div`
  overflow: scroll;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
`;

const Card = styled.div`
  width: 70px;
  height: 70px;
`;

const Figure = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  padding: 5px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const Figcaption = styled.figcaption`
  text-align: center;
  margin: 5px 0;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;
const Button = styled.button`
  position: absolute;
  font-weight: bold;
  background-color: var(--accent);
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60px;
  width: 120px;
`;
const ChangeImg = () => {
  const [click, setClick] = useState();
  let userinfo = getUser();
  const handleClick = () => {
    if (click === null) return false;
    axios
      .post(`http://127.0.0.1:4845/img`, { id: userinfo.id, img: click })
      .then((res) => alert("대표이미지 변경완료"))
      .catch((err) => console.log(err));
  };
  return (
    <Wrapper>
      <Header />
      <CardWrapper>
        <Card onClick={() => setClick(1)}>
          <Figure style={{ border: click === 1 && "3px solid blue" }}>
            <img src="/img/1.jpg" alt="" />
          </Figure>
          <Figcaption>
            <h4>1번</h4>
          </Figcaption>
        </Card>
        <Card onClick={() => setClick(2)}>
          <Figure style={{ border: click === 2 && "3px solid blue" }}>
            <img src="/img/2.jpg" alt="" />
          </Figure>
          <Figcaption>
            <h4>2번</h4>
          </Figcaption>
        </Card>
        <Card onClick={() => setClick(3)}>
          <Figure style={{ border: click === 3 && "3px solid blue" }}>
            <img src="/img/3.jpg" alt="" />
          </Figure>
          <Figcaption>
            <h4>3번</h4>
          </Figcaption>
        </Card>
      </CardWrapper>
      <Button onClick={() => handleClick()}>변경하기</Button>
      <Navbar />
    </Wrapper>
  );
};

export default ChangeImg;
