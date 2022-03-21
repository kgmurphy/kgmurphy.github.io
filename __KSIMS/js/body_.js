//
// body
//
let body_controls = document.getElementById('body_controls');
let body_wrapper = document.getElementById('body_wrapper');
let bodys = body_wrapper.getElementsByTagName('span');
let gender;
// 
// shades
//
let shade_wrapper = document.getElementById('shade_wrapper');
let shades = shade_wrapper.getElementsByTagName('span');

// For each span - grab the id
for(let i = 0 ; i < bodys.length; i++){
//
// lets hide all the body first
//
bodys[i].style.visibility = 'hidden'; 
// then get the id       
let this_name = bodys[i].getAttribute('id');

//
//Lets generate some radio buttons
//
let radio = document.createElement('input');
let radio_label = document.createElement('label');
radio_label.innerHTML = this_name;
body_controls.appendChild(radio_label);
radio.setAttribute('type', 'radio');
radio.setAttribute('name', 'body_radio');
radio.setAttribute('id', this_name);
body_controls.appendChild(radio);


//
// Get all the paths, lines and rects of each bodystyle
// in order to change their color
//
let body_paths = bodys[i].getElementsByTagName('path');
let body_rects = bodys[i].getElementsByTagName('rect');
let body_lines = bodys[i].getElementsByTagName('line');


//
// Add classes to all the paths and rects in each svg
//
for(let j = 0; j < body_paths.length; j++){
    body_paths[j].classList.add('body_path');
}
for(let j = 0; j < body_rects.length; j++){
    body_rects[j].classList.add('body_rect');
}
for(let k = 0; k < body_lines.length; k++){
    body_lines[k].classList.add('body_line');
}
    
        
//
// Add some click
//

radio.addEventListener('click', function(){
    body_hider();
    bodys[i].style.visibility = 'visible';
    // Check gender
    if(this_name == 'body-m'){
        gender = "m";
    } else {
        gender = "f";
    }
    // the cloth_me function is in clothes_.js
    cloth_me();

    // Show the right shade
    for(let z = 0; z < shades.length; z++){
    shades[z].style.visibility = 'hidden';   
        // based on the body type show the correct main shade
        if( gender = "m"){
            shades[2].style.visibility = 'visible';
            shades[3].style.visibility = 'visible';
            shades[0].style.visibility = 'hidden';
            shades[1].style.visibility = 'hidden';

        } else if( gender = "f"){
            shades[0].style.visibility = 'visible';
            shades[1].style.visibility = 'visible';
            shades[2].style.visibility = 'hidden';
            shades[3].style.visibility = 'hidden';
        }
    }
})
}

//
// Hider
//
let body_hider = function(){
    for(let i = 0 ; i < bodys.length; i++){
        // lets hide all the body first
        bodys[i].style.visibility = 'hidden'; 
    }
}

//
// Set up the palette and current color variable
//
let bodycolors = ["#FBF1EE", "#F0C8B9", "#9E6F5F", "#805C52"];


//
// Find a place to put it
//
let bodycolors_wrapper = document.createElement('div');
    bodycolors_wrapper.setAttribute('id', 'bodycolors_wrapper');
    body_controls.appendChild(bodycolors_wrapper);


//
// Establish a current body color variable
//
let current_bodycolor;


//
// Generate the colors and add some interaction
//
for(let i = 0; i < bodycolors.length; i++){
    let body_swatch = document.createElement('div');
    body_swatch.style.backgroundColor = bodycolors[i];
    body_swatch.classList.add('body_swatch');
    // Add a click event to each swatch
    body_swatch.addEventListener('click', function(){
    // Save the clicked color into the current color variable
    current_bodycolor = bodycolors[i];
    // Update the CSS variable determining body paths, rects and lines
    r.style.setProperty('--bodycolor', current_bodycolor);
    console.log(current_bodycolor);
    });
    // Add to the UI
    bodycolors_wrapper.appendChild(body_swatch);
}





for(let i = 0; i < shades.length; i++){
    //let shade_svgs = shades[i].getElementsByTagName('svg');
    //let shade_svgs_id = shade_svgs.getAttribute('id');
    shades[i].style.visibility = 'hidden'; 

    let shade_paths = shades[i].getElementsByTagName('path');
    let shade_rects = shades[i].getElementsByTagName('rect');
    let shade_lines = shades[i].getElementsByTagName('line');
    // Give then a class 'shade' so we can darken them with css

    for(let a = 0; a < shade_paths.length; a++){
        shade_paths[a].classList.add('shade');
    }

    for(let a = 0; a < shade_rects.length; a++){
        shade_rects[a].classList.add('shade');
    }

    for(let a = 0; a < shade_lines.length; a++){
        shade_lines[a].classList.add('shade');
    }

}
//
// Color the shade
//