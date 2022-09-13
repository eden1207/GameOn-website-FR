function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// -------------------------------------------------------------------- //

// DOM Elements
//const modalbg = document.querySelector(".bground");
//const modalBtn = document.querySelectorAll(".modal-btn");
//const formData = document.querySelectorAll(".formData");

// launch modal event
//modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
//function launchModal() {
//  modalbg.style.display = "block";
//}

// -------------------------------------------------------------------- //

// Ma version de DOM Elements

// Class associées au conteneur de la fenêtre "formulaire" et de la fenêtre de confirmation d'inscription
const modalbg = document.querySelector(".bground");
const modalConfirmbg = document.querySelector(".confirm-bground");

const modalbg3 = document.querySelector(".bground3"); // Fenêtre "Nope !" pour les tests de messages d'erreurs
const bla = 0; // constante pour tester les messages d'erreurs

// Les boutons

// Boutons d'ouverture de fenêtres (formulaire et confirmation)
const modalBtn = document.querySelectorAll(".modal-btn");
const submitBtn = document.querySelectorAll(".btn-submit");

// Boutons de fermeture de fenêtre
const closeBtn = document.querySelectorAll(".close");
const closeConfirmBtn = document.querySelectorAll(".close-confirm-button");

const formData = document.querySelectorAll(".formData");
//const confirmbg = document.querySelector(".confirm-window");
//const btnsubmit = document.querySelectorAll(".btn-submit");

// Ma version de launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
submitBtn.forEach((btn) => btn.addEventListener("click", launchConfirm));
closeBtn.forEach((btn) => btn.addEventListener("click", closeWindow));
closeConfirmBtn.forEach((btn) => btn.addEventListener("click", closeWindow));


// Ma version de launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//function launchConfirm() {
  //modalbg.style.display = "none";
  //if(bla == 0) {
    //modalConfirmbg.style.display = "block";
  //}else{
    //modalbg3.style.display = "block";
  //}
//}

function launchConfirm() {
  modalbg.style.display = "none";
  modalConfirmbg.style.display = "block";
}

function closeWindow() {
  modalbg.style.display = "none";  
  modalConfirmbg.style.display = "none";
}

//function launchSubmit(){
//  confirmbg.style.display = "block";
//}


