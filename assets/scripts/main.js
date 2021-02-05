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
// volume image icon
var vol_icon = document.getElementById('volume-image');

vol_box_input.addEventListener('change', input_vol);

// gets input volume and sets it for slider
function input_vol(e) {
    rel_vol = e.target.value / 100;             // change to [0,1] from [0.100]
    audio_obj.volume = rel_vol;                 // set volume level
    vol_slider_input.value = e.target.value;    // update slider to match
    set_vol_img(e.target.value);
}


vol_slider_input.addEventListener('change', slider_vol);

// gets slider volume and sets it for input
function slider_vol(e) {
    rel_vol = e.target.value / 100;
    audio_obj.volume = rel_vol;
    vol_box_input.value = e.target.value;  
    set_vol_img(e.target.value);
}

function set_vol_img(vol) {
    if (vol == 0) {
        vol_icon.src = "./assets/media/icons/volume-level-0.svg";
    } else if (vol >= 1 && vol <= 33) {
        vol_icon.src = "./assets/media/icons/volume-level-1.svg";
    } else if (vol >= 34 && vol <= 66) {
        vol_icon.src = "./assets/media/icons/volume-level-2.svg";
    } else if (vol >= 67 && vol <= 100 ) {
        vol_icon.src = "./assets/media/icons/volume-level-3.svg";
    }
}

//alert(audio_obj.volume);
// stop honk button from reloading the page and play the sound
var sound_button = document.getElementById('honk-btn').addEventListener('click', function(event) {
    event.preventDefault();
    audio_obj.play();
});




