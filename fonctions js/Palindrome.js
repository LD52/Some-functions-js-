function Palindrome(str){
    let shuffle = str.split("").reverse("").join("");
    if (str === shuffle){
        return "Oui c'est un palindrome";
    } else {
        return "Non ce n'est pas un palindrome";
    }
    }