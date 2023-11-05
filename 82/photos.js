(async function () {
    const input = document.querySelector('#search');
    const pics = document.getElementById('pics');
    document.getElementById('go').addEventListener('click', async () => {
        if (input.value == 'dogs') {
            console.log('dogs');
            const response = await fetch('dogs.json');
            const dogs = await response.json();
            dogs.forEach(dog => {
                pics.append(`<p><img src=${dog.image} width="50" height="60" />dog Title: ${song.title}</p>`)

            });
        }
        if (input.value == 'cats') {
            const response = await fetch('cats.json')
            const cats = await response.json();
            cats.forEach(cat => {
                //pics.append(`<p><img src=${cat.image} width="50" height="60" />cat Title: ${cat.title}</p>`)
                console.log('cats');
                const catImage = document.createElement('img');
                catImage.src = cat.image;
                catImage.width = 50;
                catImage.height = 60;
                const catTitle = document.createElement('p');
                catTitle.textContent = `cat Title: ${cat.title}`;
                pics.appendChild(catImage);
                pics.appendChild(catTitle);


            });
        }
    });
})();

