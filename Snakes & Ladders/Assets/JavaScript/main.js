localStorage.setItem("player", 1);
localStorage.setItem("player1_count", 0);
localStorage.setItem("player2_count", 0);

const s = [
  [99, 81, 80, 61, 62, 59, 41, 40, 21],
  [78, 64, 57, 43, 44, 36, 25],
  [52, 49, 48, 33, 28],
  [95, 86, 72],
  [93, 88, 89],
];

const l = [
  [4, 16, 27],
  [47, 55, 65, 77, 84],
];

function rollDice() {
  let p = parseInt(localStorage.getItem("player"));
  let chance = Math.ceil(Math.random() * 6);

  if (chance == 0) {
    chance = 1;
  }

  if (p % 2 == 0) {
    ply = 2;

    let x = parseInt(localStorage.getItem("player2_count"));
    let y = parseInt(localStorage.getItem("player1_count"));

    if (x != 0) {
      // this condition is to check if both the Players are at the same spot.
      if (x == y) {
        let b1 = document.getElementById("b" + x);
        b1.style.backgroundColor = "yellow";
      } else {
        let b1 = document.getElementById("b" + x);
        b1.style.backgroundColor = "";
      }
    }

    x += chance;
    localStorage.setItem("player2_count", x);

    if (x == y) {
      let b1 = document.getElementById("b" + x);
      b1.style.backgroundColor = "cyan";
    } else {
      let b1 = document.getElementById("b" + x);
      b1.style.backgroundColor = "green";
      b1.style.transition = "";
    }

    if (chance == 6) {
      p--;
    }
  } else {
    ply = 1;

    let x = parseInt(localStorage.getItem("player1_count"));
    let y = parseInt(localStorage.getItem("player2_count"));

    if (x != 0) {
      // this condition is to check if both the Players are at the same spot.
      if (x == y) {
        let b1 = document.getElementById("b" + x);
        b1.style.backgroundColor = "green";
      } else {
        let b1 = document.getElementById("b" + x);
        b1.style.backgroundColor = "";
      }
    }

    x += chance;
    localStorage.setItem("player1_count", x);

    if (x == y) {
      let b1 = document.getElementById("b" + x);
      b1.style.backgroundColor = "cyan";
    } else {
      let b1 = document.getElementById("b" + x);
      b1.style.backgroundColor = "yellow";
    }

    if (chance == 6) {
      p--;
    }
  }

  document.getElementById("d1").innerHTML = "Player-" + ply + ":" + chance;
  p++;
  localStorage.setItem("player", p);
}
