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
