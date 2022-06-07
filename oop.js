class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.job =""
    }

     getname() {
        return this.name;
    }

    getage() {
        return this.age;
    }

    setjob(job){
        this.job = job;
    }
}

let person1 = new Person("moses", 20);
console.log(person1.getname());

let person2 = new Person("mmike", 20);
console.log(person1.getage()); 

class House {

    constructor(address, date, residents){
        this.address = address;
        this.date = date;
        this.residents = residents;
    }

    getaddress(){
        return this.address
    };

    getdate(){
        return this.date
    };
    getresident(){
        return this.residents
    };


    //adding a new residents 

    addresident(resident){
        this.residents.push(resident);
    }

}
//let moses = new Person("mmmmmm", 34)

//let miike = new Person("mmmmmm", 34)

/* 
let house = new House("jdjdjddjdjd", 12-1-1997, [person1, person2] );
console.log(house.getresident());
let mike = new Person ("chidim", 28)
house.addresident(mike); */
/* let pedro = new Person("moses", 17)
let house1 = new House("dadadada", 2022, [])
house1.addresident(pedro);
pedro.setjob("Developer");

console.log(house1.getresident());
 */

class property extends House {

    constructor(address, date, chair, bag, cloth){
        super (address,date )
        this.chair = chair
        this.bag = bag
        this.cloth = cloth
    }

  /*   getbag(){
       return this.bag
    }; */

    myprop(){
        console.log("hello, i have a "+ this.getaddress() +" and " +this.getdate()+ " and 500 " +this.chair + " living at " +this.bag+" and a resident of "+this.cloth )
    };

}

/* let prop = new property ("chair", "gucci bag", "chelsea", "Ogundipe Street", 9);
prop.myprop(); */

/* Polymophism */
