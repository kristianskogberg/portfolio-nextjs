import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="py-8 max-w-7xl mx-auto text-left justify-start items-start flex flex-col ">
      <p className="text-gray-400">Copyright {"\u00A9"} Kristian Skogberg</p>
    </div>
  );
}
