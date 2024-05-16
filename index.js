const btnRoca = document.getElementById("btnRoca");
const btnPapel = document.getElementById("btnPapel");
const btnTijera = document.getElementById("btnTijera");
const btnOk = document.getElementById("btnOk");
const imgAttack = document.getElementById("img-attack");
const imgOponent = document.getElementById("img-oponent");
const txtResult = document.getElementById("txtResult");

let option = null;

const items = {
  1: "roca",
  2: "papel",
  3: "tijera",
};

const generateAttack = () => {
  const numRandom = Math.random();
  const numero = Math.floor(numRandom * 3) + 1;
  return items[numero];
};

btnRoca.addEventListener("click", (e) => {
  option = "roca";
  changeImage(option);
});

btnPapel.addEventListener("click", (e) => {
  option = "papel";
  changeImage(option);
});

btnTijera.addEventListener("click", (e) => {
  option = "tijera";
  changeImage(option);
});

btnOk.addEventListener("click", (e) => {
  const itemAttack = generateAttack();
  changeImage(itemAttack, "oponent");

  const result = generateResut(itemAttack, option);

  txtResult.textContent = result;
});

const changeImage = (imgName, why = "player") => {
  if (why === "oponent") {
    imgOponent.setAttribute("src", `assets/${imgName}.png`);
  } else {
    imgAttack.setAttribute("src", `assets/${imgName}.png`);
  }
};

const generateResut = (itemAttack, option) => {
  let result;

  switch (itemAttack) {
    case "roca":
      if (option === "roca") {
        result = "Empate!";
      } else if (option === "tijera") {
        result = "Perdedor!";
      } else {
        result = "Ganador!";
      }
      break;

    case "papel":
      if (option === "papel") {
        result = "Empate!";
      } else if (option === "roca") {
        result = "Perdedor!";
      } else {
        result = "Ganador!";
      }
      break;

    case "tijera":
      if (option === "tijera") {
        result = "Empate!";
      } else if (option === "papel") {
        result = "Perdedor!";
      } else {
        result = "Ganador!";
      }
      break;

    default:
      break;
  }

  return result;
};
