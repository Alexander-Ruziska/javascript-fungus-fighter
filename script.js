// State Variables can be declared outside of the onReady
let playerAP = 100;
let fungusHP = 100;
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
const attacks = {
    "arcane-scepter": { apCost: 12, hpDamage: 14 },
    "entangle": { apCost: 23, hpDamage: 9 },
    "dragon-blade": { apCost: 38, hpDamage: 47 },
    "star-fire": { apCost: 33, hpDamage: 25 },
  };

  function onReady() {
    console.log("Ready to go!")
}
onReady()

  function updateState(apCost, hpDamage) {
    playerAP = Math.max(0, playerAP - apCost);
    fungusHP = Math.max(0, fungusHP - hpDamage);
  //   I got this to work sort of but i really need an explanation as to why
    document.getElementById("ap-text").textContent = `${playerAP} AP`;
    document.getElementById("hp-text").textContent = `${fungusHP} HP`;
    document.getElementById("ap-meter").value = playerAP;
    document.getElementById("hp-meter").value = fungusHP;
  }

function handleButtonClick(event) {
    const buttonId = event.target.id;
    const attack = attacks[buttonId];
    if (attack) {
      updateState(attack.apCost, attack.hpDamage);
    }
  }
function onReady() {
    console.log("Ready to go!")
}
onReady()