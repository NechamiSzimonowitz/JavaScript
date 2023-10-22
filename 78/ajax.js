$('.loader').addClass('hidden');
$('#loadButton').on('click', async function () {
    $('.loader').removeClass('hidden');
    const file = $('#fileName').val();
    const response = await fetch(file);

    if (response.status >= 400) {
        $('body').append($('<p>').text(`file not found/could not load: ${response.status} ${response.text}`));
    }
    const data = await response.text();

    setTimeout(function () {
        $('.loader').addClass('hidden');
        $('body').append($('<p>').text(data));
    }, 3000);

})

