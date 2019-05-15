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
  
  function distanceTravelledInFeet (starting, ending) {
    if (starting > ending) {
      return ((starting - ending) * 264)
    } else {
      return ((ending - starting) * 264)
    }
  }
  
  function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet 
    if (distance < 400) 
    return 0 
  }
