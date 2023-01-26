function matchHouses(step) {
    if (step > 0){
         let sub= step - 1
           let multiply =  6+(sub *5)
           return multiply
    } 
   else if (step ===1){
        return 6
    }
   else {
    return 0
   }
}