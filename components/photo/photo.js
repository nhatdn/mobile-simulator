var images = document.querySelectorAll('.body-photo img')
var next = document.querySelector('.all-photo img')
var close = document.querySelector('.button')
var galleryImg = document.querySelector('.show-photo img')
var gallery = document.querySelector('.show-detail-photo')

var currentIndex = 0;
function showGallery() {
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index)=> {
    item.addEventListener('click', function(){
        currentIndex = index
        showGallery()
    })
});
close.addEventListener('click', function(){
    gallery.classList.remove('show')

});

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
    gallery.classList.remove('show')
    }
}); 
next.addEventListener('click', function(){
        currentIndex = index
        galleryImg.src = images[currentIndex].src
});
