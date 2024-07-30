window.addEventListener('DOMContentLoaded', (e) => {
    const select = (selectSelector, menu, current, option, activeClass) => {
        const selects = document.querySelectorAll(selectSelector);
    
        selects.forEach(trigger => {
            trigger.classList.remove(activeClass);
            let selectMenu = trigger.querySelector(menu);
            let selectValue = trigger.querySelector(current);
            let selectOptions = trigger.querySelectorAll(option);
    
            trigger.addEventListener('click', (event) => {
                let currTarget = event.currentTarget;
                console.log(selectSelector.slice(1))
                console.log(currTarget);
                if(currTarget.closest(selectSelector)) {
                    currTarget.classList.toggle(activeClass);
        
                    if(currTarget.classList.contains(activeClass)) {
                        selectMenu.style.maxHeight = selectMenu.scrollHeight + 'px';
                    } else {
                        selectMenu.style.maxHeight = null;
                    }
                }
            })
    
            selectMenu.addEventListener('click', (event) => {
                const target = event.target;
    
                if(target.classList.contains(option.slice(1))) {
                    selectValue.textContent = target.textContent;
                    trigger.classList.remove(activeClass);
                }
            })
        })
    }

    const bindData = (formSelector) => {
        const form = document.querySelector(formSelector);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
    
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
            console.log(json);
        })
    }

    select(".custom-select", ".custom-select__menu", ".custom-select__trigger-value", ".custom-select__item-name", "js-active");
    bindData(".form");
})