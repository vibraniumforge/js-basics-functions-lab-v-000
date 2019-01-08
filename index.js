// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  return Math.abs(location-42);
}

function distanceFromHqInFeet(location) {
  return Math.abs(location-42)*264;
}

function distanceTravelledInFeet(a,b) {
  return Math.abs(a-b)*264;
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  }
  if (distanceTravelledInFeet < 400) {
    return 0;
  }
  if (distanceTravelledInFeet > 400 && distanceTravelledInFeet < 2000) {
    return distanceTravelledInFeet * .02;
  }
  if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet < 2500) {
    return 25;
  }
  if (distanceTravelledInFeet > 2500) {
    return "cannot travel that far";
  }
}
