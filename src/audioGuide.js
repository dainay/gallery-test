// Function to play the music
export function startAudio() {
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play();
}

// Function to stop the music
export function stopAudio() {
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.pause();
}