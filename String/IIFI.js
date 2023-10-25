((item)=>console.log("DB Connected ",item))(1000);
(function Heero(i){
    console.log("DB Connected ",i)
})(100);
//Global scope Poolution prevent use it.
let sym = Symbol("J");
if(sym){
    console.log(typeof sym)
}
let obj = [78,90,854,43]
let ob = {...obj}
console.log(ob)