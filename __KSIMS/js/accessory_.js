// accessory
let accessory_controls = document.getElementById('accessory_controls');
let accessory_wrapper = document.getElementById('accessory_wrapper');
let accessorys = accessory_wrapper.getElementsByTagName('span');

// For each span - grab the id
for(let i = 0 ; i < accessorys.length; i++){
    // lets hide all the accessory first
    accessorys[i].style.visibility = 'hidden';        
    let this_name = accessorys[i].getAttribute('id');
    //Lets generate some radio buttons
    let radio = document.createElement('input');
    let radio_label = document.createElement('label');
    radio_label.innerHTML = this_name;
    accessory_controls.appendChild(radio_label);
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'accessory_radio');
    radio.setAttribute('id', this_name);
    //let radio_id = radio.getAttribute('id');
    accessory_controls.appendChild(radio);
    // Add some click
    
    radio.addEventListener('click', function(){
        let radio_id = this.getAttribute('id');
        accessory_hider();
        accessorys[i].style.visibility = 'visible';
        
    });
}

// Hider
let accessory_hider = function(){
    for(let i = 0 ; i < accessorys.length; i++){
        // lets hide all the accessory first
        accessorys[i].style.visibility = 'hidden'; 
    }
}