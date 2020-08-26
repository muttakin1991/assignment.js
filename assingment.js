function feetToMile(foot){
    var mile = foot/5280;
    mile = Math.round(mile);
    return mile;
}
var checkMile = feetToMile(20000);
console.log(checkMile);