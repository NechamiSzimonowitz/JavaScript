const http = require('http');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

http.get(url1, (response) => {
    let thedata = '';
    response.setEncoding('utf-8');
    response.on('data', (data) => {
        thedata += data;
    });
    response.on('end', () => {
        console.log(thedata);
    })
})

http.get(url2, (response) => {
    let thedata = '';
    response.setEncoding('utf-8');
    response.on('data', (data) => {
        thedata += data;
    });
    response.on('end', () => {
        console.log(thedata);
    })
})

http.get(url3, (response) => {
    let thedata = '';
    response.setEncoding('utf-8');
    response.on('data', (data) => {
        thedata += data;
    });
    response.on('end', () => {
        console.log(thedata);
    })
})