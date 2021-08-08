const imgs = ["5_wallpaper.jpg","6_wallpaper.jpg", "7_wallpaper.jpg"]
const img = imgs[Math.floor(Math.random() * imgs.length)];

const bg = document.createElement("img");
bg.src = `images/${img}`;
bg.classList.add("bg");
document.body.appendChild(bg);

/*const body = document.querySelector(".bg");
body.style.backgroundImage = `url('images/${img}')`;*/