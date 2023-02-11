// answer
function isIsogram(str){
    let strArr = str.split("").map(el => el.toLowerCase())
    
    let resultArr = strArr.map(el => {
      if(strArr.indexOf(el) === strArr.lastIndexOf(el)){
        return true  
      
      }else{
         return false
      }
    })
    
    console.log(resultArr)
    
    if(resultArr.includes(false)){
      return false
    }else{
      return true
    }
    
  }