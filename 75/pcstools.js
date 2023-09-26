window.pcs = (function () {
    'use strict';

    function setCss(elem, property, value) {
        elem.style[property] = value;
    }

    function getCss(elem, property) {
        //return elem.style[property];
        return getComputedStyle(elem)[property];
    }

    function on(elem, type, callback) {
        elem.addEventListener(type, callback);
    }


    return function (selector) {
        const elem = document.querySelector(selector);
        const colors = ["rgb(255, 255, 0)", "rgb(255, 165, 0)", "rgb(255, 140, 0)", "rgb(255, 192, 192)", "rgb(139, 0, 0)"];

        return {
            css: function (property, value) {
                if (arguments.length === 2) {
                    setCss(elem, property, value);
                    return this;
                } else {
                    return getCss(elem, property);
                }
            },
            on: function (type, callback) {
                on(elem, type, callback);
                return this;
            },
            hide: function () {
                setCss(elem, 'display', 'none');
                return this;
            },
            show: function () {
                setCss(elem, 'display', 'block');
                return this;
            },
            click: function (callback) {
                on(elem, 'click', callback);
                return this;
            },
            changeColors: function (elem, interval) {
                function colorchanging() {
                    let colornum = 0;
                    elem.style.backgroundColor = colors[colornum];
                    colornum++;
                    if (colornum == colors.length) {
                        colornum = 0;
                    }
                    setTimeout(colorchanging, interval);

                }
            }
        };
    };
}());