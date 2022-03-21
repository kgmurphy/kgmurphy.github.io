// ACCESSORIES
// Glasses
let glasses_wrapper = document.getElementById('glasses_wrapper');
// Get all the glasses
let all_glasses = glasses_wrapper.getElementsByTagName('svg');
// Give all the glasses a class name 'glasses'
for(let i = 0; i < all_glasses.length; i++){
    let attribute = document.createAttribute('id');
    all_glasses[i].classList.add('glasses');
    attribute.value = 'glassesstyle_' + i;
    all_glasses[i].setAttributeNode(attribute);
}

// When radio button is chosen --> show the glasses
let glasses_radios = document.getElementsByName('glasses_radio');

// Make them all variables
let glassesstyle_0 = document.getElementById('glassesstyle_0'); 
let glassesstyle_1 = document.getElementById('glassesstyle_1');
let glassesstyle_2 = document.getElementById('glassesstyle_2');



// Loop through them and add click event
for(let i = 0; i < glasses_radios.length; i++){
    glasses_radios[i].addEventListener('click', function(){
        let glasses_Id = glasses_radios[i].getAttribute('id');  
        if
        (glasses_Id ==  'glassesstyle_0_radio'){
            hideAllGlasses(glassesstyle_0);// hide all the hairs except this one
        }        
        else if
        (glasses_Id ==  'glassesstyle_1_radio'){
            hideAllGlasses(glassesstyle_1);// hide all the hairs except this one
        }  
        else if
        (glasses_Id ==  'glassesstyle_2_radio'){
            hideAllGlasses(glassesstyle_2);// hide all the hairs except this one
        }  
        
    });
}

// Function to hide all the other hair
let hideAllGlasses = function(exception){
    for(let i = 0; i < all_glasses.length; i++){
        all_glasses[i].style.visibility = 'hidden';
        exception.style.visibility = 'visible';
    }
}

// JEWELRY
let jewelry_wrapper = document.getElementById('jewelry_wrapper');
// Get all the jewelry
let all_jewelry = jewelry_wrapper.getElementsByTagName('svg');
// Give all the jewelry a class name 'jewelry'
for(let i = 0; i < all_jewelry.length; i++){
let attribute = document.createAttribute('id');
all_jewelry[i].classList.add('jewelry');
attribute.value = 'jewelrystyle_' + i;
all_jewelry[i].setAttributeNode(attribute);
}

// When radio button is chosen --> show the jewelry
let jewelry_radios = document.getElementsByName('jewelry_radio');

// Make them all variables
let jewelrystyle_0 = document.getElementById('jewelrystyle_0'); 
let jewelrystyle_1 = document.getElementById('jewelrystyle_1');
let jewelrystyle_2 = document.getElementById('jewelrystyle_2');



// Loop through them and add click event
for(let i = 0; i < jewelry_radios.length; i++){
jewelry_radios[i].addEventListener('click', function(){
    let jewelry_Id = jewelry_radios[i].getAttribute('id');  
    if
    (jewelry_Id ==  'jewelrystyle_0_radio'){
        hideAlljewelry(jewelrystyle_0);// hide all the hairs except this one
    }        
    else if
    (jewelry_Id ==  'jewelrystyle_1_radio'){
        hideAlljewelry(jewelrystyle_1);// hide all the hairs except this one
    }  
    else if
    (jewelry_Id ==  'jewelrystyle_2_radio'){
        hideAlljewelry(jewelrystyle_2);// hide all the hairs except this one
    }  
    
});
}

// Function to hide all the other hair
let hideAlljewelry = function(exception){
for(let i = 0; i < all_jewelry.length; i++){
    all_jewelry[i].style.visibility = 'hidden';
    exception.style.visibility = 'visible';
}
}
