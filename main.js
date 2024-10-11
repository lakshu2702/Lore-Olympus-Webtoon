const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    images.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src'); // Remove the data-src attribute after loading
        }
    });
};

window.addEventListener('scroll', lazyLoadImages);
window.addEventListener('load', lazyLoadImages);