// shade
// 1. Get all the shade styles:
let shade_wrapper    = document.getElementById('shade_wrapper');
let shadestyles      = shade_wrapper.getElementsByTagName('svg');

// 2. Give them all a class of shade and an individual id
for(let i = 0; i < shadestyles.length; i++){
    let attribute = document.createAttribute('id');
    // 2.1 Add a class
    shadestyles[i].classList.add('shade');
    // 2.1 Add the unique id
    attribute.value = 'shadestyle_' + i;
    shadestyles[i].setAttributeNode(attribute);
    // 2.3 Get all the paths, lines and rects of each shadestyle
    // in order to change their color
    let shade_paths = shadestyles[i].getElementsByTagName('path');
    let shade_rects = shadestyles[i].getElementsByTagName('rect');
    let shade_lines = shadestyles[i].getElementsByTagName('line');
    // 2.4 Add classes to all the paths and rects in each svg
    for(let j = 0; j < shade_paths.length; j++){
        shade_paths[j].classList.add('shade_path');
    }
    for(let j = 0; j < shade_rects.length; j++){
        shade_rects[j].classList.add('shade_rect');
    }
    for(let k = 0; k < shade_lines.length; k++){
        shade_lines[k].classList.add('shade_line');
    }
}

// 3. Set up the palette and current color variable
let shadecolors = ["#9A8461", "#64563F", "#322B20", "#1C1E21", "#E9EAEC"];
// 4. Find a place to put it
let shadecolors_wrapper = document.getElementById('shadecolors_wrapper');
// 5. Establish a current shade color variable
let current_shadecolor;
// 6. Generate the colors and add some interaction
for(let i = 0; i < shadecolors.length; i++){
    let shade_swatch = document.createElement('div');
    shade_swatch.style.backgroundColor = shadecolors[i];
    shade_swatch.classList.add('shade_swatch');
    // Adda click event to each swatch
    shade_swatch.addEventListener('click', function(){
    // Save the clicked color into the current color variable
    current_shadecolor = shadecolors[i];
    // Update the CSS variable determining shade paths, rects and lines
    r.style.setProperty('--shadecolor', current_shadecolor);
    console.log(current_shadecolor);
    });
    // Add to the UI
    shadecolors_wrapper.appendChild(shade_swatch);
}

// 7. When radio button is chosen --> show the shade
let shade_radios = document.getElementsByName('shade_radio');
// Get all the shades
let all_shades = document.getElementsByClassName('shade');
// Make them all variables
let shadestyle_0 = document.getElementById('shadestyle_0'); 
let shadestyle_1 = document.getElementById('shadestyle_1');
let shadestyle_2 = document.getElementById('shadestyle_2');
let shadestyle_3 = document.getElementById('shadestyle_3');
let shadestyle_4 = document.getElementById('shadestyle_4');



// Loop through them and add click event
for(let ah of shade_radios){
    ah.addEventListener('click', function(){
        let shade_Id = ah.getAttribute('id');  
        if
        (shade_Id ==  'shadestyle_0_radio'){
            hideAllshade(shadestyle_0);// hide all the shades except this one
        }
        
        else if
        (shade_Id ==  'shadestyle_1_radio'){
            hideAllshade(shadestyle_1);// hide all the shades except this one
        }
        else if
        (shade_Id ==  'shadestyle_2_radio'){
            hideAllshade(shadestyle_2);// hide all the shades except this one
        }
        else if
        (shade_Id ==  'shadestyle_3_radio'){
            hideAllshade(shadestyle_3);// hide all the shades except this one
        }
        else if
        (shade_Id ==  'shadestyle_4_radio'){
            hideAllshade(shadestyle_4);// hide all the shades except this one
        }
        else if
        (shade_Id ==  'shadestyle_5_radio'){
            //hideAllshade();// hide all the shades except this one
            for(let i = 0; i < all_shades.length; i++){
                all_shades[i].style.visibilty = 'hidden';
            }
        }


        
        
    });
}

// Function to hide all the other shade
let hideAllshade = function(exception){
for (let ah of all_shades) {
    if (exception === undefined) {

        ah.style.visibility = 'hidden';
    }
   ah.style.visibility = 'hidden';
   exception.style.visibility = 'visible';
}
}
