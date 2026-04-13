const sections = document.querySelectorAll('.story-section');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
});

sections.forEach(section => {
observer.observe(section);
});
const maps = document.querySelectorAll('.map-image');
const lightbox = document.getElementById('mapLightbox');
const lightboxImg = document.getElementById('lightboxImage');

maps.forEach(map=>{
map.addEventListener('click',()=>{
lightbox.style.display="flex";
lightboxImg.src = map.src;
});
});

lightbox.addEventListener('click',()=>{
lightbox.style.display="none";
});
