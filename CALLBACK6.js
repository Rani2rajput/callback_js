// function greet(name,myfuntion){
//     console.log("hellow world")
//     myfuntion();
// }
// function sayname(name){
//     console.log(`hi ${name}`)
// }
// setTimeout(greet,2000,"john",sayname)






function greet(name,myfunction){
    setTimeout(function(){
        console.log("hellow wold")
        myfunction();
    },2000)
   
}

function add(name){
    console.log(`hi ${name}`)
}
greet(add("Rani"))

