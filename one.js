function loadingscreen(){
    document.querySelector(".container").classList.add("fade-out");
}

function fadeout(){
    setInterval(loadingscreen, 11000);
}
window.onload = fadeout;
