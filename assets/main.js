/** This is the Google Maps API code for display of Maps on the Index page */

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 38.980496, lng: 1.305204 },
        zoom: 15,
    });
}
/** -- button click toggle runs 'Light Mode' and 'Dark Mode' where style is set by CSS and function run via JS */
function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
}
/** ---- onclick button function script for show and hide of Opening times text on the index page-----*/
function initializeOpeningTimes() {
    var x = document.getElementById("myDIV");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/** ----- Function calls on  */

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_bve9m98';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });