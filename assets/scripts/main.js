// main.js
// replaces h1 text "110 Lab - Party Horn"
//const myHeading = document.querySelector('h2');
//myHeading.textContent = 'Hello World!';
// TODO

var audio_obj = document.getElementById('horn-sound');              // audio object
var vol_box_input = document.getElementById('volume-number');       // volume input box
var vol_slider_input = document.getElementById('volume-slider');    // volume input slider

var vol_icon = document.getElementById('volume-image');             // volume image icon
var horn_icon = document.getElementById('sound-image');             // horn icon
var horn_sound = document.getElementById('horn-sound');             // horn sound

var opt_air = document.getElementById('radio-air-horn');            // air horn button
var opt_car = document.getElementById('radio-car-horn');            // car horn button
var opt_party = document.getElementById('radio-party-horn');        // party horn button

// user inputs
vol_box_input.addEventListener('change', function(e) {
    rel_vol = e.target.value / 100;             // change to [0,1] from [0.100]
    audio_obj.volume = rel_vol;                 // set volume level
    vol_slider_input.value = e.target.value;    // update slider to match
    set_vol_img(e.target.value);
});

vol_slider_input.addEventListener('change', function(e) {
    rel_vol = e.target.value / 100;
    audio_obj.volume = rel_vol;
    vol_box_input.value = e.target.value;  
    set_vol_img(e.target.value);
});

opt_air.addEventListener('click', function(e) {
    horn_icon.src = "./assets/media/images/air-horn.svg";
    horn_sound.src = "./assets/media/audio/air-horn.mp3";
});

opt_car.addEventListener('click', function(e) {
    horn_icon.src = "./assets/media/images/car.svg";
    horn_sound.src = "./assets/media/audio/car-horn.mp3";
});

opt_party.addEventListener('click', function(e) {
    horn_icon.src = "./assets/media/images/party-horn.svg";
    horn_sound.src = "./assets/media/audio/party-horn.mp3";
});


// volume icon matches the volume number
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


//alert(audio_obj.volume);
// stop honk button from reloading the page and play the sound
var sound_button = document.getElementById('honk-btn').addEventListener('click', function(event) {
    event.preventDefault();
    audio_obj.play();
});




