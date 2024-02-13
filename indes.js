const yesBTN = document.querySelector('#Y');
yesBTN.addEventListener('click',function () {
    {
        alert('sabia que aceptarias <3')
    }
});

const N=document.querySelector('#N');
N.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    N.style.setProperty('top',randomY+'%');
    N.style.setProperty('left',randomX+'%');
    N.style.setProperty('transform,'`translate(-${randomX}%,-${randomY}%)`);

})