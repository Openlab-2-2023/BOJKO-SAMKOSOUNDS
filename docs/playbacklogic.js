const winds = document.querySelectorAll('#wind');
const playbuttons = document.querySelectorAll('#playbutton');
const hoverbuttons = document.querySelectorAll('#image-button');

playbuttons.forEach((playbutton) => {
    playbutton.style.display = 'none';
});

hoverbuttons.forEach((hoverbutton) => {
    hoverbutton.addEventListener('mouseover', () => {
        const hoveringoverbutton = hoverbutton.querySelector('#playbutton');
        if (hoveringoverbutton) {
            hoveringoverbutton.style.display = 'block';
            
        }

    });
});

