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
    Nav.stopPropogation();
})




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
const contentColor = document.querySelectorAll('.text-content');

contentColor.forEach((textBox) => {
    window.addEventListener('keydown', (event) => {
        event.target.style.backgroundColor = 'yellow';
        console.log('keydown');
    })

//9//
window.addEventListener('keyup', (event) => {
    event.target.style.backgroundColor = '';
    console.log('keyup');
})
})

//10//
window.addEventListener('resize', function() {
    alert("DON'T SQUEEZZZ ME!");
})
 


