// face
let face_controls = document.getElementById('face_controls');
let face_wrapper = document.getElementById('face_wrapper');
let faces = face_wrapper.getElementsByTagName('span');

// For each span - grab the id
for(let i = 0 ; i < faces.length; i++){
//
// lets hide all the face first
//
faces[i].style.visibility = 'hidden';        
let this_name = faces[i].getAttribute('id');


//
//Lets generate some radio buttons
//
let radio = document.createElement('input');
let radio_label = document.createElement('label');
radio_label.innerHTML = this_name;
face_controls.appendChild(radio_label);
radio.setAttribute('type', 'radio');
radio.setAttribute('name', 'face_radio');
radio.setAttribute('id', this_name);
face_controls.appendChild(radio);
 
        
//
// Add some click
//
radio.addEventListener('click', function(){
    face_hider();
    faces[i].style.visibility = 'visible';    
});
}

//
// Hider
//
let face_hider = function(){
    for(let i = 0 ; i < faces.length; i++){
        // lets hide all the face first
        faces[i].style.visibility = 'hidden'; 
    }
}

