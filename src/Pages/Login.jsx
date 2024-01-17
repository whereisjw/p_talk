import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import StatusBar from "../components/StatusBar";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getCookie, setCookie } from "../cookie";
import { jwtDecode } from "jwt-decode";

const Wrapper = styled.div`
  margin-top: 90px;
`;

const Title = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
  h1 {
    margin-bottom: 40px;
    font-size: 25px;
    font-weight: bold;
  }
  p {
    width: 50%;
    opacity: 0.6;
  }
`;

const From = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    input {
      color: var(--text);
      background-color: transparent;
      padding: 15px 0;
      border: none;
      font-size: 18px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      margin-bottom: 25px;
      transition: border-color 0.5s ease-in-out;
    }
    input::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
    input:focus {
      outline: none;
      border-color: var(--accent);
    }
    input[type="submit"],
    input[type="button"] {
      &:hover {
        color: var(--bg);
      }
      background-color: var(--accent);
      cursor: pointer;
      padding: 20px 0;
      border: none;
      border-radius: 5px;
    }
    a {
      text-align: center;
      font-size: 14px;
    }
  }
`;

const StartScreen = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
  z-index: 3;
`;

const SvgLogo = styled(motion.svg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 10;
  }
`;

const SvgVars = {
  start: { fill: "rgba(255,255,255,0)", pathLength: 0.1 },
  end: {
    fill: [
      "rgba(255,255,255,0)",
      "rgba(123, 25, 255, 1)",
      "rgba(25, 13, 156, 1)",
      "rgba(255, 255, 255, 1)",
    ],
    pathLength: 1,
  },
};

const Login = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const hideStartScreen = () => {
    setShowStartScreen(false);
  };

  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const onValid = (data) => {
    console.log(data);
    axios.post(`http://127.0.0.1:4845/`, data).then((res) => {
      if (res.data.result) {
        setCookie("auth_lupin", res.data.token);
        const userId = jwtDecode(res.data.token);
        localStorage.setItem("info", JSON.stringify(userId));
        navigate("/list");
      } else {
        alert("올바르지 않은 회원정보입니다.");
      }
    });
  };

  return (
    <>
      <StatusBar />
      <AnimatePresence>
        {showStartScreen && (
          <StartScreen
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            onAnimationComplete={hideStartScreen}>
            <SvgLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <motion.path
                transition={{
                  default: { duration: 3 },
                  fill: {
                    duration: 1,
                    delay: 2,
                    ease: "easeOut",
                    type: "tween",
                  },
                }}
                variants={SvgVars}
                initial="start"
                animate="end"
                fill="transparent"
                d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160 154.4c0-5.8 4.7-10.4 10.4-10.4h.2c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4h48c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3h.2c5.8 0 10.4 4.7 10.4 10.4V272c0 53-43 96-96 96s-96-43-96-96V154.4zM216 288a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"
              />
            </SvgLogo>
          </StartScreen>
        )}
      </AnimatePresence>
      <Wrapper>
        <Title>
          <h1>고양톡에 오신걸 환영합니다.</h1>
          <p>아이디가 있으시면 로그인을, 없으시다면 회원가입을 진행해 주세요</p>
        </Title>
        <From onSubmit={handleSubmit(onValid)} action="/" method="post">
          <fieldset>
            <input
              {...register("id", { required: true })}
              type="text"
              placeholder="ID or Secret Code"
            />
            <input
              {...register("pass", { required: true })}
              type="password"
              placeholder="password"
            />
            <input type="submit" value="Log In" />
            <input
              onClick={() => navigate("/signup")}
              type="Button"
              value="Sign Up"
            />
            <Link to="/">채팅 예절을 지켜주세요</Link>
          </fieldset>
        </From>
      </Wrapper>
    </>
  );
};

export default Login;
