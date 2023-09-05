(function () {
    'use strict';
    const button = document.querySelector('.button');
    let i = 2;
    button.addEventListener('click', createnewbutton);


    function createnewbutton() {
        const Mynewbutton = document.createElement('button');
        document.body.appendChild(Mynewbutton);
        Mynewbutton.textContent = i;
        i++;
        Mynewbutton.addEventListener('click', createnewbutton);
        Mynewbutton.style.padding = '1em';
    }

})();


