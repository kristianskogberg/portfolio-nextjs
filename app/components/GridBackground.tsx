import React from "react";

type Props = {};

export default function GridBackground({}: Props) {
  return (
    <div className="-z-50 fixed inset-0 h-full w-full bg-dark bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
  );
}
