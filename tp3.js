// Code exécuté quand la page est chargée
document.addEventListener("DOMContentLoaded", function () {
  // -----------------------------
  // 1) Lectures précédentes : afficher / cacher les infos
  // -----------------------------
  const figcaptions = document.querySelectorAll(".prev-item figcaption");
  const images = document.querySelectorAll(".prev-item img");

  // On cache tous les figcaption au départ
  figcaptions.forEach(function (fc) {
    fc.style.display = "none";
  });

  // Quand on clique sur une image
  images.forEach(function (img) {
    img.addEventListener("click", function () {
      const figure = img.closest(".prev-item");
      if (!figure) return;

      const fc = figure.querySelector("figcaption");
      if (!fc) return;

      // toggle display
      if (fc.style.display === "none" || fc.style.display === "") {
        fc.style.display = "block";
      } else {
        fc.style.display = "none";
      }
    });
  });

  
  //  Inscription : afficher / masquer le mot de passe
  
  const champMdp = document.getElementById("mdp");
  const caseAfficher = document.getElementById("voirmdp");

  // On ne fait ça que si les éléments existent 
  if (champMdp && caseAfficher) {
    caseAfficher.addEventListener("change", function () {
      champMdp.type = this.checked ? "text" : "password";
    });
  }
});



