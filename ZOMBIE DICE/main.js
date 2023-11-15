const jatekos1 = document.getElementById('jatekos1');
const jatekos2 = document.getElementById('jatekos2');
const start = document.getElementById('start');
const nev = document.getElementById('nev');
const pont1 = document.getElementById('1pont');
const pont2 = document.getElementById('2pont');
const k1 = document.getElementById('k1');
const k2 = document.getElementById('k2');
const k3 = document.getElementById('k3');
const ujra = document.getElementById('ujra');
const j1nev = document.getElementById('1nev');
const j2nev = document.getElementById('2nev');
const container = document.getElementById('container');
const megall = document.getElementById('megall');
const aktpont = document.getElementById('aktpont');
const aktelet = document.getElementById('aktelet');
const aktkiir = document.getElementById('aktkiir');
const logobtn = document.getElementById('logobtn');
const jatekszabalyok = document.getElementById('manual');

const kepTomb = ["forrasok/agy2.png", "forrasok/robbanas.png", "forrasok/lab3.png"];
let elet = 3;
let pont = 0;
let aktJatekos = 1;
let pontElmentve = false;
let epont = 0;
let kpont = 0;
let nyerte = false;

logobtn.addEventListener('click', function () {
  location.reload();
}
)

start.addEventListener('click', function () {
  nev.style.display = 'none';
  start.style.display = 'none';
  j1nev.textContent = jatekos1.value;
  j2nev.textContent = jatekos2.value;
  container.style.visibility = 'visible';
  aktkiir.innerText = jatekos1.value;
  jatekszabalyok.style.display = 'none';
});

ujra.addEventListener('click', function () {
  ujradobas();
});

megall.addEventListener('click', function () {
  if (aktJatekos === 1) {
    epont += pont;
    pont1.innerText = epont;
    pontElmentve = true;

  } else {
    kpont += pont;
    pont2.innerText = kpont;
    pontElmentve = true;
  }
  jatekosvaltas();
  nyert();
});

function ujradobas() {
  let pontszerzo = 0;
  let eletveszto = 0;
  ujra.innerText = "DOBÁS";

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * kepTomb.length);
    if (kepTomb[randomIndex] === "forrasok/robbanas.png") {
      eletveszto++;
    } else if (kepTomb[randomIndex] === "forrasok/agy2.png") {
      pontszerzo++;
    } else if (kepTomb[randomIndex] === "forrasok/lab3.png") {
      ujra.innerText = "ÚJRADOBÁS";
    }
    document.getElementById(`k${i + 1}`).src = kepTomb[randomIndex];
  }

  pont += pontszerzo;
  elet -= eletveszto;
  aktpont.innerText = pont;
  aktelet.innerText = elet;

nyert();
  if (elet < 1) {
    if (aktJatekos === 1) {
      setTimeout(function () {
        window.alert("MEGHALTÁL " + jatekos1.value + "!");
        jatekosvaltas();
      }, 500); 
    } else {
      setTimeout(function () {
        window.alert("MEGHALTÁL " + jatekos2.value + "!");
        jatekosvaltas();
      }, 500);
    }
  }
  else if(  (ujra.innerText != "ÚJRADOBÁS")) {
    setTimeout(function () {
      window.alert("NEM TUDSZ ÚJRA DOBNI, "+jatekos2.value +" KÖVETKETIK");
    }, 500); 
    jovairas();
  }
}


function jovairas() {
  if (aktJatekos === 1 ) {
    epont += pont;
    pont1.innerText = epont;

  } else if (aktJatekos === 2 ) {
    kpont += pont;
    pont2.innerText = kpont;
  }
  jatekosvaltas();
}

function jatekosvaltas() {
  if (aktJatekos === 1) {
    aktJatekos = 2;
    aktkiir.innerText = jatekos2.value;

  } else if (aktJatekos === 2) {
    aktJatekos = 1;
    aktkiir.innerText = jatekos1.value;

  }
  pont = 0;
  elet = 3;
  aktelet.innerText = elet;
  aktpont.innerText = pont;
  ujra.innerText = "DOBÁS";
 
}

function nyert() {
  if (epont > 12) {
    setTimeout(function () {
      window.alert("GRATULÁLUNK:\n" + jatekos1.value + "!");
      jovairas();
      location.reload();
    }, 500);
  }
  else if (kpont > 12) {
    setTimeout(function () {
      window.alert("GRATULÁLUNK:\n" + jatekos2.value + "!");
      jovairas();
      location.reload();
    }, 500);
  }

}