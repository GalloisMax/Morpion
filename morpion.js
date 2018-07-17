const isValidated = button => {
  return button.innerHTML.length == 0;
};

const setSymbol = (btn, player) => {
  btn.classList.add(player.team);
  btn.innerHTML = player.team;
};

const searchWinner = (pawns, players, round) => {
  if (
    pawns[0].innerText == players[round].team &&
    pawns[1].innerText == players[round].team &&
    pawns[2].innerText == players[round].team
  ) {
    pawns[0].style.backgroundColor = "#54e840";
    pawns[1].style.backgroundColor = "#54e840";
    pawns[2].style.backgroundColor = "#54e840";
    return true;
  }

  if (
    pawns[3].innerHTML == players[round].team &&
    pawns[4].innerHTML == players[round].team &&
    pawns[5].innerHTML == players[round].team
  ) {
    pawns[3].style.backgroundColor = "#54e840";
    pawns[4].style.backgroundColor = "#54e840";
    pawns[5].style.backgroundColor = "#54e840";
    return true;
  }

  if (
    pawns[6].innerHTML == players[round].team &&
    pawns[7].innerHTML == players[round].team &&
    pawns[8].innerHTML == players[round].team
  ) {
    pawns[6].style.backgroundColor = "#54e840";
    pawns[7].style.backgroundColor = "#54e840";
    pawns[8].style.backgroundColor = "#54e840";
    return true;
  }

  if (
    pawns[0].innerHTML == players[round].team &&
    pawns[3].innerHTML == players[round].team &&
    pawns[6].innerHTML == players[round].team
  ) {
    pawns[0].style.backgroundColor = "#54e840";
    pawns[3].style.backgroundColor = "#54e840";
    pawns[6].style.backgroundColor = "#54e840";
    return true;
  }

  if (
    pawns[1].innerHTML == players[round].team &&
    pawns[4].innerHTML == players[round].team &&
    pawns[7].innerHTML == players[round].team
  ) {
    pawns[1].style.backgroundColor = "#54e840";
    pawns[4].style.backgroundColor = "#54e840";
    pawns[7].style.backgroundColor = "#54e840";
    return true;
  }

  if (
    pawns[2].innerHTML == players[round].team &&
    pawns[5].innerHTML == players[round].team &&
    pawns[8].innerHTML == players[round].team
  ) {
    pawns[2].style.backgroundColor = "#54e840";
    pawns[5].style.backgroundColor = "#54e840";
    pawns[8].style.backgroundColor = "#54e840";
    return true;
  }

  if (
    pawns[0].innerHTML == players[round].team &&
    pawns[4].innerHTML == players[round].team &&
    pawns[8].innerHTML == players[round].team
  ) {
    pawns[0].style.backgroundColor = "#54e840";
    pawns[4].style.backgroundColor = "#54e840";
    pawns[8].style.backgroundColor = "#54e840";
    return true;
  }

  if (
    pawns[2].innerHTML == players[round].team &&
    pawns[4].innerHTML == players[round].team &&
    pawns[6].innerHTML == players[round].team
  ) {
    pawns[2].style.backgroundColor = "#54e840";
    pawns[4].style.backgroundColor = "#54e840";
    pawns[6].style.backgroundColor = "#54e840";
    return true;
  }
};

const Draw = pawns => {
  for (let i = 0, len = pawns.length; i < len; i++) {
    if (pawns[i].innerHTML.length == 0) return false;
  }

  return true;
};

const Display = function(element) {
  const render = element;

  const setText = message => {
    render.innerHTML = message;
  };

  return { sendMessage: setText };
};

const main = () => {
  const pawns = document.querySelectorAll("#Jeu button");
  const players = [
    {
      flag:
        "<img class='flag France' src='https://cdn.countryflags.com/thumbs/france/flag-round-250.png'>",
      team: "France"
    },
    {
      flag:
        "<img class='flag Croatie' src='https://cdn.countryflags.com/thumbs/croatia/flag-round-250.png'>",
      team: "Croatie"
    }
  ];
  let round = 0;
  let endGame = false;
  const display = new Display(document.querySelector("#StatutJeu"));
  display.sendMessage(
    "Le jeu peut commencer ! <br /> L'équipe de " +
      players[round].team +
      " à vous d'engagez."
  );
  for (let i = 0; i < pawns.length; i++) {
    pawns[i].addEventListener("click", function() {
      if (endGame) return;
      if (!isValidated(this)) {
        display.sendMessage(
          "Case occupée ! <br />L'équipe de " +
            players[round].team +
            " c'est toujours à vous !"
        );
      } else {
        setSymbol(this, players[round]);
        endGame = searchWinner(pawns, players, round);
        if (endGame) {
          display.sendMessage(
            "L'équipe de' " +
              players[round].team +
              ' a gagné la coupe du monde 2018 ! <br /> <a href="morpion.html">Rejouer</a>'
          );
          return;
        }

        if (Draw(pawns)) {
          display.sendMessage(
            'Match Nul !<br /> Place aux tirs aux buts <br/> <a href="morpion.html">Rejouer</a>'
          );
          return;
        }

        round++;
        round = round % 2;
        display.sendMessage(
          "L'équipe de " + players[round].team + " c'est à vous !"
        );
      }
    });
  }
};

main();
