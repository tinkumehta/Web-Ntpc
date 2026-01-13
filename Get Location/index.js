// alert("Hell")

const button = document.getElementById('btn');

function getLocation(postion) {
    console.log(postion);
}

function failedToGet() {
    console.log("There was some issue");
    
}

button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(getLocation, failedToGet)
})