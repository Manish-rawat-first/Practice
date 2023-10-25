let s = {
    1:"hello",
    2:"Moto",
    3:"Laddu"
}
console.log(s[2])
console.log(Object.keys(s))
console.log(Object.values(s))
console.log(Object.entries(s));
console.log(s.hasOwnProperty(1))//Check value exits or not.
const {1:ji} = s
//distractor
console.log(s[1]);
console.log(ji)