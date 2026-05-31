let progress = 0;

const fill = document.getElementById("fill");
const connected = document.getElementById("connected");
const enterBtn = document.getElementById("enterBtn");

const timer = setInterval(() => {

    progress++;

    fill.style.width = progress + "%";

    if(progress >= 100){

        clearInterval(timer);

        connected.innerHTML = `
        ❤️ Connection Established ❤️
        <br><br>
        Target Found:
        <br>
        💕 My Kashmiri Baddie 💕
        <br><br>
        Access Granted...
        `;

        enterBtn.classList.remove("hidden");
    }

},100);