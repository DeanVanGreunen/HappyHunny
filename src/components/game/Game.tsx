import React, { useState, useEffect, useRef } from "react";
import Card, { CardProp } from "../card/Card";

import "./game.css";

import Image1 from "./../../assets/images/cards/1.png";
import Image2 from "./../../assets/images/cards/2.png";
import Image3 from "./../../assets/images/cards/3.png";
import Image4 from "./../../assets/images/cards/4.png";
import Image5 from "./../../assets/images/cards/5.png";

export type GameProp = {
  onReply: () => void;
};

// TODO: Generate These in conjunction with the above images
let matchOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Generates a new random list of pairs
const generatePairs = (options: number[]) => {
  let imgs: string[] = ["", "", "", "", "", "", "", "", "", ""];
  let optionCount = Math.floor(options.length / 2);
  let optionsRandomized: number[] = [
    ...options.sort(function () {
      return 0.5 - Math.random();
    }),
  ];
  let pairs = [];
  for (let i = 0; i < optionCount; i++) {
    let index1: number = optionsRandomized.pop() as number;
    let index2: number = optionsRandomized.pop() as number;
    pairs.push([index1, index2].sort());
    if (i === 0) {
      imgs[index1] = Image1;
      imgs[index2] = Image1;
    } else if (i === 1) {
      imgs[index1] = Image2;
      imgs[index2] = Image2;
    } else if (i === 2) {
      imgs[index1] = Image3;
      imgs[index2] = Image3;
    } else if (i === 3) {
      imgs[index1] = Image4;
      imgs[index2] = Image4;
    } else if (i === 4) {
      imgs[index1] = Image5;
      imgs[index2] = Image5;
    }
  }
  return [pairs, imgs];
};

let [matches, images] = generatePairs(matchOptions);

// Handles and Display the Game
export default function Game(props: any) {
  const defaultHistoryEntry = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  const [cards, setCards] = useState<any>([]);
  const [indexs, setIndexs] = useState<any>([]);
  const [activeHistory, setActiveHistory] = useState<any>([
    defaultHistoryEntry,
  ]);
  const handleCardClick = (index: number, event: any) => {
    // Handle if to match
    if (indexs.length !== 2) {
      if (!indexs.includes(index)) {
        setIndexs((original: any) => {
          return [...original, index];
        });
      }
    }
  };

  const doesArrayExistInAnotherArray = (arr: any, subarr: any) => {
    for (var i = 0; i < arr.length; i++) {
      let checker = false;
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === subarr[j]) {
          checker = true;
        } else {
          checker = false;
          break;
        }
      }
      if (checker) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    console.log("indexs", indexs);
    console.log("Clicked");
    let sortedIndex = indexs.sort();
    if (sortedIndex.length === 2) {
      console.log("Has 2");
      console.log("sortedIndex", sortedIndex);
      if (doesArrayExistInAnotherArray(matches, sortedIndex)) {
        console.log("Has Match");
        setActiveHistory((original: any) => {
          let lastEntry = activeHistory.at(-1);
          lastEntry[sortedIndex[0]] = true;
          lastEntry[sortedIndex[1]] = true;
          original.push(lastEntry);
          return original;
        });
        setIndexs([]);
      } else {
        setTimeout(() => {
          // Timeout allows the selected cards to be displayed for a half a second, for the user to "remember" which card is which
          console.log("No Match");
          let lastEntry = activeHistory.at(-1);
          lastEntry[sortedIndex[0]] = false;
          lastEntry[sortedIndex[1]] = false;
          console.log(lastEntry);
          setActiveHistory((original: any) => {
            let lastEntry = activeHistory.at(-1);
            lastEntry[sortedIndex[0]] = false;
            lastEntry[sortedIndex[1]] = false;
            original.push(lastEntry);
            console.log(original);
            return original;
          });
          setIndexs([]);
        }, 500);
      }
    }
  }, [indexs]);

  useEffect(() => {
    let lastHistory = activeHistory.at(-1);
    let indexs0 = indexs[0] ?? -1;
    let indexs1 = indexs[1] ?? -1;
    setCards(
      <>
        <Card
          index={0}
          isFlipped={lastHistory[0] || indexs0 === 0 || indexs1 === 0}
          completedImageURL={images[0] as string}
          onClick={handleCardClick}
        ></Card>
        <Card
          index={1}
          isFlipped={lastHistory[1] || indexs0 === 1 || indexs1 === 1}
          completedImageURL={images[1] as string}
          onClick={handleCardClick}
        ></Card>
        <Card
          index={2}
          isFlipped={lastHistory[2] || indexs0 === 2 || indexs1 === 2}
          completedImageURL={images[2] as string}
          onClick={handleCardClick}
        ></Card>
        <Card
          index={3}
          isFlipped={lastHistory[3] || indexs0 === 3 || indexs1 === 3}
          completedImageURL={images[3] as string}
          onClick={handleCardClick}
        ></Card>
        <Card
          index={4}
          isFlipped={lastHistory[4] || indexs0 === 4 || indexs1 === 4}
          completedImageURL={images[4] as string}
          onClick={handleCardClick}
        ></Card>
        <Card
          index={5}
          isFlipped={lastHistory[5] || indexs0 === 5 || indexs1 === 5}
          completedImageURL={images[5] as string}
          onClick={handleCardClick}
        ></Card>
        <Card
          index={6}
          isFlipped={lastHistory[6] || indexs0 === 6 || indexs1 === 6}
          completedImageURL={images[6] as string}
          onClick={handleCardClick}
        ></Card>
        <Card
          index={7}
          isFlipped={lastHistory[7] || indexs0 === 7 || indexs1 === 7}
          completedImageURL={images[7] as string}
          onClick={handleCardClick}
        ></Card>
        <Card
          index={8}
          isFlipped={lastHistory[8] || indexs0 === 8 || indexs1 === 8}
          completedImageURL={images[8] as string}
          onClick={handleCardClick}
        ></Card>
        <Card
          index={9}
          isFlipped={lastHistory[9] || indexs0 === 9 || indexs1 === 9}
          completedImageURL={images[9] as string}
          onClick={handleCardClick}
        ></Card>
      </>
    );
  }, [indexs, activeHistory]);

  return <div className="GameContainer">{cards}</div>;
}
