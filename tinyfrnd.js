var friend = ["afnan", "saif", "thasim", "ami"];
function tinyFriend(arr){
    var tiny = arr [0];
    for(var i = 0; i < arr.length; i++){
        var element = arr[i];
        if(tiny.length < element.length){
           element = tiny;
        }
    }
    return element;
}
var tinyfrnd = tinyFriend(friend);
console.log(tinyfrnd);
