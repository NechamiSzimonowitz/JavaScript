const colors = ["rgb(255, 255, 0)", "rgb(255, 165, 0)", "rgb(255, 140, 0)", "rgb(255, 192, 192)", "rgb(139, 0, 0)"];
let colornum = 0;
let changecolor = false;
const colorsbutton = document.querySelector('#colorchanging');
const stopbutton = document.querySelector('#stopchanging');


colorsbutton.addEventListener('click', () => {
    changecolor = true;
    changecolors();
});
stopbutton.addEventListener('click', () => {
    changecolor = false;

});
function changecolors() {
    if (changecolor) {
        document.querySelector('body').style.backgroundColor = colors[colornum];
        const row = colorchanges.insertRow();
        const newColor = row.insertCell();
        const time = row.insertCell();
        newColor.innerText = colors[colornum];
        var now = new Date();
        time.innerText = now.toLocaleString();
        colornum++;
        if (colornum === colors.length) {
            colornum = 0;
        }
        setTimeout(changecolors, 2000);
    }

}