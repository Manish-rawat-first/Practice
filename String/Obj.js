const ob = {}
ob.greeting = ()=>"Hello"
console.log(ob.greeting)

let ob1 = {1:"Hello",2:"Ji"}
let ob2 = {3:"Zero",4:"Motorola"}
let ob3 = {...ob1,...ob2};
console.log(ob3)

let o4 = {
    grreting:{
        first:"Manish",
        last:"rawat"
    }
}
console.log(`${o4.grreting.first}`)
