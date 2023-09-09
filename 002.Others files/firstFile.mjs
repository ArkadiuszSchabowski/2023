function GetVariable(value){
    if(value > 0 ){
        let result = "Wartosc wieksza od zera";
        return result;
    }
    else if (value < 0){
        let result = "Wartosc mniejsza od zera";
        return result;
    }
    else{
        let result = "Wartosc rowna zero";
        return result;
    }
}

export {GetVariable};