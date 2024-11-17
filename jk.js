const jamalKuduPlayer = document.getElementById('jamalKuduPlayer');
const message = document.getElementById('message');

jamalKuduPlayer.addEventListener('play', () => {
    message.innerText = 'Now Playing: Jamal Kudu';
});

jamalKuduPlayer.addEventListener('pause', () => {
    message.innerText = 'Playback Paused.';
});

jamalKuduPlayer.addEventListener('ended', () => {
    message.innerText = 'Playback Finished.';
});