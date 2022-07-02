import React from "react";
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "/public/animation-dev.json";

export default function Animation({ width, height }) {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: width, height: height }}
    />
  );
}
