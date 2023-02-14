const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const spanTexto = document.querySelector('#textobonito')

document.addEventListener('DOMContentLoaded', () => {
    drawHeart();
    iniciarJuego();
})

let heartX = 50;
let heartY = 480;
let heartWidth = 20;
let heartHeight = 20;
let speedHeartX = 0;
let speedHeartY = 0;
let secondHeartX = 50
let secondHeartY = 10;
let intervalo;
let segundoIntervalo;

let imagenCorazonUno = new Image();
imagenCorazonUno.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png'

let imagenCorazonDos = new Image();
imagenCorazonDos.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png'


function drawHeart() {
    heartX = heartX + speedHeartX;
    heartY = heartY + speedHeartY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        imagenCorazonUno,
        heartX,
        heartY,
        heartWidth,
        heartHeight
    )
    ctx.drawImage(
        imagenCorazonDos,
        secondHeartX,
        secondHeartY,
        heartWidth,
        heartHeight
    )
}

function moveHeartRight() {
    speedHeartX = 5;
}

function moveHeartLeft() {
    speedHeartX = - 5;
}

function moveHeartDown() {
   speedHeartY = 5;
}

function moveHeartUp() {
    speedHeartY = - 5;
}

function detenerMovimiento() {
    speedHeartX = 0;
    speedHeartY = 0;
}

function keyPressed(event) {
    switch(event.key) {
        case 'ArrowUp':
            moveHeartUp();
            break;
        case 'ArrowDown':
            moveHeartDown();
            break;
        case 'ArrowLeft':
            moveHeartLeft();
            break;
        case 'ArrowRight':
            moveHeartRight();
            break;
    }
}

function iniciarJuego() {
    intervalo = setInterval(drawHeart, 50);
    segundoIntervalo = setInterval(checkPosition, 50);
    window.addEventListener('keydown', keyPressed);
    window.addEventListener('keyup', detenerMovimiento);
}

function checkPosition () {
    if (heartX == secondHeartX && heartY == secondHeartY) {
        alert('tamo<3');
        spanTexto.innerText = 'Holaa, feliz san valentin mi amor, quiero q sepas q eres la persona q mas amo en el mundo y quiero que siempre seamos solo tú y yo, quiero amarte siempre y pasar contigo siempre, quiero q seas la mUjer q vea al levantarm con esa carita bella q tienes kljdsakl<3, te amo mxo en serio siento mil y un cosas por ti, eres mi primer y ultimo pensamiento del diA, quiero q sepas q pase lo q psae siempre estaremos juntitOs, siempre te amaré kjansjka, eres la persona q mas aprecio en el mundo enterO, eres la niña mas tierna y bella q he conocido nunca, te amo, t amo, sé q tal vez t canse q te lo diga muxo pero en serio te amo. Me encanta tu carita hermosA, me encanta tu forma d ser, m encantan tus chistes, m encantan tus celOs, me encanta tu cuerpito kjanjksa, siempre q estamos juntos te me haces linda<3, nos conocimos d una manera tan mágica q a veces pienso q fue el destino q me llevo a estar contigo, pq encajamos tan bien kjnadsjk, no puedo estar sin ti yA, m encanta q me hayas presentado a tu familia pq asi me siento mas parte de tu vida akjnskja, espero algún día poderte besar tanto y consentirte tantO, eres la persona q quiero ver en mi boda caminando con el vestido blanco mi amor, gracias por hacerme feliz y gracias por hacerme creer q el amor es algo magicO. M encantas d todos los modos posibles, m encantas cuando estás enojada, m encantas cuando eres cariñosa, m encantas cuando t resientes en broma KJNASJKS sos tan tiernA q quisieraabrazArte, m encantas cuando t pones, m encanta cuando me haces pelea por un teamo mas JKXASNSAKJSX, m encanta tu sonrisa, me encanta tu risa, JKXNSAJKXS suenas muy tierna cuando lloras okay? y m encanta tu forma de expresarte. te amo muxo mi amor<3.'
    }
}