// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  if (distance > 42) {
  return (distance - 42)
  } else {
  return (42 - distance)
  }
}

function distanceFromHqInFeet (distance) {
  if (distance > 42) {
  return ((distance - 42) * 264)
   } else {
     return ((42 - distance) * 264)
   }
  }
  
  function distanceTravelledInFeet (distance) {
    return ((distance - 42) * 264)
  }
