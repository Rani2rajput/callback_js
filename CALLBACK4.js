function greet(name,callback){
    setTimeout(function(){
        console.log(`hi ${name}`)
        callback();
    },3000)
}
function add(callme){
    console.log("i am callback fun")

}
greet("peter",add)                               