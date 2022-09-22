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

/*------ Ma version du code JavaScript ------*/

/*---- Fonctionnalités des boutons ----*/

// On déclare des variables pour chaque class ou id associé à chaque bouton

// Les boutons

// Boutons d'ouverture de fenêtres (formulaire et confirmation)
const modalBtn = document.querySelectorAll(".JS-modal-btn");
const submitBtn = document.getElementById("JS-btn-submit");

// Boutons de fermeture de fenêtre
const closeBtn = document.querySelectorAll(".JS-close");
const closeConfirmBtn = document.querySelectorAll(".JS-close-confirm-button");

/*---- Fonctionnalités associées à l'apparition/disparition du modal et de la confirmation d'envoie des données ----*/

const modalbg = document.querySelector(".JS-bground"); // constante qui gère l'apparition du formulaire
const modalConfirmbg = document.querySelector(".JS-confirm-bground"); // constante qui gère l'apparition des remerciements

// Lancement/fermeture du modal au clique sur le bouton associé à la fonctionnalité
// Le clique exécute la fonction launchModal/closeWindow associée

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeWindow));

function launchModal() {
  modalbg.style.display = "block";
}

function closeWindow() {
  modalbg.style.display = "none";  
  modalConfirmbg.style.display = "none";
}

// Fermeture du modal au clique sur le bouton associé à la fonctionnalité (le lancement se fait dans la partie vérification du formulaire)

closeConfirmBtn.forEach((btn) => btn.addEventListener("click", closeWindow));

/*---- Fonctionnalités du modal (formulaire) ----*/

/*-- Les variables correspondand aux entrées dans le formulaire --*/

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

/*-- Utilisation de RegEx pour vérification de l'adresse mail --*/

// Le ^ marque le début et $ la fin de l'expression. 
// Le [a-zA-Z0-9.-_] indique qu'il faut mettre un élément de type lettre d'alphabet, chiffre, ., - ou _ et le "+" indique qu'on peut en mettre plusieurs
// Le [@]{1} indique qu'il doit y avoir un @
// Le [a-zA-Z0-9.-_]+ pour suivre l'ensemble avec les caractères indiqués
// Le [.]{1} pour dire qu'il doit ensuite y avoir un point
// Enfin le [a-z]{2,3} pour que l'ensemble se termine par 2 à 3 lettres (ex: fr, net, com)
const ckeckingMail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,3}$/;

/*-- Constante qui gère la validation du formulaire --*/

const myForm = document.getElementById('JS-myForm');

/*-- Regroupement des différents messages d'erreur associés à chaque ligne du formulaire --*/

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

/*-- Class pour généraliser les objets contenants les messages d'erreur, pour fluidifier les fonctions associées à la validation du formulaire (boucle) --*/

class Informations {
  constructor(ErrorName, ErrorMessage, ConfirmMessage){
    this.ErrorName = ErrorName;
    this.ErrorMessage = ErrorMessage;
    this.ConfirmMessage = ConfirmMessage;
  }
};

/*-- Exécution de l'analyse du formulaire --*/

// Déclenchement au clique du bouton submit
// Le preventDefault évite l'envoie des données (pas de base de données existante)
// Puis exécution de launchConfirm qui analyse chaque ligne du formulaire
// S'il n'y a pas d'erreur, le formulaire se ferme et la fenêtre de remerciement apparait
// Sinon, la fonction execute la fonction errorMessage
// Celle-ci reprend toutes les conditions et renvoye les messages associés, contenus dans chaque instances de class Informations

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





