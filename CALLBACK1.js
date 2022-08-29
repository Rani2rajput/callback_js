// const funA = (friends,a) => {
//     setTimeout(function (){
//         console.log(`welcome funA ${friends}`)
//         a();
//     },5000);
        
// }
// const funB = () =>{
//     console.log("welcome to funB")

// }
// funA("rani",funB);







const funA = (friends,a) => {
    setTimeout(function (){
        console.log("welcome to funA",friends)
        // a();
    },5000);
    a();
    
}
const funB = () =>{
    console.log("welcome to funB")

}
funA("rani",funB);

