// main.js

// Inputs/Audio Obj
var audio_obj = document.getElementById('horn-sound');              // audio object
var vol_box_input = document.getElementById('volume-number');       // volume input box
var vol_slider_input = document.getElementById('volume-slider');    // volume input slider

// Icons
var vol_icon = document.getElementById('volume-image');             // volume image icon
var horn_icon = document.getElementById('sound-image');             // horn icon
var horn_sound = document.getElementById('horn-sound');             // horn sound

// Buttons
var sound_button = document.getElementById('honk-btn');             // 'Honk' button
var opt_air = document.getElementById('radio-air-horn');            // air horn button
var opt_car = document.getElementById('radio-car-horn');            // car horn button
var opt_party = document.getElementById('radio-party-horn');        // party horn button

/* 
 * Gets user input from input box. Checks if input is [0,100] otherwise defaults to 100.
 * Divides input by 100 to set audio object's volume [0,1] and updates slider
 * volume icon, and sound button
 */
vol_box_input.addEventListener('change', function(e) {
    // invalid input checking
    if (e.target.value < 0 || e.target.value > 100) {
        alert('Please enter a volume level between 0 and 100. Using default instead.');
        vol_box_input.value = 100;
        rel_vol = 1;
    } else {
        rel_vol = e.target.value / 100;         // change to [0,1] from [0.100]
    }
    audio_obj.volume = rel_vol;                 // set volume level
    vol_slider_input.value = e.target.value;    // update slider to match
    set_vol_img(e.target.value);
    set_sound_btn(e.target.value);
});

/* 
 * Gets user input from slider. Divides input by 100 to set audio object's volume [0,1]
 * and updates input box, volume icon, and sound button
 */
vol_slider_input.addEventListener('change', function(e) {
    rel_vol = e.target.value / 100;             // changes to [0.1] from [0,100]
    audio_obj.volume = rel_vol;                 // set volume level
    vol_box_input.value = e.target.value;       // update text entry to match
    set_vol_img(e.target.value);
    set_sound_btn(e.target.value);
});

/*
 * Updates horn icon and sound to match selection of Air Horn
 */
opt_air.addEventListener('click', function(e) {
    horn_icon.src = "./assets/media/images/air-horn.svg";
    horn_sound.src = "./assets/media/audio/air-horn.mp3";
});

/*
 * Updates horn icon and sound to match selection of Car Horn
 */
opt_car.addEventListener('click', function(e) {
    horn_icon.src = "./assets/media/images/car.svg";
    horn_sound.src = "./assets/media/audio/car-horn.mp3";
});

/*
 * Updates horn icon and sound to match selection of Party Horn
 */
opt_party.addEventListener('click', function(e) {
    horn_icon.src = "./assets/media/images/party-horn.svg";
    horn_sound.src = "./assets/media/audio/party-horn.mp3";
});

/*
 * Set volume icon to match the volume number
 */
function set_vol_img(vol) {
    if (vol == 0) {
        vol_icon.src = "./assets/media/icons/volume-level-0.svg";
    } else if (vol >= 1 && vol <= 33) {
        vol_icon.src = "./assets/media/icons/volume-level-1.svg";
    } else if (vol >= 34 && vol <= 66) {
        vol_icon.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        vol_icon.src = "./assets/media/icons/volume-level-3.svg";
    }
}

/*
 * Disable sound button is volume is muted
 */
function set_sound_btn(vol) {
    // if volume is 0, disable sound button
    if (vol == 0) {
        sound_button.disabled = true;
    } else {
        sound_button.disabled = false;
    }
}

/* 
 * Stop honk button from reloading the page and play the sound
 */
sound_button.addEventListener('click', function(event) {
    event.preventDefault();
    audio_obj.play();
});




