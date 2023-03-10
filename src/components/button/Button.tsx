import React, { useState, useEffect } from "react";

export type ButtonProp = {
  text: string;
  isHover: boolean;
  onHover: (event: React.MouseEvent<HTMLElement>) => void;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  buttonHoverStyle: Object;
  buttonStyle: Object;
};

const ButtonStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const ButtonHoverStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

export default function Button(props: ButtonProp) {
  return (
    <button
      style={
        !props.isHover
          ? { ...ButtonStyle, ...props.buttonStyle }
          : { ...ButtonHoverStyle, ...props.buttonHoverStyle }
      }
    >
      {props.text}
    </button>
  );
}
