class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sayHi(){
        console.log('Hi, I am ' + this.name + 'and I am ' + this.age + 'years old.')
    }
}