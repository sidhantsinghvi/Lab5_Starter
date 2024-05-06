window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const vS = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioElement = document.querySelector('audio');
  const pB = document.querySelector('button');
  const confetti = new JSConfetti();

  hornSelect.addEventListener('change', updateHorn);
  vS.addEventListener('input', updateVolume);
  pB.addEventListener('click', playSound);

function updateHorn() {
  const selectedHorn = hornSelect.value;
  const image = document.querySelector('img');
  const audioSrc = `./assets/audio/${selectedHorn}.mp3`;
  const hornImageSrc = `./assets/images/${selectedHorn}.svg`;
  image.src = hornImageSrc;
  audioElement.src = audioSrc;
}

function updateVolume() {
  if (vS.value == 0) {
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
  } else if (vS.value < 33) {
    volumeIcon.src = 'assets/icons/volume-level-1.svg';
  } else if (vS.value < 67) {
    volumeIcon.src = 'assets/icons/volume-level-2.svg';
  } else {
    volumeIcon.src = 'assets/icons/volume-level-3.svg';
  }

  audio.volume = volume / 100;
}

function playSound() {
  const selectedHorn = hornSelect.value;
    audioElement.play();

    if (selectedHorn === 'party-horn') {
      confetti.addConfetti();
    }
  }
}