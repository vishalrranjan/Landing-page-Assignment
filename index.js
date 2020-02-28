console.log('done!')
let email = document.querySelector('#email');
let button = document.querySelectorAll('.btn-warning');

button.forEach( item =>{
    item.addEventListener('click',()=>{
        alert("Selected");
    })
}) 
