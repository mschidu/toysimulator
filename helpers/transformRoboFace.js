export const transformRoboFace = (facing) => {
  let transform;
  switch (facing) {
    case "NORTH":
      transform = 0;
      break;
    case "SOUTH":
      transform = 180;
      break;
    case "WEST":
      transform = 270;
      break;
    case "EAST":
      transform = 90;
      break;
    default:
      break;
  }
  return transform;
};
