import React, { useState, useRef, useEffect } from "react";
import { type Color } from "../lib/types";

type ButtonProps1 = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

type User = {
  name: string;
  age: number;
};

interface SimpleButtonProps {
  type: "button" | "submit";
  color: "red" | "blue";
}

interface SuperButtonProps extends SimpleButtonProps {
  size: "md" | "lg";
}

type ButtonProps = {
  children: React.ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  backgroundColor?: Color;
  textColor?: Color[];
  fontSize?: number;
  pillShape?: boolean;
  padding?: [number, number];
  style?: React.CSSProperties;
  borderRadius?: Record<string, number>;
  onClick?: (test: string) => number;
};

export function Button1({
  children,
  setCount,
  backgroundColor,
  textColor,
  fontSize,
  pillShape,
  padding,
  style,
  borderRadius,
  onClick,
}: ButtonProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("Clicked!!!");
  };
  const [text, setText] = useState("Click");
  const [user, setUser] = useState<User | null>(null);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      onClick={handleClick}
      className="btn btn-primary text-light px-4 py-2"
      ref={ref}
    >
      {children}
    </button>
  );
}

const buttonTextOptions = ["Click me", "Click me again"] as const;
type Person = {
  name: string;
  age: number;
};
type Guest = Omit<Person, "name">;

export function Button2({ type, autoFocus, ...rest }: ButtonProps1) {
  useEffect(() => {
    const previousButtonColor = localStorage.getItem("buttonColor") as Color;
  }, []);

  useEffect(() => {
    fetch("https..")
      .then((response) => response.json())
      .then((data: unknown) => {});
  }, []);

  return (
    <button type={type} className="btn btn-warning text-light px-4 py-2 m-2">
      {buttonTextOptions.map((option) => {
        return option;
      })}
    </button>
  );
}
