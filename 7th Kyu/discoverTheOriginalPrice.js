// answer
function discoverOriginalPrice(discountedPrice, salePercentage) {
    let total = discountedPrice / (1 - (salePercentage / 100))
    return Number(total.toFixed(2))
}