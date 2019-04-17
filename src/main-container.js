import React, { useState, useEffect } from "react";
import { ShowComponent } from "./show";

export const MainContainer = () => {
  const [color, setColor] = useState("red");
  const [gameStatus, setShowgame] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const setRed = () => {
    setColor("red");
  };
  const setBlue = () => {
    setColor("blue");
  };
  const showGame = () => {
    setShowgame(true);
  };
  const destroyGame = () => {
    setShowgame(false);
  };
  const attachDebugger = () => {
    setDebugMode(true);
  };
  const detachDebugger = () => {
    setDebugMode(false);
  };
  return (
    <div className="main-container">
      <div>
        {debugMode ? (
          <button className="color-button" onClick={detachDebugger}>
            Turn Debug Mode OFF
          </button>
        ) : (
          <button className="color-button" onClick={attachDebugger}>
            Turn Debug Mode ON
          </button>
        )}
        {gameStatus ? (
          <div>
            <button className="color-button" onClick={setRed}>
              Red Ball
            </button>
            <button className="color-button" onClick={setBlue}>
              Blue Ball
            </button>
            <button className="color-button" onClick={destroyGame}>
              Destroy Game
            </button>
            <ShowComponent color={color} debugMode={debugMode} />
          </div>
        ) : (
          <div>
            <h2>Welcome to Ball Mover Game</h2>
            <h3>A Simple Demo of Hooks in React</h3>
            <h3>Click on Debug Mode ON to See the Hooks as alerts</h3>
            <h3>If you find it irritating, turn debug mode OFF</h3>
            <button className="color-button" onClick={showGame}>
              Start Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
