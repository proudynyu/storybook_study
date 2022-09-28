import { FC, useState } from "react";
import classnames from "classnames";

interface ButtonProps {
  bgColor: "blue" | "red" | "yellow";
  text: string;
}

export const Button: FC<ButtonProps> = ({ bgColor, text }) => {
  const [color] = useState<string>(() => {
    switch (bgColor) {
      case "blue":
        return "bg-cyber_blue";
      case "red":
        return "bg-cyber_red";
      case "yellow":
        return "bg-cyber_yellow";
      default:
        return "";
    }
  });

  return (
    <button className={classnames("w-[200px] h-[40px] rounded hover:brightness-95", color)}>
      {text}
    </button>
  );
};
