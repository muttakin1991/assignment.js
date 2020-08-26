function brickCalculator(floor){
    var totalBrick = 0;
    if(floor <= 10){
        totalBrick = floor * 15 * 1000;
    }
    else if(floor <= 20){
        totalBrick = (floor * 15 * 1000) + ((floor - 10) * 12 * 1000);
    }
    else{
        totalBrick = (floor * 15 *1000) + ((floor -10) * 12 * 1000) +((floor -20) * 10 * 1000);
    }
    return totalBrick;      
}

var result = brickCalculator(17);
console.log(result);