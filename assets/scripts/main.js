// main.js
// replaces h1 text "110 Lab - Party Horn"
//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';
// TODO

/*
var vol_input = document.querySelector('[id="volume-controls"]');
console.log(vol_input.innerHTML);
myHeading.textContent = vol_input.innerHTML;*/



// Get value of input number object
 var vol_box_input = document.getElementById('volume-number').addEventListener('change', get_vol);

 // Get value of input slider object
 var vol_slider_input = document.getElementById('volume-slider').addEventListener('change', get_vol);

 function get_vol(e) {
    var texts = document.querySelector('h2');
    texts.textContent = e.target.value;
 }

 // audio object
 var audio_obj = document.getElementById('horn-sound');
 // set audio volume level accordingly
 audio_obj.volume = 0.1;

 // stop honk button from reloading the page and play the sound
 var sound_button = document.getElementById('honk-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    audio_obj.play();
 });




