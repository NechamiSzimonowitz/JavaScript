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
            locations.push({ top, left });
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
    $('#save').on('click', () => {
        const docName = $('#saveName').val();
        $('#saveName').val('');
        localStorage.setItem(docName, JSON.stringify(locations));
    })

})();



