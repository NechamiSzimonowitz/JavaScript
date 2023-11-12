/*global $*/
(function () {
    let dragging;
    let offset;
    let draggingElement;
    const dragObject = $('.draggable');
    const locations = [];


    dragObject.on('mousedown', e => {
        if ($(e.target).hasClass('draggable')) {
            console.log($(e.target))
            draggingElement = $((e.target));
            offset = {
                y: e.pageY - draggingElement.offset().top,
                x: e.pageX - draggingElement.offset().left
            };
            dragging = true;
        }
    })

    $(document).on('mousemove', mouseMoveHandler);

    $(document).on('mouseup', e => {
        if (draggingElement) {
            const top = e.pageY - offset.y;
            const left = e.pageX - offset.x;
            const id = draggingElement.attr('id');
            locations.push({ id, top, left });
            draggingElement = null;

        }
        dragging = false;
    })

    function mouseMoveHandler(e) {
        e.preventDefault();
        if (dragging) {
            const top = (e.pageY - offset.y);
            const left = (e.pageX - offset.x);
            draggingElement.css({ 'top': top + 'px', 'left': left + 'px' });
            draggingElement.index(1);
        }
    }


    function saveState() {
        const partsData = [];
        locations.forEach(part => {
            partsData.push({
                id: part.id,
                top: part.top,
                left: part.left
            });
        });
        localStorage.setItem('locations', JSON.stringify(partsData));
    }

    function loadState() {
        const partsData = JSON.parse(localStorage.getItem('locations')) || [];
        partsData.forEach(part => {
            const element = $('#' + part.id);
            element.css({ 'top': part.top + 'px', 'left': part.left + 'px' });
        })
    }

    $('#backroundOptions').on('change', function () {
        const selectedOption = $(this).find(':selected').attr('id');
        const imagePath = 'images/backround' + selectedOption + '.jpg';

        $('body').css('background-image', 'url(' + imagePath + ')');
    })
    $('#restart').on('click', () => {
        localStorage.clear();
        location.reload(true)
    })

    $('#save').on('click', () => {
        saveState();
    })

    loadState();
})();



