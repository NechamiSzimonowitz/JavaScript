window.pcs = window.pcs || {};
window.pcs.messageBox = (function () {
    'use strict';

    const width = 274;
    const height = 162;
    const topOffset = -81;
    const leftOffset = -137;

    return function (msg) {
        const div = document.createElement('div');
        const msgDiv = document.createElement('div');
        msgDiv.innerText = msg;
        msgDiv.style.overflow = 'auto';
        msgDiv.style.height = '7em';

        div.style.border = '1px solid black';
        div.style.backgroundColor = 'lightblue';
        div.style.height = `${height}px`;
        div.style.width = `${width}px`;
        div.style.boxSizing = 'border-box';
        div.style.padding = '1em';
        div.style.position = 'absolute';
        div.style.top = '50%';
        div.style.left = '50%';
        div.style.marginTop = `${topOffset}px`;
        div.style.marginLeft = `${leftOffset}px`;
        div.style.textAlign = 'center';
        div.className = 'messageBox';

        const buttonDiv = document.createElement('div');
        const okButton = document.createElement('button');
        okButton.innerText = 'ok';

        buttonDiv.style.position = 'absolute';
        buttonDiv.style.bottom = '0.5em';
        buttonDiv.style.width = '100%';
        buttonDiv.style.left = 0;

        okButton.addEventListener('click', () => {
            div.style.display = 'none';
        });

        buttonDiv.appendChild(okButton);
        div.appendChild(msgDiv);
        div.appendChild(buttonDiv);
        document.body.appendChild(div);

        function createbuttons([button1, button2, button3]) {
            let buttona = document.createElement('button');
            let buttonb = document.createElement('button');
            let buttonc = document.createElement('button');
            buttona.innerText = button1;
            buttonb.innerText = button2;
            buttonc.innerText = button3;
            buttonDiv.appendChild(buttona);
            buttonDiv.appendChild(buttonb);
            buttonDiv.appendChild(buttonc);

            buttona.addEventListener('click', () => {
                console.log('you clicked' + button1)
            });
            buttonb.addEventListener('click', () => {
                console.log('you clicked' + button2)
            });
            buttonc.addEventListener('click', () => {
                console.log('you clicked' + button3)
            });
        }

        function giveCallBack(funct) {
            funct();
        }
    };
}());