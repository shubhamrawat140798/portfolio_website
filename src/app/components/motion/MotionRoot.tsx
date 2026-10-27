"use client";

import { useEffect } from "react";

const MotionRoot = () => {
  useEffect(() => {
    document.documentElement.classList.add("js-motion");
    return () => document.documentElement.classList.remove("js-motion");
  }, []);

  return null;
};

export default MotionRoot;
