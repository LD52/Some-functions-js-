function countTrue(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == true){
            count = count + 1;
        }
    }
    return count;
}