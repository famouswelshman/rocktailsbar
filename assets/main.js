/** This is the Google Maps API code for display of Maps on the Index page */

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 38.980496, lng: 1.305204 },
        zoom: 15,
    });
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

/**  The following code is for the contact form where upon when the fields are completed the function is called when the submit button is pressed 
 * This code was part of the EmailJS code which required registration and the inclusion of an ID Key within the script code
 */

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'Gmail';
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