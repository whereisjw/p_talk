import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
const StatusBarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  padding: 5px 3px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const Column = styled.div`
  width: 33%;
  &.col2 {
    display: flex;
    justify-content: center;
  }
  &.col3 {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    svg,
    span {
      margin-left: 5px;
    }
  }
  &.col1 {
    span {
      margin-right: 10px;
    }
  }
`;

const WifiSvg = styled(motion.svg)`
  height: 0.8rem;
  path {
    stroke: white;
    stroke-width: 1;
  }
`;

const BatterySvg = styled(motion.svg)`
  height: 1rem;
  scale: 1.2;
`;
const BatteryVars = {
  start: { fill: "rgba(255,255,255,0)" },
  end: { fill: "#ad1d1d", transition: { duration: 2, repeat: Infinity } },
};

const LightningSvg = styled.svg`
  height: 1rem;
`;
const StatusBar = () => {
  return (
    <StatusBarWrap>
      <Column className="col1">
        <span>no service</span>
        <WifiSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <motion.path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
        </WifiSvg>
      </Column>
      <Column className="col2">
        <span>
          {new Date().getHours()}:{new Date().getMinutes()}
        </span>
      </Column>
      <Column className="col3">
        <span>8%</span>
        <BatterySvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <motion.path
            variants={BatteryVars}
            initial="start"
            animate="end"
            d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm112 96H96V320h96V192z"
          />
        </BatterySvg>
        <LightningSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <motion.path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
        </LightningSvg>
      </Column>
    </StatusBarWrap>
  );
};

export default StatusBar;
