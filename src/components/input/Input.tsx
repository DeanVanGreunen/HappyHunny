import React, { useState, useEffect } from "react";

export type InputProp = {
  placeholderText: string;
  isHover: boolean;
  onChange: (event: React.MouseEvent<HTMLElement>) => void;
  InputHoverStyle: Object;
  InputStyle: Object;
};

const InputStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const InputHoverStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

export default function Input(props: InputProp) {
  return (
    <input
      type="checkbox"
      style={
        !props.isHover
          ? { ...InputStyle, ...props.InputStyle }
          : { ...InputHoverStyle, ...props.InputHoverStyle }
      }
      placeholder={props.placeholderText}
    />
  );
}
