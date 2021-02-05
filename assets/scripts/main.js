// main.js
// replaces h1 text "110 Lab - Party Horn"
//const myHeading = document.querySelector('h2');
//myHeading.textContent = 'Hello World!';
// TODO

// audio object
var audio_obj = document.getElementById('horn-sound');
// volume input box
var vol_box_input = document.getElementById('volume-number');
// volume input slider
var vol_slider_input = document.getElementById('volume-slider');

vol_box_input.addEventListener('change', input_vol);

// gets input volume and sets it for slider
function input_vol(e) {
    rel_vol = e.target.value / 100;     // change to [0,1] from [0.100]
    audio_obj.volume = rel_vol;         // set volume level
    vol_slider_input.value = 50;        // update slider to match
}


vol_slider_input.addEventListener('change', slider_vol);

// gets slider volume and sets it for input
function slider_vol(e) {
    rel_vol = e.target.value / 100;
    audio_obj.volume = rel_vol;
    vol_box_input.value = e.target.value;
    alert(audio_obj.volume);
}


//alert(audio_obj.volume);
// stop honk button from reloading the page and play the sound
var sound_button = document.getElementById('honk-btn').addEventListener('click', function(event) {
    event.preventDefault();
    audio_obj.play();
});




