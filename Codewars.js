function findOutlier(integers) {
    const oddArray = [];
    const evenArray = [];
    for (let integer of integers) {
        if (integer % 2 === 0) {
            evenArray.push(integer);
        } else {
            oddArray.push(integer);
        }
    }
    return oddArray.length === 1 ? oddArray[0] : evenArray[0];
}
// - // // - // / // - // / // - // / // - // / // - /// // - /// // - /// // - /// // - /// // - /// // - /// // - /// // - /// // - //

function squareArea(A) {
    let a = A / (2 * Math.PI * (90 / 360));
    let area = Math.pow(a, 2);
    return Number(area.toFixed(2));
}

// - // // - // / // - // / // - // / // - // / // - /// // - /// // - /// // - /// // - /// // - /// // - /// // - /// // - /// // - //

function betterThanAverage(classPoints, yourPoints) {
    let media = 0
    classPoints = classPoints.concat(yourPoints)
    for (let i in classPoints) {
        media += classPoints[i]
    }
    return yourPoints > media / classPoints.length ? true : false
}

// - // // - // / // - // / // - // / // - // / // - /// // - /// // - /// // - /// // - /// // - /// // - /// // - /// // - /// // - //

function upArray(arr){
    let result = []
    arr.find(element => element < 0) != null ? result = null : result = Array.from(String(parseInt(arr.join("")) + 1), Number)
    return result
}