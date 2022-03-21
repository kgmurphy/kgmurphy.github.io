// HAIR
// 1. Get all the hair styles:
let hair_wrapper    = document.getElementById('hair_wrapper');
let hairstyles      = hair_wrapper.getElementsByTagName('svg');

// 2. Give them all a class of hair and an individual id
for(let i = 0; i < hairstyles.length; i++){
    let attribute = document.createAttribute('id');
    // 2.1 Add a class
    hairstyles[i].classList.add('hair');
    // 2.1 Add the unique id
    attribute.value = 'hairstyle_' + i;
    hairstyles[i].setAttributeNode(attribute);
    // 2.3 Get all the paths, lines and rects of each hairstyle
    // in order to change their color
    let hair_paths = hairstyles[i].getElementsByTagName('path');
    let hair_rects = hairstyles[i].getElementsByTagName('rect');
    let hair_lines = hairstyles[i].getElementsByTagName('line');
    // 2.4 Add classes to all the paths and rects in each svg
    for(let j = 0; j < hair_paths.length; j++){
        hair_paths[j].classList.add('hair_path');
    }
    for(let j = 0; j < hair_rects.length; j++){
        hair_rects[j].classList.add('hair_rect');
    }
    for(let k = 0; k < hair_lines.length; k++){
        hair_lines[k].classList.add('hair_line');
    }
}

// 3. Set up the palette and current color variable
let haircolors = ["#9A8461", "#64563F", "#322B20", "#1C1E21", "#E9EAEC"];
// 4. Find a place to put it
let haircolors_wrapper = document.getElementById('haircolors_wrapper');
// 5. Establish a current hair color variable
let current_haircolor;
// 6. Generate the colors and add some interaction
for(let i = 0; i < haircolors.length; i++){
    let hair_swatch = document.createElement('div');
    hair_swatch.style.backgroundColor = haircolors[i];
    hair_swatch.classList.add('hair_swatch');
    // Adda click event to each swatch
    hair_swatch.addEventListener('click', function(){
    // Save the clicked color into the current color variable
    current_haircolor = haircolors[i];
    // Update the CSS variable determining hair paths, rects and lines
    r.style.setProperty('--haircolor', current_haircolor);
    console.log(current_haircolor);
    });
    // Add to the UI
    haircolors_wrapper.appendChild(hair_swatch);
}

// 7. When radio button is chosen --> show the hair
let hair_radios = document.getElementsByName('hair_radio');
// Get all the hairs
let all_hairs = document.getElementsByClassName('hair');
// Make them all variables
let hairstyle_0 = document.getElementById('hairstyle_0'); 
let hairstyle_1 = document.getElementById('hairstyle_1');
let hairstyle_2 = document.getElementById('hairstyle_2');
let hairstyle_3 = document.getElementById('hairstyle_3');
let hairstyle_4 = document.getElementById('hairstyle_4');


// Loop through them and add click event
for(let i = 0; i < hair_radios.length; i++){
    hair_radios[i].addEventListener('click', function(){
        let hair_Id = hair_radios[i].getAttribute('id');  
        if
        (hair_Id ==  'hairstyle_0_radio'){
            hideAllHair(hairstyle_0);// hide all the hairs except this one
        }
        
        else if
        (hair_Id ==  'hairstyle_1_radio'){
            hideAllHair(hairstyle_1);// hide all the hairs except this one
        }
        else if
        (hair_Id ==  'hairstyle_2_radio'){
            hideAllHair(hairstyle_2);// hide all the hairs except this one
        }
        else if
        (hair_Id ==  'hairstyle_3_radio'){
            hideAllHair(hairstyle_3);// hide all the hairs except this one
        }
        else if
        (hair_Id ==  'hairstyle_4_radio'){
            hideAllHair(hairstyle_4);// hide all the hairs except this one
        }
        
    });
}

// Function to hide all the other hair
let hideAllHair = function(exception){
    for(let i = 0; i < all_hairs.length; i++){
        all_hairs[i].style.visibility = 'hidden';
        exception.style.visibility = 'visible';
    }
}