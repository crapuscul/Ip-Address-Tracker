const request = "https://geo.ipify.org/api/v2/country,city?apiKey=at_4Rz5kqTPfOVjktmj5QPaYNsm8hqvr&ipAddress=8.8.8.8";
const apiKey = "at_4Rz5kqTPfOVjktmj5QPaYNsm8hqvr"

const searchbtnEl = document.querySelector(".searchbtn");

searchbtnEl.addEventListener("click", () =>{
    const userInput = document.getElementById("searchfield").value;
    const requestUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${userInput}`;
    // console.log(userInput)
    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    document.querySelector(".ip-placeholder").textContent = data.ip;
    document.querySelector(".loc-placeholder").textContent = `${data.location.city}, ${data.location.regionCode} ${data.location.postalCode}`;
    document.querySelector(".tz-placeholder").textContent =`UTC ${data.location.timezone}`;
    document.querySelector(".isp-placeholder").textContent = data.isp;

    
})

    .catch(error => console.error('Error:', error));
})

