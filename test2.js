const modalbg1 = document.querySelector(".bground1");
const modalbg2 = document.querySelector(".bground2");
const modalbg3 = document.querySelector(".bground3"); 

const modalBtn = document.querySelectorAll(".modal-btn");
const submitBtn = document.querySelectorAll(".btn-submit");

const closeBtn = document.querySelectorAll(".close-btn");
//const closeBtn2 = document.querySelectorAll(".close-btn2");

const bla = 0;

const input = document.querySelector("input");
const minLength = input.getAttribute("minlenght");


const names = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("erreur");

form.addEventListener('submit', (e) => {
  let messages = [];
  if (names.value == '' || names.value == null) {
    messages.push('Nom ?');
  } 

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
})










modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
submitBtn.forEach((btn) => btn.addEventListener("click", launchConfirm));
closeBtn.forEach((btn) => btn.addEventListener("click", closeWindow));
//*closeBtn2.forEach((btn) => btn.addEventListener("click", closeWindow2));*/


function launchModal() {
  modalbg1.style.display = "block";
}

/*function launchConfirm() {
  modalbg1.style.display = "none";  
  if(bla == 0) {
    modalbg2.style.display = "block";
  }else{
    modalbg3.style.display = "block";
  }
}*/

function launchConfirm() {
    modalbg1.style.display = "none";  
    if(bla == 0) {
      modalbg2.style.display = "block";
    }else{
      modalbg3.style.display = "block";
    }
}

function closeWindow() {
  modalbg1.style.display = "none";  
  modalbg2.style.display = "none";
}

//function closeWindow2() {
    //modalbg1.style.display = "none";
//}