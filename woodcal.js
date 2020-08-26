function woodCalculator(chair, table, khat){
   var chairNumber = chair * 1;
   var tableNumber = table * 3;
   var khatNumber = khat * 5;
   var total = chairNumber + tableNumber + khatNumber;
   return total;
}
var wood = woodCalculator(3, 5, 2);
console.log(wood);