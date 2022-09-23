const preLoader = document.querySelector('.preloder');

preLoader.classList.add('active');

setTimeout(() => {
    preLoader.classList.remove('active');
}, 2000);