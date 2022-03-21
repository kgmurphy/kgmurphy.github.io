// Insert a swatch      
        let swatch = document.createElement('div');
            swatch.classList.add('swatch');
            swatch.classList.add('swatch_' + this.index);
// Attach the swatch to the theme wrapper
            themeWrapper.appendChild(swatch);   
// Attach the theme to the main section
            main.appendChild(themeWrapper);
// Next steps:
// 1. get the bb color of the wrapper
// 2. get the bg color of the swatch
// 3. convert these to rgb
// 4. get their luminosities
// 5. run a contrast function on them
// 6. display the contrast value in terms of wcag standards
// 7. update this value every time i change  a h, s or l of the 
//    swatch or the wrapper bg OR the brand main hue

// Swatch -->
        let swatchComputed = window.getComputedStyle(swatch);
        let swatchBgColor = swatchComputed.getPropertyValue('background-color');
        console.log("swatchBgColor:", swatchBgColor);
// Hex to rgb 
        let swatchHex = getRGB(swatchBgColor);
// Get the luminance
        let swatchLuminance = luminance(swatchHex.r, swatchHex.g, swatchHex.b);

// Wrapper -->
        let themeComputed = window.getComputedStyle(themeWrapper);
        let themeBgColor = themeComputed.getPropertyValue('background-color');
// Hex to rgb 
        let themeHex = getRGB(themeBgColor);
// Get the luminance
        let themeLuminance = luminance(themeHex.r, themeHex.g, themeHex.b);
// make a color picker for the swatch and call the contrast function each time
        // Add a background color picker
        let picker = document.createElement('input');
            picker.classList.add('themeWrapper_' + this.index);
// Give it a unique id
      const pickerID = document.createAttribute('id');
            pickerID.value = `picker_` + this.index;
            picker.setAttributeNode(pickerID);
// Input type = color
      const inputType = document.createAttribute('type');
            inputType.value = `color`;
            picker.setAttributeNode(inputType);
// Initial color value
      const initColor = document.createAttribute('value');
            initColor.value = `#333333`;
            picker.setAttributeNode(initColor);
// Add some divs to put the updating values
            let bgOutput = document.createElement('p');
            bgOutput.textContent ='#______';

// Create something to print the results into
            let result = document.createElement('div');

//let this_result = result;
            themeWrapper.appendChild(result);

// Add event to picker
            picker.addEventListener('input', function(){
// Set the theme background-color
            //themeWrapper.style.setProperty('background-color', picker.value);
            themeBgColor.style.setProperty('background-color', picker.value);
            bgOutput.textContent = picker.value;
// Hex to rgb 
            let bgHex = hexToRgb(picker.value);
//console.log("rgb:", bgHex);

// Get the luminance
            let bgLuminance = luminance(bgHex.r, bgHex.g, bgHex.b);

            contrastThis(themeLuminance, swatchLuminance, result);
        });
// Append picker to theme wrapper          
        themeWrapper.appendChild(picker);
        