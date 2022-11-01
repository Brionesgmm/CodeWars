function DNAStrand(dna) {
    let dnaArray = dna.split("")
    let dnaComp = dnaArray.map(el => {
        if (el === "A") {
            return "T"
        } else if (el === "T") {
            return "A"
        } else if (el === "G") {
            return "C"
        } else {
            return "G"
        }
    })

    return dnaComp.join("")
}