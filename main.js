
let name = prompt(`O'yinchi nomini kiriting !`);

let botList = ['🪨', '✂️', '📄'];

let BOTname = document.getElementById('nameBOT');
let PLAYERname = document.getElementById('namePLAYER');
PLAYERname.textContent = name
let tosh__btn = document.getElementById('tosh');
let qaychi__btn = document.getElementById('qaychi');
let qogoz__btn = document.getElementById('qogoz');
let icn = document.querySelector('.icn');
let ico = document.querySelector('.ico');
let win = document.querySelector('.win')
function checkWinner(player, bot) {
    if (player === bot) {
        win.textContent =  `Durrang `
    } else if (
        (player === '🪨' && bot === '✂️') || 
        (player === '✂️' && bot === '📄') || 
        (player === '📄' && bot === '🪨')) {
        win.textContent = `${name} yutdi !`
    } else {
        win.textContent = `SSP-AI yutdi!`
    }
}
tosh__btn.onclick = () => {
    let player = botList[0];
    let bot = botList[Math.floor(Math.random() * botList.length)];
    ico.innerHTML = bot;
    icn.innerHTML = player;
    checkWinner(player, bot);
}
qaychi__btn.onclick = () => {
    let player = botList[1];
    let bot = botList[Math.floor(Math.random() * botList.length)];
    ico.innerHTML = bot;
    icn.innerHTML = player;
    checkWinner(player, bot);
}
qogoz__btn.onclick = () => {
    let player = botList[2];
    let bot = botList[Math.floor(Math.random() * botList.length)];
    ico.innerHTML = bot;
    icn.innerHTML = player;
    checkWinner(player, bot);
}


////// buttonlar onclick bo'lganda .ico ga 
///// randomni qo'ydik yani (botList[Math.floor(Math.random() * botList.length)]) ni
///// va .icnga massivdagi elementlarni berdik yani botLIST[0] yoki 1 vahokazo