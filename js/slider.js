
const image = [
    "image/p1.jfif",
    "image/p2.jpg",
    "image/p3.jfif",
];

let imageIndex = 0;
const img = document.getElementById('carosel-img');
setInterval(() => {
    if (imageIndex === image.length) {
        imageIndex = 0;
    }
    const imageLink = image[imageIndex];
    console.log(imageLink);
    img.setAttribute('src', imageLink)
    imageIndex++;
}, 1000);