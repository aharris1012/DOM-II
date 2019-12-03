// Your code goes here
const busImg = document.querySelector(".intro img")

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform ="scale(0.5)";
    busImg.style.transition ="transform 2s"
})

busImg.addEventListener("mouseleave",() =>{
    busImg.style.transform ="scale(1)"
})


const Logo= document.querySelector(".logo-heading")

Logo.addEventListener("click", () => {
    Logo.style.fontSize ="7rem"; 
    Logo.style.color="#ffd800";
})

const swapImg = document.querySelector("img-fluid rounded")

swapImg.addEventListener("click", () => {
    swapImg.src=""

})