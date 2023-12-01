import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import StatusBar from "../components/StatusBar";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";

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
  end: { fill: "rgba(255,255,255,1)", pathLength: 1 },
};

const Signup = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const hideStartScreen = () => {
    setShowStartScreen(false);
  };

  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const onValid = (data) => {
    console.log(data);
    navigate("/list");
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
            <SvgLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
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
                d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
              />
            </SvgLogo>
          </StartScreen>
        )}
      </AnimatePresence>
      <Wrapper>
        <Title>
          <h1>Welcome to LupinTalk</h1>
          <p>
            If you have a LupinTalk account, log in with your id or Secret code.
          </p>
        </Title>
        <From onSubmit={handleSubmit(onValid)} action="/login" method="post">
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
            <Link to="/">Find Lupin Account or Password</Link>
          </fieldset>
        </From>
      </Wrapper>
    </>
  );
};

export default Signup;
