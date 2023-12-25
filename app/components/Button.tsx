import React, { ReactNode } from "react";

type Button = {
  text: string;
  url?: string | undefined;
  icon?: ReactNode;
  disable?: boolean;
};

export default function Button({ text, url, icon, disable }: Button) {
  const commonStyles =
    "font-code border-2 px-5 py-3 my-2 gap-2 flex items-center ";
  const disabledStyles = "text-gray-500 border-gray-500 cursor-default";

  return (
    <>
      {disable ? (
        <button className={`${commonStyles} ${disabledStyles}`}>
          {icon && icon}
          {text}
        </button>
      ) : (
        <a href={url} target="_blank" rel="noreferrer">
          <button
            className={`${commonStyles} text-accent border-accent hover:text-accent/50 hover:border-accent/50 duration-200`}
          >
            {icon && icon}
            {text}
          </button>
        </a>
      )}
    </>
  );
}
