window.addEventListener('DOMContentLoaded', (e) => {
    const select = document.querySelector(".custom-select");
    const selectTrigger = select.querySelector('.custom-select__trigger');
    let menu = select.querySelector('.custom-select__menu');
    let currValue = select.querySelector('.custom-select__trigger-value');
    let options = select.querySelectorAll('.custom-select__item-value');


    select.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.currentTarget;
        
        target.classList.toggle('js-active');

        if(target.classList.contains('js-active')) {
            menu.style.maxHeight = menu.scrollHeight + 'px';
        } else {
            menu.style.maxHeight = null;
        }
    })

    options.forEach(option => {
        option.addEventListener('click', (e) => {
         console.log(e.target);
         currValue.textContent = option.value;


         menu.style.maxHeight = null;
        })
     })

})