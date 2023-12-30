import Link from "next/link";
import React, { ReactNode } from "react";

type Button = {
  text: string;
  url: string;
  icon?: ReactNode;
  disable?: boolean;
  openInNewTab: boolean;
};

export default function LinkButton({
  text,
  url,
  icon,
  disable,
  openInNewTab,
}: Button) {
  const commonStyles =
    "font-code border-2 px-5 py-3 my-2 gap-2 flex items-center flex-row-reverse";
  const disabledStyles = "text-gray-500 border-gray-500 cursor-default";

  return (
    <>
      {disable ? (
        <button className={`${commonStyles} ${disabledStyles}`}>
          {icon && icon}
          {text}
        </button>
      ) : (
        <Link
          href={url}
          rel={`${openInNewTab ? "noopener noreferrer" : ""}`}
          target={`${openInNewTab ? "_blank" : ""}`}
        >
          <button
            className={`${commonStyles} text-accent border-accent hover:text-accent/50 hover:border-accent/50 duration-200`}
          >
            {icon && icon}
            {text}
          </button>
        </Link>
      )}
    </>
  );
}
