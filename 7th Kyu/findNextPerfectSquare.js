// Answer  
function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 === 0) {
        return (Math.sqrt(sq) + 1) ** 2
    }
    return -1;
}