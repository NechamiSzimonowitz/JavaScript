import * as msgBox from 'messagebox.js';

let messageBox = new msgBox()
    .setTitle('The message box')
    .setMessage('hello this is the messagebox')
    .addButton("done", "yellow");

messageBox.show();