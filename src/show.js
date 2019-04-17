import React, { useState, useEffect } from "react";

const UP_THRESHOLD = 0;
const DOWN_THRESHOLD = 360;
const LEFT_THRESHOLD = 0;
const RIGHT_THRESHOLD = 560;

const showMove = (value, axis, direction) => {
  if (axis === "x") {
    if (direction === "left") {
      return value <= LEFT_THRESHOLD;
    } else {
      return value >= RIGHT_THRESHOLD;
    }
  } else {
    if (direction === "up") {
      return value <= UP_THRESHOLD;
    } else {
      return value >= DOWN_THRESHOLD;
    }
  }
};
export const ShowComponent = props => {
  const [playerPositionX, changePlayerPositionX] = useState(0);
  const [playerPositionY, changePlayerPositionY] = useState(0);
  const [status, setStatus] = useState("constructor");
  const moveUp = () => {
    changePlayerPositionY(
      showMove(playerPositionY, "y", "up")
        ? playerPositionY
        : playerPositionY - 40
    );
  };

  const moveDown = () => {
    changePlayerPositionY(
      showMove(playerPositionY, "y", "down")
        ? playerPositionY
        : playerPositionY + 40
    );
  };

  const moveLeft = () => {
    changePlayerPositionX(
      showMove(playerPositionX, "x", "left")
        ? playerPositionX
        : playerPositionX - 40
    );
  };

  const moveRight = () => {
    changePlayerPositionX(
      showMove(playerPositionX, "x", "right")
        ? playerPositionX
        : playerPositionX + 40
    );
  };

  useEffect(() => {
    if (props.debugMode) {
      alert("Game Component=> Component Did Mount Called!");
    }
    setStatus("Component Did Mount");
    return () => {
      if (props.debugMode) {
        alert("Game Component=> Component Will Unmount Called!");
      }
      setStatus("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    if (props.debugMode) {
      alert("Game Component=> ComponentWillReceiveProps Called!");
    }
    setStatus("Component Will Receive Props");
  }, [props.color, props.debugMode]);

  useEffect(() => {
    if (props.debugMode) {
      alert("Game Component=> ComponentWillUpdate Called!");
    }
    setStatus("Component Will Receive Props");
  }, [playerPositionX, playerPositionY]);
  return (
    <div className="game-container">
      <div className="show-main">
        <div
          className="player"
          style={{
            top: playerPositionY,
            left: playerPositionX,
            backgroundColor: props.color
          }}
        />
      </div>
      <div className="console">
        <div className="status">Current State: {status}</div>
        <h4>Click on the buttons below to move the ball</h4>
        <button onClick={moveUp} className="control">
          UP
        </button>
        <div className="button-wrapper">
          <button onClick={moveLeft} className="control">
            LEFT
          </button>
          <button onClick={moveDown} className="control">
            DOWN
          </button>
          <button onClick={moveRight} className="control">
            RIGHT
          </button>
        </div>
      </div>
    </div>
  );
};
