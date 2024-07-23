"use client";

import Lottie from "lottie-react";
import { Suspense } from "react";

type DisplayLottieProps = {
  loop?: boolean;
  style?: Record<string, any>;
  animationData: any;
};

const DisplayLottie = ({
  loop = true,
  style,
  animationData,
}: DisplayLottieProps) => {
  return (
    <Suspense fallback={"Loading..."}>
      <Lottie animationData={animationData} loop={loop} style={style} />
    </Suspense>
  );
};

export default DisplayLottie;
