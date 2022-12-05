// answer
function solution(number) {
    let multArr = []
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            multArr.push(i)
        } else if (i % 3 === 0) {
            multArr.push(i)
        } else if (i % 5 === 0) {
            multArr.push(i)
        }
    }
    return multArr.reduce((acc, c) => {
        return acc + c
    }, 0)
}