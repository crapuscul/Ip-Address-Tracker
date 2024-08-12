const apiKey = "at_4Rz5kqTPfOVjktmj5QPaYNsm8hqvr"
const searchbtnEl = document.querySelector(".searchbtn");

// Add a default tile layer (OpenStreetMap) to display on load
let map =L.map('map').setView([34.08057, -118.07285], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

searchbtnEl.addEventListener("click", () =>{

    const userInput = document.getElementById("searchfield").value;
    const requestUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${userInput}`;
    // console.log(userInput)
    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    document.querySelector(".ip-placeholder").textContent = data.ip;
    document.querySelector(".loc-placeholder").textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    document.querySelector(".tz-placeholder").textContent =`UTC ${data.location.timezone}`;
    document.querySelector(".isp-placeholder").textContent = data.isp;

    const lat = data.location.lat;
    const lng = data.location.lng;
    if (map){
        map.setView([lat, lng], 13);
    }else{
        map = L.map('map').setView([`${data.location.lat}`, `${data.location.lng}`], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }


    
})

    .catch(error => console.error('Error:', error));
})

