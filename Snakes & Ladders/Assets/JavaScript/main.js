function rollDice() {
  let p = parseInt(localStorage.getItem("player"));
  let ply = "";
  let chance = Math.ceil(Math.random() * 6);

  if (chance == 0) {
    chance++;
  }

  if (p % 2 == 0) {
    ply = 2;
    x = parseInt(localStorage.getItem("player2_count"));

    if (x != 0) {
      b2 = document.getElementById("b" + x);
      b2.style.backgroundColor = "";
    }

    x += chance;
    localStorage.setItem("player2_count", x);

    b2 = document.getElementById("b" + x);
    b2.style.backgroundColor = "green";
  } else {
    ply = 1;
    x = parseInt(localStorage.getItem("player1_count"));

    if (x != 0) {
      b1 = document.getElementById("b" + x);
      b1.style.backgroundColor = "";
    }
    x += chance;
    localStorage.setItem("player1_count", x);

    b1 = document.getElementById("b" + x);
    b1.style.backgroundColor = "yellow";
  }

  document.getElementById("d1").innerHTML = "Player-" + ply + ":" + chance;
  p++;
  localStorage.setItem("player", p);
}
