"use strict"
var choix = [];
var form = document.getElementById("formulaire");

function personnage(form){
	choix.push([form.nom.value, form.classe.value, form.région.value]);
	console.log("bonjour" + " "+ form.nom.value + " "+ "tu es de la classe" + " "+ form.classe.value + " "+ 
		"tu viens d'arriver dans la région de" + " " + form.région.value + " " + ",Clique sur le bouton en bas afin de rentrer dans ta région.");  
    return false;
}




