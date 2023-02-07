import React, { useState } from "react";

import GamePageImage from "./GamePageImage";
import Header from "./Header";

import "./GamePage.css";

const GamePage = () => {
  const [isShown, setIsShown] = useState(false);
  const [position, setPosition] = useState([0, 0]);
  const [winner, setWinner] = useState();

  const handleClick = (event) => {
    setIsShown((current) => !current);
    setPosition([event.pageX, event.pageY]);
    console.log(position);

    if (
      position[0] >= 464 &&
      position[0] <= 481 &&
      position[1] >= 1554 &&
      position[1] <= 1583
    ) {
      setWinner("Winner!");
    }
  };

  return (
    <>
      <div className="gamepage" onClick={handleClick}>
        <Header winner={winner} />
        <span className="winner">You Found Waldo!</span>
        {isShown && (
          <ul
            className="menu"
            style={{
              left: position[0],
              top: position[1],
              tranform: "translateX(-50%)",
              transform: "translateY(-50%)",
            }}
          >
            <li className="menu-item">Waldo</li>
          </ul>
        )}

        <GamePageImage />
      </div>
    </>
  );
};

export default GamePage;
