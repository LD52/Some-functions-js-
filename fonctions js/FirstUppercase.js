function UpperFirstWord(str){
    let tab = str.split(" ");
    let arr = [];
    for (let i =0; i < tab.length; i++){
        arr.push(tab[i].replace(tab[i][0], tab[i][0].toUpperCase()));
    }
    return arr.join(" ");
}