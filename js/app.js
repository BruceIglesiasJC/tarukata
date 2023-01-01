const btn = document.getElementById("burguer");
const list = document.getElementById("nav__div2__ul");

btn.addEventListener("click", ()=>{
    list.classList.toggle("hidden")
})

