// this custom hook is for getting the user keyboard inputs and sending it to player component so that
// player can act according to the user inputs

import { useCallback, useEffect, useState } from "react";

function actionByKey(key) {
  const keyActionMap = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
    Digit1: "dirt",
    Digit2: "glass",
    Digit3: "grass",
    Digit4: "log",
    Digit5: "wood",
  };
  return keyActionMap[key];
}

export const useKeyBoard = () => {
  const [action, setAction] = useState({
    moveForward : false,
    moveBackward : false,
    moveLeft : false,
    moveRight : false,
    jump : false,
    dirt : false,
    glass : false,
    grass:  false,
    log : false,
    wood : false
  }
    
  );

  const handleKeyDown = useCallback((e) => {
    const act = actionByKey(e.code);
    if (act) {
      setAction((prev) => {
        return { ...prev, [act]: true };
      });
    }
  },[]);

  const handleKeyUp = useCallback((e) => {
    const act = actionByKey(e.code);
    if (act) {
      setAction((prev) => {
        return { ...prev, [act]: false };
      });
    }
  },[]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return action;
};
