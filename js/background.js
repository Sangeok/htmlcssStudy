const images = [
    "자연1.jpg",
    "자연2.jpg",
    "자연3.jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];
const backgroundImage = document.querySelector(".backgroundImage > img");

backgroundImage.src = `img/${chosenImage}`;