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