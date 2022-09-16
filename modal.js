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

// Les boutons

// Boutons d'ouverture de fenêtres (formulaire et confirmation)
const modalBtn = document.querySelectorAll(".modal-btn");
const submitBtn = document.getElementById("btn-submit");

// Boutons de fermeture de fenêtre
const closeBtn = document.querySelectorAll(".close");
const closeConfirmBtn = document.querySelectorAll(".close-confirm-button");

const formData = document.querySelectorAll(".formData");
//const confirmbg = document.querySelector(".confirm-window");
//const btnsubmit = document.querySelectorAll(".btn-submit");

// Les variables correspondand aux entrées dans le formulaire

const firstname = document.getElementById('first');
const surname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const NumberofTournament = document.getElementById('quantity');

//const checkIcon1 = document.getElementById('checkbox1:checked');
//const checkbox = document.querySelector('input[type="checkbox"]:checked');


// Regex pour vérification du @ dans l'adresse mail
const ckeckingMail = /@/;

// Ma version de launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
submitBtn.addEventListener("click", launchConfirm);
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

const radiobox = document.querySelector('input[type="radio"]:checked');
const checkbox = document.querySelector('input[id="checkbox1"]:checked');


function launchConfirm() {
  if(firstname.value.length < 2 || surname.value.length < 2 || birthdate.value.length === 0 || ckeckingMail.test(email.value) == false || NumberofTournament.value.length === 0 || radiobox.checked !== true || checkbox.checked !== true){
    errorMessage();

    /*const radioBtn = document.getElementById('location6');*/
    //const checkbox = document.querySelector('input[id="checkbox1"]:checked');
    //const checkbox = document.getElementById('checkbox1:checked');
    //console.log(checkbox.checked);

    console.log('Erreur');
    //console.log(checkIcon1.ckecked);
  }else{
    modalbg.style.display = "none";
    modalConfirmbg.style.display = "block";
  }
}

function errorMessage() {
  if(firstname.value.length < 2){
    const error1 = document.getElementById("error1");
    error1.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  }
  if(surname.value.length < 2){
    const error2 = document.getElementById("error2");
    error2.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  if(ckeckingMail.test(email.value) == false){
    const error3 = document.getElementById("error3");
    error3.innerHTML = "Vous devez saisir une adresse valide.";
  }
  if(birthdate.value.length === 0){
    const error4 = document.getElementById("error4");
    error4.innerHTML = "Vous devez entrer votre date de naissance.";
  }
  if(NumberofTournament.value.length === 0){
    const error5 = document.getElementById("error5");
    error5.innerHTML = "Vous devez saisir une valeur numérique.";
  }
  if(radiobox.checked !== true){
    const error6 = document.getElementById("error6");
    error6.innerHTML = "Vous devez choisir une option.";
  }
  if(checkbox.checked !== true){
    const error7 = document.getElementById("error7");
    error7.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
  }
}

function closeWindow() {
  modalbg.style.display = "none";  
  modalConfirmbg.style.display = "none";
}

//function launchSubmit(){
//  confirmbg.style.display = "block";
//}


