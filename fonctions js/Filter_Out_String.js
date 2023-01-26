function filterArray(arr) {
    let numberTab = [];
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] == "number"){
            numberTab.push(arr[i]);
        }
    }
    return numberTab;
}