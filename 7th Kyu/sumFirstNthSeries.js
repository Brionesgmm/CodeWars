// answer
function SeriesSum(n)
{
  if(n == 0) {
    return '0.00'
  } else if(n == 1){
    return '1.00'
  }else{
    let total = 1
    let count = 1
    for(let i = 1; i < n; i++) {
      count+=3
      total += (1/ (count))
    }
  return total.toFixed(2).toString()
  }
}