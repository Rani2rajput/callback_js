function add(a,b,callback){
    var c=(a+b)
    console.log(`the sum of ${c}`)
    callback();
}
add(2,4,function disp(){
    console.log("printed after addition")

})
disp()