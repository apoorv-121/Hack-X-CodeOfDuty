import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import diceGIF from "../../../assets/images/dice.gif";
import diceImg from "../../../assets/images/diceImg.jpg";
import "./game.css";
import { activityData, activityDataArray } from "../../../constants/game";
import axios from "axios";
const Game = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("water");
  const [thrown, setThrown] = useState(0);
  const [selected, setSelected] = useState(new Set());

  const skipHandler = () => {
    setThrown(2);
    if (selected.size === 3) {
      setThrown(3);
      return;
    }

    let ind = parseInt((Math.random() * 10) % activityDataArray.length);
    while (selected.has(activityDataArray[ind])) {
      ind = parseInt((Math.random() * 10) % activityDataArray.length);
      ind = ind % activityDataArray.length;
    }
    const newSet = new Set(JSON.parse(JSON.stringify(Array.from(selected))));
    newSet.add(activityDataArray[ind]);
    setType(activityDataArray[ind]);
    setSelected(newSet);
  };

  const selectHandler = async (title, points) => {
    const response = await axios.post("http://localhost:8000/activities", {
      title,
      points,
    });
    console.log(points);
    navigate("/activity");
  };

  return (
    <div className="dice-wrap">
      {(thrown === 0 || thrown === 1) && (
        <div
          style={{
            backgroundImage: `url(${
              thrown === 1
                ? diceGIF
                : thrown === 0
                ? diceImg
                : activityData[type].url
            })`,
          }}
          // style={{ backgroundImage: `url(${activityData[type].url})` }}
          // style={{
          //   backgroundImage:
          //     "url('https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80')",
          // }}
          className="dice"
          alt="Example GIF"
        >
          <div className="dice-btn-wrap">
            <div className="dice-btn">
              {thrown === 0 && (
                <button
                  className="btn dice-tap-btn"
                  onClick={() => {
                    setThrown(1);
                    setTimeout(() => {
                      setThrown(2);
                    }, 2000);
                  }}
                >
                  Tap to roll Dice
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {(thrown === 2 || thrown === 3) && (
        <div
          className="gameactivity"
          style={{ backgroundImage: `url(${activityData[type].url})` }}
        >
          <div className="gameactivitytop">
            <h3>
              {" "}
              {activityData[type].title} ({activityData[type].crp} points{")"}
            </h3>
          </div>
          <div className="gameactivitybottom">
            <div className="gameactivitydisc">
              {thrown === 2 && <p>{activityData[type].desc}</p>}
              {thrown === 3 && <p>No Activities left!!</p>}
            </div>
            <div className="gameactivitybuttons">
              {thrown === 2 && (
                <button
                  onClick={() => {
                    setThrown(1);
                    setTimeout(skipHandler, 2000);
                  }}
                >
                  Skip
                </button>
              )}
              {thrown === 2 && (
                <button
                  onClick={() => {
                    selectHandler(
                      activityData[type].title,
                      activityData[type].crp
                    );
                  }}
                >
                  Select
                </button>
              )}
              {thrown === 3 && (
                <p>Oops ,You have to choose from three chances only</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
