let currentAudio = null;
let currentButton = null;
let playButtons = document.querySelectorAll('.playBtn');

function updateImageButton(button, isPlaying) {
  const img = button.querySelector('img');
  img.src = isPlaying ? 'images/pause.png' : 'images/playbuttonwhite.png';
}

playButtons.forEach(button => {
  button.addEventListener('click', () => {

    const audioFile = button.dataset.audio;
    

    if(currentAudio && currentAudio.src.endsWith(audioFile)) {
      if(currentAudio.paused) {
        currentAudio.play();
        updateImageButton(button, true);
      } else {
        currentAudio.pause();
        updateImageButton(button, false);
      }
    } else {
      if(currentAudio) {
        currentAudio.pause();
        updateImageButton(currentButton, false)
      }
      currentAudio = new Audio(audioFile)
      currentAudio.play();
      currentButton = button;
      updateImageButton(button, true);
    }

    currentAudio.addEventListener('ended', () => {
      updateImageButton(button, false);
      currentAudio = null;
      currentButton = null; 
    });
  });
});