const images = [
{
src:"1.png",
caption:"Image 1"
},

{
src:"2.png",
caption:"Image 2"
},

{
src:"3.png",
caption:"Image 3"
},

{
src:"4.png",
caption:"Image 4"
},

{
src:"5.png",
caption:"Image 5"
},

{
src:"6.png",
caption:"Image 6"
},

{
src:"7.png",
caption:"Image 7"
}
];

let current = 0;

const slide = document.getElementById("slide");
const caption = document.getElementById("caption");
const thumbs = document.getElementById("thumbnails");

function update(){

    slide.style.opacity=0;

    setTimeout(()=>{

        slide.src=images[current].src;
        caption.textContent=images[current].caption;

        slide.style.opacity=1;

        document.querySelectorAll(".thumb").forEach((t,i)=>{

            t.classList.toggle("active",i===current);

        });

    },150);

}

images.forEach((img,index)=>{

    const t=document.createElement("img");

    t.src=img.src;

    t.className="thumb";

    t.onclick=()=>{

        current=index;

        update();

    };

    thumbs.appendChild(t);

});

document.querySelector(".left").onclick=()=>{

    current=(current-1+images.length)%images.length;

    update();

};

document.querySelector(".right").onclick=()=>{

    current=(current+1)%images.length;

    update();

};

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight")
        document.querySelector(".right").click();

    if(e.key==="ArrowLeft")
        document.querySelector(".left").click();

});

let startX=0;

slide.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

slide.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    if(endX-startX>50)
        document.querySelector(".left").click();

    if(startX-endX>50)
        document.querySelector(".right").click();

});

document.getElementById("fullscreen").onclick=()=>{

    if(slide.requestFullscreen){

        slide.requestFullscreen();

    }

};

update();
