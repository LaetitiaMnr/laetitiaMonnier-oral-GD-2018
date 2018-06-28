$(document).ready(function(){

  var nb = 0;
  var nb2 = 0;

  $(".carousel-control-next").click(function(){  
    var salle1 = document.getElementsByTagName("LI")[4].className;
    var salle2 = document.getElementsByTagName("LI")[5].className;
    var salle3 = document.getElementsByTagName("LI")[6].className;
    var salle4 = document.getElementsByTagName("LI")[7].className;

    if (salle1 == "active") { 
      $("#nomSalle").text("Bureau du sous-préfet");
      $("#nom").text("Robusto");
      $("#reponses").text("Bonjour...");
    }

    if (salle2 == "active") {
      $("#nomSalle").text("Salle de réunion");
      $("#nom").text("Ginette");
      $("#reponses").text("Avez-vous trouvé le coupable ?");
    }

    if (salle3 == "active") {
      $("#nomSalle").text("Salle d'attente de paiements des titres");
      $("#nom").text("Tom");
      $("#reponses").text("Je n'ai pas le temps pour ces bêtises !");
    }

    if (salle4 == "active") {
      $("#nomSalle").text("Hall");
      $("#nom").text("Carla");
      $("#reponses").text("Bonjour à vous. J'espère que vous allez vite retrouver le coupable...");
    }

    nb++;

    if (nb == 5) { 
      $("#listeSuspects").removeClass("disabled");
      $("#listeSuspects").removeClass("text-danger");
      $("#listeSuspects").attr("href","../html/suspects.html");
      $(".alert").css("visibility","visible");

    }

      }); 

  $(".carousel-control-prev").click(function(){  
    var salle1 = document.getElementsByTagName("LI")[4].className;
    var salle2 = document.getElementsByTagName("LI")[5].className;
    var salle3 = document.getElementsByTagName("LI")[6].className;
    var salle4 = document.getElementsByTagName("LI")[7].className;

    if (salle1 == "active") { 
      $("#nomSalle").text("Acceuil");
      $("#nom").text("Tom");
      $("#reponses").text("Je n'ai pas le temps pour ces bêtises !");
    }

    if (salle2 == "active") {
      $("#nomSalle").text("Hall");
      $("#nom").text("Carla");
      $("#reponses").text("Bonjour à vous. J'espère que vous allez vite retrouver le coupable...");
    }

    if (salle3 == "active") {
      $("#nomSalle").text("Bureau du sous-préfet");
      $("#nom").text("Robusto");
      $("#reponses").text("Bonjour...");
    }

    if (salle4 == "active") {
      $("#nomSalle").text("Salle de réunion");
      $("#nom").text("Ginette");
      $("#reponses").text("Avez-vous trouvé le coupable ?");
    }

      }); 
});





function choixRep(){
  var salle1 = document.getElementsByTagName("LI")[4].className;
  var salle2 = document.getElementsByTagName("LI")[5].className;
  var salle3 = document.getElementsByTagName("LI")[6].className;
  var salle4 = document.getElementsByTagName("LI")[7].className;
  $("article").click(function(e) {
    let choixJoueur = e.target.dataset.id;

    if (salle1 == "active") {
      
      switch (choixJoueur) {

        case "choix1": $("#reponses").text("Je suis préfète. Je dois assurer la mise en oeuvre des grandes politiques publiques (emploi, environnement, cohésion social...).");
                        break;
        case "choix2": $("#reponses").text("J'avais un entretien avec une déléguée interrégionale de l’Office National de la Chasse et de la Faune Sauvage.");
                        break;
        case "choix3": $("#reponses").text("Michelle et moi étions proche.");
                        break;
        case "choix4": $("#reponses").text("Cela va faire 2 ans.");
                        break;
      }  
    }

    if (salle2 == "active") {

      switch (choixJoueur) {

        case "choix1": $("#reponses").text("Je suis sous-préfet.J'assure la permanence et la représentation de l’État dans une circonscription ou pour un domaine spécifique relevant d’une priorité nationale.");
                        break;
        case "choix2": $("#reponses").text("Eh bien, j'étais dans mon bureau. Vous savez, j'ai beaucoup de paperasse en ce moment...");
                        break;
        case "choix3": $("#reponses").text("Je la connaît bien.");
                        break;
        case "choix4": $("#reponses").text("Cela va faire 5 ans.");
                        break;
      }  
    }

    if (salle3 == "active") {

      switch (choixJoueur) {

        case "choix1" : $("#reponses").text("Je suis Secrétaire général de la préfecture. Je suis en charge de la conduite des politiques interministérielles, de la gestion des grands dossiers départementaux et de l'impulsion donnée aux actions de l'État dans le département.");
                        break;
        case "choix2": $("#reponses").text("J'étais à une réunion concernant les collectivités locales.");
                        break;
        case "choix3": $("#reponses").text("Je la connaît bien.");
                        break;
        case "choix4": $("#reponses").text("Cela va faire 3 ans.");
                        break;
      }
    }

    if (salle4 == "active") {

      switch (choixJoueur) {

        case "choix1" : $("#reponses").text("Je suis Secrétaire général pour les affaires régionales et européennes. Je veille à la cohérence de la mise en œuvre des politiques nationales et de celles de la Communauté européenne.");
                        break;
        case "choix2": $("#reponses").text("Je suis allé prendre ma pause et j'en ai profité pour avancer sur mes projets personnels.");
                        break;
        case "choix3": $("#reponses").text("Non, pas tant que ça.");
                        break;
        case "choix4": $("#reponses").text("Cela va faire 5 ans.");
                        break;
      }
    }

  });

}



