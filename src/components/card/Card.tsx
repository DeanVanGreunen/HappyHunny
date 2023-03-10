import React, { useState } from "react";

import "./card.css";

export type CardProp = {
  index: number;
  isFlipped: boolean;
  completedImageURL: string;
  onClick: (index: number, event: React.MouseEvent<HTMLElement>) => void;
};

export default function Card(props: CardProp) {
  const { onClick, isFlipped } = props;
  return (
    <div
      className="card"
      onClick={(event) => {
        if (!isFlipped) onClick(props.index, event);
      }}
    >
      {!isFlipped ? (
        <div className="inner1">
          <div className="inner2"></div>
        </div>
      ) : (
        <div
          style={{
            display: "block",
            backgroundImage: "url(" + props.completedImageURL + ")",
            width: "100%",
            height: "100%",
          }}
        ></div>
      )}
    </div>
  );
}
