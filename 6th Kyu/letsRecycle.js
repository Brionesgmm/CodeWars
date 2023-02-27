// answer
function recycle(array) {
    let paper = []
    let glass = []
    let organic = []
    let plastic = []

    array.forEach(el => {
        if (el.material === 'paper' || el.secondMaterial === 'paper') {
            paper.push(el.type)
        }
    })
    array.forEach(el => {
        if (el.material === 'glass' || el.secondMaterial === 'glass') {
            glass.push(el.type)
        }
    })
    array.forEach(el => {
        if (el.material === 'organic' || el.secondMaterial === 'organic') {
            organic.push(el.type)
        }
    })
    array.forEach(el => {
        if (el.material === 'plastic' || el.secondMaterial === 'plastic') {
            plastic.push(el.type)
        }
    })

    return [paper, glass, organic, plastic]
}