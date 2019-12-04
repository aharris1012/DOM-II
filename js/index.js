// Your code goes here


//1//
const busImg = document.querySelector(".intro img")

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform ="scale(0.5)";
    busImg.style.transition ="transform 2s"
})

//2//
busImg.addEventListener("mouseleave",() =>{
    busImg.style.transform ="scale(1)"
})

//3//
const Logo= document.querySelector(".logo-heading")

Logo.addEventListener("click", () => {
    Logo.style.fontSize ="7rem"; 
    Logo.style.color="#ffd800";
})

//4//
const Nav= document.querySelector("nav");

Nav.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor="#ffd800";
    
})

const Links = document.querySelector("nav-link"[1])



//5//
const swapImg = document.querySelector(".img-fluid")

swapImg.addEventListener("click", () => {
    swapImg.src="img/sedonabus.jpg";

})  

//6//
const DoubleImg = document.querySelector("h2")

DoubleImg.addEventListener("dblclick", () =>{
    DoubleImg.style.transform ="rotate(30deg)";
})

//7//
const Button= document.querySelectorAll(".btn").forEach (e =>{
    e.addEventListener("mousedown", function(){
    e.style.transform="scale(1.5)";
    e.style.transition ="transform 3s"

    })
})

//8//
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('contextmenu', () => {
        button.style.backgroundColor = "orange";
    })
})


//9//

content.forEach(thing => {
    thing.addEventListener("copy", () => {
        thing.style.color = 'yellow';
    })
}) 
 

//10//
