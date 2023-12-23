import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Wrapper = styled.div`
  overflow: scroll;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
`;
const Weather = () => {
  return (
    <Wrapper>
      <Header />
      <Navbar />
    </Wrapper>
  );
};

export default Weather;
