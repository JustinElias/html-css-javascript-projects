//Create Variables

const left=document.querySelector('.left');
const right=document.querySelector('.right');
const container=document.querySelector('.container');




left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left'); //adds the class 'hover-left' when left side has mouse on it

});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left'); //removes the class 'hover-left' when there is no mouse on it

});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right'); //adds the class 'hover-right' when right side has mouse on it

});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right'); //removes the class 'hover-right' when there is no mouse on it

});
