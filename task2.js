let images = [];
let current = 0;

function refreshImages() {
images = [...document.querySelectorAll(".image:not([style*='display: none']) img")];
}

refreshImages();

function openImage(src){
refreshImages();
current = images.findIndex(img => img.src === src);
document.getElementById("viewer").style.display="flex";
document.getElementById("bigImage").src=src;
}

function closeImage(){
document.getElementById("viewer").style.display="none";
}

function next(){
current=(current+1)%images.length;
document.getElementById("bigImage").src=images[current].src;
}

function previous(){
current=(current-1+images.length)%images.length;
document.getElementById("bigImage").src=images[current].src;
}

function filterImages(category){

let gallery=document.querySelectorAll(".image");

gallery.forEach(function(item){

if(category==="all"){
item.style.display="block";
}
else if(item.classList.contains(category)){
item.style.display="block";
}
else{
item.style.display="none";
}

});

refreshImages();

}
