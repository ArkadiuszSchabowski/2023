function Addition(a,b){
    let c = a +b;
    console.log("Wynik=" + c);
}
Addition(9,1)

let Substraction = (a,b) => console.log(a-b);

Substraction(10,6);

let GetValue = a => console.log(a);

GetValue(7);

let Division = (a,b) => {
    let c = a/b;
    console.log(c);
}
Division(15,5);

let DivisionShort = (a,b) => a/b;
let result = DivisionShort(18,6);
console.log(`Result: DivisionShort: ${result}`);

const splitFunction = str => str.split(" ");
var result2 = splitFunction("a b c");
console.log(result2);

//Zrobic tablice podzielna przez 3;
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let dividedByThree = array.filter(v => v % 3 === 0);
console.log(dividedByThree);

const show = (...params) => console.log("Liczby funkcji show to: " + params);

show(10,20,45,69);
