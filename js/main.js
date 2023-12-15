const nav=document.querySelector(".nav");
const myslidenav=document.querySelector("#myslidenav");
const main=document.querySelector("#main");
const iconA=document.querySelectorAll(".icon-a");
const icon=document.querySelectorAll(".icon")
const logo=document.querySelector(".logo");


nav.addEventListener("click", function(){
    myslidenav.classList.toggle("active")
    main.classList.toggle("active")
    logo.classList.toggle("active")
    iconA.forEach(item => {
        item.classList.toggle("active")
    })
    icon.forEach(item =>{
        item.classList.toggle('active')
    })
})