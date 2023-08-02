const nav = document.getElementById('icon5');
const bar = document.getElementById('menu');


bar.addEventListener('click',()=>{
    nav.classList.toggle('jav')
})

// const icon = document.getElementById('list');
// const list = document.getElementById('span1');


// list.addEventListener('click',()=>{
//     nav.classList.toggle('muff')
// })


const barIcon = document.getElementById('baricon');
const xicon = document.getElementById('x-mark');
const hiddenBox = document.getElementById('follow1');


xicon.addEventListener('click',()=>{
    hiddenBox.classList.toggle('x-none')
})
barIcon.addEventListener('click',()=>{
    hiddenBox.classList.toggle('x-none')
})