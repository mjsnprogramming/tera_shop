
const heart = () => {
    const far = document.querySelectorAll('far');
    const hearts = document.querySelectorAll('#pictures li');
    far.forEach((heart) => {
        heart.addEventListener('click', (hearts) => {
            hearts.style.backgroundColor = 'red';
        })
    });
};


heart();






