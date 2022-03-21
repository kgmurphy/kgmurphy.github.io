// HAIR
    let hair_controls = document.getElementById('hair_controls');
    let hair_wrapper = document.getElementById('hair_wrapper');
    let hairs = hair_wrapper.getElementsByTagName('span');
    
    // For each span - grab the id
    for(let i = 0 ; i < hairs.length; i++){
    //
    // lets hide all the hair first
    //
    hairs[i].style.visibility = 'hidden';        
    let this_name = hairs[i].getAttribute('id');
    //
    //Lets generate some radio buttons
    //
    let radio = document.createElement('input');
    let radio_label = document.createElement('label');
    let radio_set = document.createElement('div');
    let radio_thumb = document.createElement('div');
    radio_thumb.innerHTML = '<img src="images/hairs/'  + this_name + '.svg'  + '"' + 'width="128' + 'height="128' + '></img>';
   // <img src="images/hairs/hair-fade.svg" alt=""></img>

    radio_set.classList.add('radio_set');
    radio_thumb.classList.add('radio_thumb');

    //radio_label.innerHTML = this_name;

    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'hair_radio');
    radio.setAttribute('id', this_name);


    //radio_label.innerHTML += this_name;
    radio_set.appendChild(radio_label);
    radio_label.appendChild(radio_thumb);
    
    radio_label.appendChild(radio);

    


    hair_controls.appendChild(radio_set);
    
    //
    // Get all the paths, lines and rects of each hairstyle
    // in order to change their color
    //
    let hair_paths = hairs[i].getElementsByTagName('path');
    let hair_rects = hairs[i].getElementsByTagName('rect');
    let hair_lines = hairs[i].getElementsByTagName('line');
    //
    // Add classes to all the paths and rects in each svg
    //
    for(let j = 0; j < hair_paths.length; j++){
        hair_paths[j].classList.add('hair_path');
    }
    for(let j = 0; j < hair_rects.length; j++){
        hair_rects[j].classList.add('hair_rect');
    }
    for(let k = 0; k < hair_lines.length; k++){
        hair_lines[k].classList.add('hair_line');
    }
        
        
        
        
    //
    // Add some click
    //
        radio.addEventListener('click', function(){
            //let radio_id = this.getAttribute('id');
            hair_hider();
            hairs[i].style.visibility = 'visible';
    
            
        });
    }

    // Hider
    let hair_hider = function(){
        for(let i = 0 ; i < hairs.length; i++){
            // lets hide all the hair first
            hairs[i].style.visibility = 'hidden'; 
        }
    }

    //
    // Set up the palette and current color variable
    //
    let haircolors = ["#E9EAEC", "#9A8461", "#64563F", "#4B402F", "#1C1E21"];
    //
    // Find a place to put it
    //
    let haircolors_wrapper = document.createElement('div');
        haircolors_wrapper.setAttribute('id', 'haircolors_wrapper');
        hair_controls.appendChild(haircolors_wrapper);
    //
    // Establish a current hair color variable
    //
    let current_haircolor;
    //
    // Generate the colors and add some interaction
    //
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