function Pair(tab){
let sum = 0; 
for (let i = 0;i <tab.length; i++){
    if (tab [i]%2 === 0){
        sum += tab [i] ; 
    }  
} return sum
}
console.log (Pair([ 1,4, 2, 3,5]))