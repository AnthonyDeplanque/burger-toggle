// Récupère l'ID hamburger
const hamburger = document.getElementById("hamburger");// TROUVE ICI

// Récupère la class nav-box
const sidebarBox = document.querySelector('.nav-box');// TROUVE ICI

// Crée une constante qui a comme nom : sections
// Récupère la section avec la déclaration de ton choix.
// TROUVE ICI


hamburger.addEventListener("click", function() {
  
  sidebarBox.classList.add("show");
  
	// Quand tu vas cliquer sur le bouton menu hamburger, il faut que t'es elements hamburger et sidebarBox portent la classe "show"
});

// Récupère tous les elements "liens" qui se trouvent dans l'element nav-box.
const links = document.querySelectorAll('.item')// TROUVE ICI
links.forEach(link => {
	link.addEventListener("click", function(){
		hamburger.classList.remove("show");
		sidebarBox.classList.remove("show");
	});
});