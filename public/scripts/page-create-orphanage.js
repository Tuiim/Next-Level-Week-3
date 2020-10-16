// create map
const map = L.map("mapid").setView([-27.2221567,-49.6503069], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon from point
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
})

// add photo field
function addPhotoField() {
    // get photo container #images
    const container = document.querySelector('#images');

    // get container to duplicate .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // clone last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verify if field is empty, if true, dont add to images container
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return;
    }
   
    // clear field before adding new images
    input.value = "";
   
    // add clone to #images container
    container.appendChild(newFieldContainer);
}

// remove photo field
function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        // clear field value
        span.parentNode.children[0].value = "";
        return;
    }

    // remove field
    span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
    // remove .active class from buttons
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));

    // add .active class on the clicked button
    const button = event.currentTarget
    button.classList.add('active');

    // refresh hidden input with selected value
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value;
}