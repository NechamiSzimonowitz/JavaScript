window.myApp = (function (module) {
    module.utils = (function () {
        'use strict';

        const months = ['January', 'February', 'March', 'April'];

        function foo() {
            console.log('Foo was called');
        }

        function getMonth(index) {
            foo();
            return months[index - 1];
        }

        function getMonthIndex(month) {
            for (let i = 0; i < months.length; i++) {
                if (months[i] === month) {
                    return i + 1;
                }
            }
        }

        /* return {
 
             getMonth,
             getMonthIndex
         };*/
    })
    return module;
}(window.myApp || {}));