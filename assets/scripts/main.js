// main.js
// replaces h1 text "110 Lab - Party Horn"
//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';
// TODO

// audio object
var audio_obj = document.getElementById('horn-sound');

// Get value of input number object
var vol_box_input = document.getElementById('volume-number').addEventListener('change', get_vol);

 // Get value of input slider object
var vol_slider_input = document.getElementById('volume-slider').addEventListener('change', get_vol);

function get_vol(e) {
    rel_vol = e.target.value / 100;
    var texts = document.querySelector('h2');
    texts.textContent = rel_vol;
    // set audio volume level accordingly
    audio_obj.volume = rel_vol;
    alert(audio_obj.volume);
}


//alert(audio_obj.volume);
// stop honk button from reloading the page and play the sound
var sound_button = document.getElementById('honk-btn').addEventListener('click', function(event) {
    event.preventDefault();
    audio_obj.play();
});




