
const navSlide = () => {

    const nav = document.querySelector('#nav');
    const nav_list = document.querySelector('#nav_list');
    const links = document.querySelectorAll('#nav_list ul li');

    nav.addEventListener('click', () => {

       nav_list.classList.toggle('nav_active');

       links.forEach((link) => {
           link.classList.toggle('toggled_links');
       })

    });
};

navSlide();