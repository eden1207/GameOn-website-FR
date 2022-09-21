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
const modalbg = document.querySelector(".JS-bground");
const modalConfirmbg = document.querySelector(".JS-confirm-bground");

// Les boutons

// Boutons d'ouverture de fenêtres (formulaire et confirmation)
const modalBtn = document.querySelectorAll(".JS-modal-btn");
const submitBtn = document.getElementById("JS-btn-submit");

// Boutons de fermeture de fenêtre
const closeBtn = document.querySelectorAll(".JS-close");
const closeConfirmBtn = document.querySelectorAll(".JS-close-confirm-button");

const formData = document.querySelectorAll(".formData");
//const confirmbg = document.querySelector(".confirm-window");
//const btnsubmit = document.querySelectorAll(".btn-submit");

// Les variables correspondand aux entrées dans le formulaire

const firstname = document.getElementById('JS-first');
const surname = document.getElementById('JS-last');
const email = document.getElementById('JS-email');
const birthdate = document.getElementById('JS-birthdate');
const NumberofTournament = document.getElementById('JS-quantity');

const location1 = document.getElementById('JS-location1');
const location2 = document.getElementById('JS-location2');
const location3 = document.getElementById('JS-location3');
const location4 = document.getElementById('JS-location4');
const location5 = document.getElementById('JS-location5');
const location6 = document.getElementById('JS-location6');

const checkbox1 = document.getElementById('JS-checkbox1');

// RegExp pour vérification de l'adresse mail
// Le ^ marque le début et $ la fin de l'expression. 
// Le [a-zA-Z0-9.-_] indique qu'il faut mettre un élément de type lettre d'alphabet, chiffre, ., - ou _ et le "+" indique qu'on peut en mettre plusieurs
// Le [@]{1} indique qu'il doit y avoir un @
// Le [a-zA-Z0-9.-_]+ pour suivre l'ensemble avec les caractères indiqués
// Le [.]{1} pour dire qu'il doit ensuite y avoir un point
// Enfin le [a-z]{2,3} pour que l'ensemble se termine par 2 à 3 lettres (ex: fr, net, com)
const ckeckingMail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,3}$/;

// Ma version de launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//submitBtn.addEventListener("submit", launchConfirm); //modif au lieu de click
closeBtn.forEach((btn) => btn.addEventListener("click", closeWindow));
closeConfirmBtn.forEach((btn) => btn.addEventListener("click", closeWindow));

const myForm = document.getElementById('JS-myForm');


// Ma version de launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

let tabMessages = [
  {
    "ErrorNumber" : document.getElementById("JS-error1"),
    "Error" : "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
    "Confirm" : ""
  },

  {
    "ErrorNumber" : document.getElementById("JS-error2"),
    "Error" : "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    "Confirm" : ""
  },

  {
    "ErrorNumber" : document.getElementById("JS-error3"),
    "Error" : "Vous devez saisir une adresse valide.",
    "Confirm" : ""
  },

  {
    "ErrorNumber" : document.getElementById("JS-error4"),
    "Error" : "Vous devez entrer votre date de naissance.",
    "Confirm" : ""
  },

  {
    "ErrorNumber" : document.getElementById("JS-error5"),
    "Error" : "Vous devez saisir une valeur numérique.",
    "Confirm" : ""
  },

  {
    "ErrorNumber" : document.getElementById("JS-error6"),
    "Error" : "Vous devez saisir une valeur numérique positive ou nulle.",
    "Confirm" : ""
  },

  {
    "ErrorNumber" : document.getElementById("JS-error7"),
    "Error" : "Vous devez choisir une option.",
    "Confirm" : ""
  },

  {
    "ErrorNumber" : document.getElementById("JS-error8"),
    "Error" : "Vous devez vérifier que vous acceptez les termes et conditions.",
    "Confirm" : ""
  }
];

class Informations {
  constructor(ErrorName, ErrorMessage, ConfirmMessage){
    this.ErrorName = ErrorName;
    this.ErrorMessage = ErrorMessage;
    this.ConfirmMessage = ConfirmMessage;
  }
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  launchConfirm();
  function launchConfirm() {
    let conditions = [
      firstname.value.length < 2,
      surname.value.length < 2,
      ckeckingMail.test(email.value) == false,
      birthdate.value.length === 0,
      NumberofTournament.value.length === 0,
      NumberofTournament.value < 0,
      location1.checked == false && location2.checked == false && location3.checked == false && location4.checked == false && location5.checked == false && location6.checked == false,
      checkbox1.checked == false
    ];
    if(conditions[0] || conditions[1] || conditions[2] || conditions[3] || conditions[4] || conditions[5] || conditions[6] || conditions[7]){  
      errorMessage();
    }else{
      modalbg.style.display = "none";
      modalConfirmbg.style.display = "block";
    }
  
    function errorMessage(){
      for(let i=0; i<8; i++){
        if(conditions[i]){
          new Informations(tabMessages[i].ErrorNumber, tabMessages[i].Error, tabMessages[i].Confirm).ErrorName.innerHTML = new Informations(tabMessages[i].ErrorNumber, tabMessages[i].Error, tabMessages[i].Confirm).ErrorMessage;
        }else{
          new Informations(tabMessages[i].ErrorNumber, tabMessages[i].Error, tabMessages[i].Confirm).ErrorName.innerHTML = new Informations(tabMessages[i].ErrorNumber, tabMessages[i].Error, tabMessages[i].Confirm).ConfirmMessage;
        }
      }
    }
  }
});

/*function launchConfirm() {
  let conditions = [
    firstname.value.length < 2,
    surname.value.length < 2,
    ckeckingMail.test(email.value) == false,
    birthdate.value.length === 0,
    NumberofTournament.value.length === 0,
    location1.checked == false && location2.checked == false && location3.checked == false && location4.checked == false && location5.checked == false && location6.checked == false,
    checkbox1.checked == false
  ];
  if(conditions[0] || conditions[1] || conditions[2] || conditions[3] || conditions[4] || conditions[5] || conditions[6]){  
    errorMessage();
  }else{
    modalbg.style.display = "none";
    modalConfirmbg.style.display = "block";
  }

  function errorMessage(){
    for(let i=0; i<7; i++){
      if(conditions[i]){
        new Informations(tabMessages[i].ErrorNumber, tabMessages[i].Error, tabMessages[i].Confirm).ErrorName.innerHTML = new Informations(tabMessages[i].ErrorNumber, tabMessages[i].Error, tabMessages[i].Confirm).ErrorMessage;
      }else{
        new Informations(tabMessages[i].ErrorNumber, tabMessages[i].Error, tabMessages[i].Confirm).ErrorName.innerHTML = new Informations(tabMessages[i].ErrorNumber, tabMessages[i].Error, tabMessages[i].Confirm).ConfirmMessage;
      }
    }
  }
}*/

function closeWindow() {
  modalbg.style.display = "none";  
  modalConfirmbg.style.display = "none";
}



