
$('.form-check-input').on('click', async function () {
    const response = await fetch('availRecipes.js');

    if (response.status >= 400) {
        $('body').append($('<p>').text(`file not found/could not load: ${response.status} ${response.text}`));
    }
    const data = await response.text();
    const selectedFood = $("input[name='recipe']:checked").val();
    $('.theRecipe').text(data.selectedFood);
})
