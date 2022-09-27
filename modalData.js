/*---- Tableau regroupant les données de localisation dans le formulaire ----*/

let tabLocations = [
    {
      "cityName" : "New York",
      "LocationCall" : document.getElementById('JS-location1')
    },
  
    {
      "cityName" : "San Francisco",
      "LocationCall" : document.getElementById('JS-location2')
    },
  
    {
      "cityName" : "Seattle",
      "LocationCall" : document.getElementById('JS-location3')
    },
  
    {
      "cityName" : "Chicago",
      "LocationCall" : document.getElementById('JS-location4')
    },
  
    {
      "cityName" : "Boston",
      "LocationCall" : document.getElementById('JS-location5')
    },
  
    {
      "cityName" : "Portland",
      "LocationCall" : document.getElementById('JS-location6')
    }
];

/*---- Tableau regroupant les données de messages d'erreur dans le formulaire ----*/

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