// answer
function absentVowel(x){
    let vowelArr = ['a', 'e', 'i', 'o', 'u']
    let missingVowel
    
    for(let i = 0; i < vowelArr.length; i++){
      if(x.split('').indexOf(vowelArr[i]) === -1){
        missingVowel = vowelArr[i]
      }
    }
      return vowelArr.indexOf(missingVowel)
    }