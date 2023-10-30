/*global $*/
(async function () {
    const response = await fetch('songs.json');
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const songs = await response.json();
    songs.forEach(song => {
        $('.musicOptions').append(` <a href=${song.link}><img src=${song.image || "images/mikejpg.jpg"} width="50" height="60" />Song Title: ${song.title}</a> </br>`)

    });
})();

