document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const privacy = document.getElementById('privacy').value;
    const autoplay = document.getElementById('autoplay').checked;

    // Here you would typically send a request to your server to save the settings
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Privacy:', privacy);
    console.log('Autoplay:', autoplay);
});