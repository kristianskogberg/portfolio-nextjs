import React from "react";

type Props = {};

export default function BackgroundCircle({}: Props) {
  return (
    <div className="absolute top-0 left-0 h-screen w-full flex justify-center items-center">
      <div className="rounded-full border border-white opacity-20 animate-pulse h-[500px] w-[500px]" />
    </div>
  );
}
