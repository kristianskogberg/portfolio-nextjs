import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

type Text = {
  text: string;
  duration?: number;
  delay?: number;
  ease?:
    | "anticipate"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "circIn"
    | "circOut"
    | "circInOut"
    | "easeIn"
    | "easeOut"
    | "easeInOut";
};

export default function TextTypingAnimation({
  text,
  duration,
  delay,
  ease,
}: Text) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: duration ? duration : 1,
      ease: ease ? ease : "easeInOut",
      delay: delay ? delay : 0,
    });
    return controls.stop;
  }, [duration, delay, text.length]);

  return (
    <span className="">
      <motion.span>{displayText}</motion.span>
    </span>
  );
}
