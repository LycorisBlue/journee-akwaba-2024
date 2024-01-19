// Créer une carousel galerie d'images des années précédentes
var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]; // Les noms des images à afficher
var index = 0; // L'index de l'image courante
var duration = 3000; // La durée d'affichage de chaque image en millisecondes

// Créer un élément div pour contenir la galerie
var gallery = document.createElement("div");
gallery.id = "gallery";
gallery.style.position = "fixed";
gallery.style.top = "0";
gallery.style.left = "0";
gallery.style.width = "100%";
gallery.style.height = "100%";
gallery.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
gallery.style.display = "none";
gallery.style.zIndex = "999";

// Créer un élément img pour afficher l'image courante
var image = document.createElement("img");
image.id = "image";
image.style.position = "absolute";
image.style.top = "50%";
image.style.left = "50%";
image.style.transform = "translate(-50%, -50%)";
image.style.maxWidth = "80%";
image.style.maxHeight = "80%";

// Créer un élément span pour afficher le bouton de fermeture
var close = document.createElement("span");
close.id = "close";
close.innerHTML = "×";
close.style.position = "absolute";
close.style.top = "10px";
close.style.right = "10px";
close.style.color = "#fff";
close.style.fontSize = "40px";
close.style.cursor = "pointer";

// Ajouter les éléments à la galerie
gallery.appendChild(image);
gallery.appendChild(close);

// Ajouter la galerie au document
document.body.appendChild(gallery);

// Définir une fonction pour changer l'image courante
function changeImage() {
    // Mettre à jour l'index
    index = (index + 1) % images.length;
    // Mettre à jour l'attribut src de l'image
    image.src = images[index];
}

// Définir une fonction pour ouvrir la galerie
function openGallery() {
    // Afficher la galerie
    gallery.style.display = "block";
    // Changer l'image courante
    changeImage();
    // Lancer un intervalle pour changer l'image périodiquement
    var interval = setInterval(changeImage, duration);
    // Stocker l'intervalle dans l'attribut data-interval de la galerie
    gallery.setAttribute("data-interval", interval);
}

// Définir une fonction pour fermer la galerie
function closeGallery() {
    // Cacher la galerie
    gallery.style.display = "none";
    // Récupérer l'intervalle stocké dans l'attribut data-interval de la galerie
    var interval = gallery.getAttribute("data-interval");
    // Arrêter l'intervalle
    clearInterval(interval);
}

// Ajouter un écouteur d'événement au bouton de fermeture
close.addEventListener("click", closeGallery);

// Créer un élément button pour ouvrir la galerie
var button = document.createElement("button");
button.id = "button";
button.innerHTML = "Voir les photos des années précédentes";
button.style.display = "block";
button.style.margin = "10px auto";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.backgroundColor = "#f77f00";
button.style.color = "#fff";
button.style.cursor = "pointer";

// Ajouter le bouton au document
document.body.appendChild(button);

// Ajouter un écouteur d'événement au bouton
button.addEventListener("click", openGallery);

// Créer une animation avec gsap
gsap.from("#button", {duration: 2, x: -200, opacity: 0, ease: "bounce"});
gsap.from("#image", {duration: 1, scale: 0, rotate: 360, ease: "back"});