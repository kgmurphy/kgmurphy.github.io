
<script>
    // objects
    var r = document.documentElement;
    let shades = document.getElementById('shades');
    let color_picker = document.getElementById('color_picker');
    let shade_butt = document.getElementById('shade_butt');
    let shades_amt = document.getElementById('shades_amt');
    // variable to hold the chosen color
    let col;
    let hslcol;
    var hsl_h;
    var hsl_s;
    var hsl_l;
    // offsets
    let offset = 32;
    let xoff = offset;
    let yoff = offset;
    
    // Get the default color from the color picker
    let initcolor = color_picker.value;
    // Remove the hash
    if (initcolor.slice(0,1) === '#'){
        initcolor = initcolor.slice(1);
    }
    // Convert it to HSL
    let inithsl = hexToHSL(initcolor);
    
    hslcol = inithsl;
    
    // catch changes
    color_picker.addEventListener('input', function(){
        col = this.value;
    
        if (col.slice(0, 1) === '#') {
                col = col.slice(1);
            }
            hslcol = hexToHSL(col);
       
    });
    color_picker.addEventListener('change', function(){
        col = this.value;
        if (col.slice(0, 1) === '#') {
                col = col.slice(1);
            }
            hslcol = hexToHSL(col);
    });
    
    
    // Array to hold h s l
    hsl_array = [];
    
    function hexToHSL(H) {
     // Convert hex to RGB first
     let r = "0x" + H[0] + H[1];
     let g = "0x" + H[2] + H[3];
     let b = "0x" + H[4] + H[5];
    
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
          cmax = Math.max(r,g,b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;
    
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    
    h = Math.round(h * 60);
    
    if (h < 0)
        h += 360;
    
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    
    hsl_h = h;
    hsl_s = s;
    hsl_l = l;
    
    // Empty the array
    hsl_array = [];
    // Fill the array each time
        hsl_array.push(hsl_h);
        hsl_array.push(hsl_s);
        hsl_array.push(hsl_l);
        console.log(hsl_array);
        
      return "hsl(" + h + "," + s + "%," + l + "%)";
    
    }
    </script>