function longer(str){
    let tab= str.split(" ");
     let arr= [];
    for(let i = 0; i <tab.length; i++){
    arr.push(tab[i].length);
    //let max = Math.max(...arr)
    }  return (Math.max(...arr));
} 