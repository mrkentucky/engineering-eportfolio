const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("show"));
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>navLinks.classList.remove("show")));
function openModal(id){const m=document.getElementById(id);m.classList.add("open");document.body.style.overflow="hidden";}
function closeModal(id){const m=document.getElementById(id);m.classList.remove("open");document.body.style.overflow="";}
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)closeModal(m.id);}));
document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".modal.open").forEach(m=>closeModal(m.id));});
