// BODIES
// 1. Get all the body styles:
let body_wrapper    = document.getElementById('body_wrapper');
let bodystyles      = body_wrapper.getElementsByTagName('svg');

// 2. Give them all a class of body and an individual id
for(let i = 0; i < bodystyles.length; i++){
    let attribute = document.createAttribute('id');
    // 2.1 Add a class
    bodystyles[i].classList.add('body');
    // 2.1 Add the unique id
    attribute.value = 'bodystyle_' + i;
    bodystyles[i].setAttributeNode(attribute);
    // 2.3 Get all the paths, lines and rects of each bodystyle
    // in order to change their color
    let body_paths = bodystyles[i].getElementsByTagName('path');
    let body_rects = bodystyles[i].getElementsByTagName('rect');
    let body_lines = bodystyles[i].getElementsByTagName('line');
    // 2.4 Add classes to all the paths and rects in each svg
    for(let j = 0; j < body_paths.length; j++){
        body_paths[j].classList.add('body_path');
    }
    for(let j = 0; j < body_rects.length; j++){
        body_rects[j].classList.add('body_rect');
    }
    for(let k = 0; k < body_lines.length; k++){
        body_lines[k].classList.add('body_line');
    }
}

// Dont forget the shades! - they need the same color as the body
// CSS darkens this color

let shades_wrapper    = document.getElementById('shades_wrapper');
let shadesstyles      = shades_wrapper.getElementsByTagName('svg');

for(let i = 0; i < shadesstyles.length; i++){
    let front = shadesstyles[0];
    let side = shadesstyles[1];
    let front_shade_paths = front.getElementsByTagName('path');
    let side_shade_paths = side.getElementsByTagName('path');
    //let shade_paths = shadesstyles[i].getElementsByTagName('path');
    for(let j = 0; j < front_shade_paths.length; j++){
        front_shade_paths[j].classList.add('front_shade');
    }
    for(let j = 0; j < side_shade_paths.length; j++){
        side_shade_paths[j].classList.add('side_shade');
    }
}


// 3. Set up the palette and current color variable
let bodycolors = ["#9A8461", "#64563F", "#322B20", "#1C1E21", "#E9EAEC"];
// 4. Find a place to put it
let bodycolors_wrapper = document.getElementById('bodycolors_wrapper');
// 5. Establish a current body color variable
let current_bodycolor;
// 6. Generate the colors and add some interaction

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


// 7. When radio button is chosen --> show the body
let body_radios = document.getElementsByName('body_radio');
// Get all the bodys
let all_bodys = document.getElementsByClassName('body');
// Make them all variables
let bodystyle_0 = document.getElementById('bodystyle_0'); 
let bodystyle_1 = document.getElementById('bodystyle_1');


// Loop through them and add click event
for(let i = 0; i < body_radios.length; i++){
    body_radios[i].addEventListener('click', function(){
        let body_Id = body_radios[i].getAttribute('id');  
        if
        (body_Id ==  'bodystyle_0_radio'){
            hideAllbody(bodystyle_0);// hide all the bodys except this one
        }
        
        else if
        (body_Id ==  'bodystyle_1_radio'){
            hideAllbody(bodystyle_1);// hide all the bodys except this one
        } 
    });
}

// Function to hide all the other body
let hideAllbody = function(exception){
    for(let i = 0; i < all_bodys.length; i++){
        all_bodys[i].style.visibility = 'hidden';
        exception.style.visibility = 'visible';
    }
}