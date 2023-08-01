import React, { ReactNode, MouseEvent } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES: string[] = ["btn--primary", "btn--outline", "btn--test"];
const SIZES: string[] = ["btn--medium", "btn--large"];

export type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonStyle?: string;
  buttonSize?: string;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  buttonStyle = "btn--primary",
  buttonSize = "btn--medium",
  className,
}) => {
  const checkButtonStyle: string = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize: string = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${
          className || ""
        }`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
