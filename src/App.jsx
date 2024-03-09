import React, { useContext } from "react";
import { GridContext } from "../context/gridContext";
import { transformRoboFace } from "../helpers/transformRoboFace";

function App() {
  const {
    position,
    grid,
    placeRobot,
    turnRight,
    turnLeft,
    moveRobot,
    reportPosition,
  } = useContext(GridContext);

  const renderCell = (row, col) => {
    const { x, y } = position;
    const isRobotHere = x === row && y === col;

    return (
      <div
        style={{
          transform: `rotate(${transformRoboFace(position.facing)}deg)`,
        }}
        key={`${row}-${col}`}
        className="robot">
        {isRobotHere && "🤖"}
      </div>
    );
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((_, colIndex) => (
          <div key={colIndex} className="cell">
            {renderCell(rowIndex, colIndex)}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="container">
      <h1>Simulate Toy Robot</h1>
      <div className="grid">{renderGrid()}</div>
      <div className="buttons">
        <button className="btn" onClick={() => placeRobot(0, 0, "NORTH")}>
          PLACE
        </button>
        <button className="btn" onClick={moveRobot}>
          MOVE
        </button>
        <button className="btn" onClick={turnLeft}>
          LEFT
        </button>
        <button className="btn" onClick={turnRight}>
          RIGHT
        </button>
        <button className="btn" onClick={reportPosition}>
          REPORT
        </button>
      </div>
    </div>
  );
}

export default App;
