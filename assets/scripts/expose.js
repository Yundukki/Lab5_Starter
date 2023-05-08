// expose.js

window.addEventListener('DOMContentLoaded', init);

const hornSelect = document.getElementById("horn-select");
const hornImage = document.querySelector("img");
const hornSound = document.querySelector("audio");

const volumeImage = document.querySelector("#volume-controls img");
const volumeCtrl = document.getElementById("volume");


const playButton = document.querySelector("button");


function init() {
  hornSelect.addEventListener("change", () => {
    switch(hornSelect.value){
      case  "air-horn":
        hornImage.src = "./assets/images/air-horn.svg";
        hornSound.src = "./assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        hornImage.src = "./assets/images/car-horn.svg";
        hornSound.src = "./assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        hornImage.src = "./assets/images/party-horn.svg";
        hornSound.src = "./assets/audio/party-horn.mp3";
        break;
    }
  });

  volumeCtrl.addEventListener("input", () => {
    const inputVol = volumeCtrl.value;
    if (inputVol === '0'){
      volumeImage.src = "./assets/icons/volume-level-0.svg";
    }
    else if (inputVol >= 1 && inputVol < 33){
      volumeImage.src = "./assets/icons/volume-level-1.svg";
    }
    else if (inputVol >= 33 && inputVol < 67){
      volumeImage.src = "./assets/icons/volume-level-2.svg";
    }
    else if (inputVol >= 67){
      volumeImage.src = "./assets/icons/volume-level-3.svg";
    }
  });

  playButton.addEventListener("click", () => {
    const inputVol = volumeCtrl.value;
    if (inputVol !== '0'){
      hornSound.play();
    }
    if (hornSelect.value === "party-horn"){
      const confetti = new JSConfetti({});
      confetti.addConfetti();
    }
  });
}
