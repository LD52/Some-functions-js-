function getBudgets(arr) {
    let sum = 0;
   for (let i = 0; i <arr.length; i++){
       let Bud=  arr[i].budget;
       sum += Bud
   } return sum
}