import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .col {
    padding: 0 25px;
    display: flex;
    align-items: center;
    h4 {
      font-size: 18px;
      font-weight: bold;
    }
    h6 {
      margin-top: 5px;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  img {
    margin-right: 20px;
  }
`;

const User = ({ size, sayHi, name,img }) => {
  return (
    <Wrapper>
      <div className="col">
        <img
          style={{
            width: size === "s" ? "60px " : "70px",
            height: size === "s" ? "60px" : "70px",
            borderRadius: size === "s" ? "20px" : "27px",
          }}
          src={img ? `/img/${img}.jpg` : `/img/1.jpg`}
          alt=""
        />
        <div className="name">
          <h4>{name ? name : "육군참총"}</h4>
          <h6>{sayHi}</h6>
        </div>
      </div>
      <div className="col"></div>
    </Wrapper>
  );
};

export default User;
