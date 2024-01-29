const http = require('http');
const url = process.argv[2];

http.get(url, (response) => {
    let thedata = '';
    let totalCharacters = 0;
    response.setEncoding('utf-8');
    response.on('data', (data) => {
        thedata += data;
        totalCharacters += data.length;
    });
    response.on('end', () => {
        console.log(totalCharacters);
        console.log(thedata);
    })
})