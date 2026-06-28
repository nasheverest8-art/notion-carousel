const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

let current = 0;

const image = document.getElementById("carousel-image");

function showImage(){
    image.src = images[current];
}

document.getElementById("next").onclick = () =>{
    current = (current + 1) % images.length;
    showImage();
};

document.getElementById("prev").onclick = () =>{
    current = (current - 1 + images.length) % images.length;
    showImage();
};

showImage();
