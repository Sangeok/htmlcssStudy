const images = [
    "자연1.jpg",
    "자연2.jpg",
    "자연3.jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);