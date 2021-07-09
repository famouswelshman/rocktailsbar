let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 38.980496, lng: 1.305204 },
        zoom: 15,
    });
}

function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
}
/*----------------- This is the button function script for Opening times on the index page-----*/
function myFunction() {
    document.getElementById("opening-times2").innerHTML = "Mon - 4pm until 4am";
    document.getElementById("opening-times3").innerHTML = "Tue - 4am until 4pm";
    document.getElementById("opening-times4").innerHTML = "Wed - 4am until 4pm";
    document.getElementById("opening-times5").innerHTML = "Thur - 4am until 4pm";
    document.getElementById("opening-times6").innerHTML = "Fri - 4am until 4pm";
    document.getElementById("opening-times7").innerHTML = "Sat - 4am until 4pm";
    document.getElementById("opening-times8").innerHTML = "Sun - Closed";
}