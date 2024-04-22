// Object to store references to Howl objects for each instrument
const sounds = {};

document.addEventListener('DOMContentLoaded', () => {
    var instrumentTitles = document.getElementsByClassName('instrumentTitle');

    // Create an object to store image IDs and corresponding instrument titles
    const instrumentObject = {};
    for (element of instrumentTitles) {
        instrumentObject[element.nextElementSibling.id] = element.innerHTML;
    }

    // Add event listeners for each image based on the instrumentObject
    for (const property in instrumentObject) {
        document.getElementById(property).addEventListener('click', () => {
            playInstrument(property);
        });

        // Add mouseover and mouseout event listeners to handle styling
        document.getElementById(property).addEventListener('mouseover', mouseOverHandler);
        document.getElementById(property).addEventListener('mouseout', mouseOutHandler);

        // Create music player for each instrument
        createMusicPlayer(property, instrumentObject[property]);
    }

    // Function to handle mouseover event
    function mouseOverHandler() {
        this.style.border = '3px solid red';
    }

    // Function to handle mouseout event
    function mouseOutHandler() {
        this.style.border = '0px';
    }

    // Function to play or pause instrument sound
    function playInstrument(instrumentId) {
        var instrumentSound = document.getElementById(instrumentId).getAttribute('data-media');
        // Check if the sound is already playing
        if (!sounds[instrumentId] || !sounds[instrumentId].playing()) {
            // If not playing, create a new Howl object and play the sound
            sounds[instrumentId] = new Howl({
                src: [instrumentSound]
            });
            sounds[instrumentId].play();
        } else {
            // If already playing, pause the sound
            sounds[instrumentId].pause();
        }
    }

    // Function to create music player for each instrument
    function createMusicPlayer(instrumentId, instrumentTitle) {
        // Create container for music player
        var container = document.createElement('div');
        container.className = 'music-player';

        // Create track info element
        var trackInfo = document.createElement('div');
        trackInfo.className = 'track-info';
        trackInfo.textContent = instrumentTitle + ' - Track Duration: ';

        // Create span element for duration
        var durationSpan = document.createElement('span');
        durationSpan.id = instrumentId + '-duration';
        durationSpan.textContent = '0:00';
        trackInfo.appendChild(durationSpan);

        // Create play button
        var playButton = document.createElement('button');
        playButton.textContent = 'Play';

        // Add click event listener to play button
        playButton.addEventListener('click', function() {
            playInstrument(instrumentId);
        });

        // Append elements to container
        container.appendChild(trackInfo);
        container.appendChild(playButton);

        // Append container to the instrument element
        document.getElementById(instrumentId).appendChild(container);
    }

   
});
