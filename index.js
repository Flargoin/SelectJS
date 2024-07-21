window.addEventListener('DOMContentLoaded', (e) => {
    const selects = document.querySelectorAll(".custom-select");



    selects.forEach(select => {
        select.classList.remove('js-active');
        let menu = select.querySelector('.custom-select__menu');
        let currValue = select.querySelector('.custom-select__trigger-value');
        let options = select.querySelectorAll('.custom-select__item-value');

        select.addEventListener('click', (e) => {
            
            let currTarget = e.currentTarget;
    
            if(currTarget.closest('.custom-select')) {
                currTarget.classList.toggle('js-active');
    
                if(currTarget.classList.contains('js-active')) {
                    menu.style.maxHeight = menu.scrollHeight + 'px';
                } else {
                    menu.style.maxHeight = null;
                }
            }
        })

        options.forEach(option => {
            option.addEventListener('click', (e) => {
             console.log(e.target);
             currValue.textContent = e.target.value;
    
             select.classList.toggle('js-active');
            })
         })
    
         window.addEventListener('click', (e) => {
            let target = e.target;
    
            if(!target.closest('.custom-select')) {
                select.classList.remove('js-active');
                menu.style.maxHeight = null;
            }
         })
    })




})