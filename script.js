console.log("Digital Marketing Clone");

const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");

menu.onclick=()=>{
    nav.classList.toggle("active");
}