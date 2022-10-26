//Answer
function betterThanAverage(classPoints, yourPoints) {
    let classAverage = classPoints.reduce((acc, c) => acc + c, 0)/classPoints.length
    
    if(yourPoints > classAverage){
      return true
    }else{
      return false
    }
  }
  