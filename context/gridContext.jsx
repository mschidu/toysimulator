import { createContext, useState, useEffect } from "react";
import { createGrid } from "../helpers/createGrid";

export const GridContext = createContext();

export function GridProvider({ children }) {
  const [position, setPosition] = useState({ x: null, y: null, facing: null });
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(createGrid());
  }, []);

  const placeRobot = (x, y, facing) => {
    setPosition({ x, y, facing });
  };

  const moveRobot = () => {
    if (position.facing === null || position.facing === undefined) {
      alert("place the robo to move");
    }
    const { x, y, facing } = position;

    let newX = x;
    let newY = y;

    switch (facing) {
      case "NORTH":
        newY = Math.max(0, y - 1);
        break;
      case "SOUTH":
        newY = Math.min(4, y + 1);
        break;
      case "EAST":
        newX = Math.min(4, x + 1);
        break;
      case "WEST":
        newX = Math.max(0, x - 1);
        break;
      default:
        break;
    }

    setPosition({ x: newX, y: newY, facing });
  };

  const turnLeft = () => {
    if (position.facing === null || position.facing === undefined) {
      alert("place the robo to move");
    }
    const { facing } = position;
    let newFacing;
    switch (facing) {
      case "NORTH":
        newFacing = "WEST";
        break;
      case "SOUTH":
        newFacing = "EAST";
        break;
      case "EAST":
        newFacing = "NORTH";
        break;
      case "WEST":
        newFacing = "SOUTH";
        break;
      default:
        break;
    }
    setPosition({ ...position, facing: newFacing });
  };

  const turnRight = () => {
    if (position.facing === null || position.facing === undefined) {
      alert("place the robo to move");
    }
    const { facing } = position;
    let newFacing;
    switch (facing) {
      case "NORTH":
        newFacing = "EAST";
        break;
      case "SOUTH":
        newFacing = "WEST";
        break;
      case "EAST":
        newFacing = "SOUTH";
        break;
      case "WEST":
        newFacing = "NORTH";
        break;
      default:
        break;
    }
    setPosition({ ...position, facing: newFacing });
  };

  const reportPosition = () => {
    if (position.facing === null || position.facing === undefined) {
      alert("place the robo to move");
    } else {
      alert(`Position: ${position.x}, ${position.y}, ${position.facing}`);
    }
  };

  const value = {
    position,
    grid,
    placeRobot,
    turnRight,
    turnLeft,
    moveRobot,
    reportPosition,
  };

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
}
