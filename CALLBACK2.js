function show(){
    console.log("i am show function")


}
function geeky(callback){
    console.log("i am geeky funcion")
    callback();
    
}
geeky(show);



