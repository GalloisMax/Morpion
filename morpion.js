function estValide(button) {
  return button.innerHTML.length == 0;
}

function setSymbol(btn, player) {
  btn.classList.add(player.team);
  btn.innerHTML = player.team;
}

function rechercherVainqueur(pawns, players, tour) {
  console.log(players[tour].flag == pawns[0].innerHTML);
  console.log("P0", pawns[0].innerHTML);
  console.log("P1", pawns[1].innerHTML);
  console.log("P2", pawns[2].innerHTML);

  if (
    pawns[0].innerText == players[tour].team &&
    pawns[1].innerText == players[tour].team &&
    pawns[2].innerText == players[tour].team
  ) {
    pawns[0].style.backgroundColor = "#9ACD32";
    pawns[1].style.backgroundColor = "#9ACD32";
    pawns[2].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[3].innerHTML == players[tour].team &&
    pawns[4].innerHTML == players[tour].team &&
    pawns[5].innerHTML == players[tour].team
  ) {
    pawns[3].style.backgroundColor = "#9ACD32";
    pawns[4].style.backgroundColor = "#9ACD32";
    pawns[5].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[6].innerHTML == players[tour].team &&
    pawns[7].innerHTML == players[tour].team &&
    pawns[8].innerHTML == players[tour].team
  ) {
    pawns[6].style.backgroundColor = "#9ACD32";
    pawns[7].style.backgroundColor = "#9ACD32";
    pawns[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[0].innerHTML == players[tour].team &&
    pawns[3].innerHTML == players[tour].team &&
    pawns[6].innerHTML == players[tour].team
  ) {
    pawns[0].style.backgroundColor = "#9ACD32";
    pawns[3].style.backgroundColor = "#9ACD32";
    pawns[6].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[1].innerHTML == players[tour].team &&
    pawns[4].innerHTML == players[tour].team &&
    pawns[7].innerHTML == players[tour].team
  ) {
    pawns[1].style.backgroundColor = "#9ACD32";
    pawns[4].style.backgroundColor = "#9ACD32";
    pawns[7].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[2].innerHTML == players[tour].team &&
    pawns[5].innerHTML == players[tour].team &&
    pawns[8].innerHTML == players[tour].team
  ) {
    pawns[2].style.backgroundColor = "#9ACD32";
    pawns[5].style.backgroundColor = "#9ACD32";
    pawns[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[0].innerHTML == players[tour].team &&
    pawns[4].innerHTML == players[tour].team &&
    pawns[8].innerHTML == players[tour].team
  ) {
    pawns[0].style.backgroundColor = "#9ACD32";
    pawns[4].style.backgroundColor = "#9ACD32";
    pawns[8].style.backgroundColor = "#9ACD32";
    return true;
  }

  if (
    pawns[2].innerHTML == players[tour].team &&
    pawns[4].innerHTML == players[tour].team &&
    pawns[6].innerHTML == players[tour].team
  ) {
    pawns[2].style.backgroundColor = "#9ACD32";
    pawns[4].style.backgroundColor = "#9ACD32";
    pawns[6].style.backgroundColor = "#9ACD32";
    return true;
  }
}

function matchNul(pawns) {
  for (let i = 0, len = pawns.length; i < len; i++) {
    if (pawns[i].innerHTML.length == 0) return false;
  }

  return true;
}

const Afficheur = function(element) {
  const affichage = element;

  function setText(message) {
    affichage.innerHTML = message;
  }

  return { sendMessage: setText };
};

function main() {
  const pawns = document.querySelectorAll("#Jeu button");
  console.log(pawns);
  const players = [
    {
      flag:
        "<img class='flag france' src='http://flags.fmcdn.net/data/flags/w580/fr.png'>",
      team: "France"
    },
    {
      flag:
        "<img class='flag' src='http://flags.fmcdn.net/data/flags/w580/hr.png'>",
      team: "Croatie"
    }
  ];
  let tour = 0;
  let jeuEstFini = false;
  const afficheur = new Afficheur(document.querySelector("#StatutJeu"));
  //déclare une variable ou on integre un operator new pour rajouter une instance de l'objet Display qui retourne
  afficheur.sendMessage(
    "Le jeu peut commencer ! <br /> L'équipe de " +
      players[tour].team +
      " c'est votre tour."
  );
  for (let i = 0; i < pawns.length; i++) {
    pawns[i].addEventListener("click", function() {
      if (jeuEstFini) return;
      console.log("this", this);
      if (!estValide(this)) {
        afficheur.sendMessage(
          "Case occupée ! <br />L'équipe de " +
            players[tour].team +
            " c'est toujours à vous !"
        );
      } else {
        setSymbol(this, players[tour]);
        jeuEstFini = rechercherVainqueur(pawns, players, tour);
        console.log("jeuestfini", jeuEstFini);
        if (jeuEstFini) {
          afficheur.sendMessage(
            "L'équipe de' " +
              players[tour].team +
              ' a gagné la coupe du monde 2018 ! <br /> <a href="morpion.html">Rejouer</a>'
          );
          return;
        }

        if (matchNul(pawns)) {
          afficheur.sendMessage(
            'Match Nul !<br /> Place aux tirs aux buts <br/> <a href="morpion.html">Rejouer</a>'
          );
          return;
        }

        tour++;
        tour = tour % 2;
        afficheur.sendMessage(
          "L'équipe de " + players[tour].team + " c'est à vous !"
        );
      }
    });
  }
}

main();
