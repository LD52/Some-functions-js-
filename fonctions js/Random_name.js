function getRandomNumber(arr){
    let Name1= prompt("Enter the first name :");
    let Name2= prompt("Enter the second name :");
    let Name3= prompt("Enter the third name : ");
    var arr= [Name1, Name2, Name3];
    var random= arr[Math.floor(Math.random() * arr.length)]
}
console.log(random)