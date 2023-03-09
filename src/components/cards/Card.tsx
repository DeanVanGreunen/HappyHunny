import React, { useState, useEffect } from "react";

export type CardProp = {
  isHover: boolean;
  isShow: boolean;
  imageURL: string;
  onHover: (event: React.MouseEvent<HTMLElement>) => void;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const CardStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

export default function Card(props: CardProp) {
  return (
    <div style={CardStyle} onClick={props.onClick} onMouseEnter={onHover}></div>
  );
}
