window.data = 99;

function Foo() {
    this.data = "test";
    this.printInfo = function() {
        setTimeout( () => {
            console.log(this.data);
        }, 1000);
    }
}
let foo = new Foo();
foo.printInfo();

function Foo2() {
    this.data = "test";
    this.printInfo = function() {
        setTimeout( function(){
            console.log(this.data);
        }, 1000);
    }
}
let foo2 = new Foo2();
foo2.printInfo();