const buscar = document.getElementById("buscar");
const buscando = document.getElementById("buscando");

buscar.addEventListener("click",(e)=>{
    if(buscando.style.display ==="flex"){
        buscando.style.display ="none";
    }
    else{
        buscando.style.display ="flex";
        buscando.style.transition =  ".5s";
    }
})

//slide 
let time = 3000,
    currentImagemIndex =0 ;
    imagens = document.querySelectorAll("#slide img");
    max = imagens.length;
    navBar = document.getElementById("navBar")
    var coordenadasNavBar = navBar.getBoundingClientRect();
   
function nextImg(){
    imagens[currentImagemIndex]
        .classList.remove("select");

    currentImagemIndex ++

    if(currentImagemIndex >= max){
        currentImagemIndex = 0;
    }

    imagens[currentImagemIndex].classList.add("select");

   


}
function start(){
    setInterval(() =>{
        nextImg();
    },time)
}
window.addEventListener("load", start,);