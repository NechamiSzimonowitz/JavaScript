$(document).ready(function () {
    let oddButton = $('#odd');
    let evenButton = $("#even");

    evenButton.on("click", () => {
        $("p:even").css("background-color", "yellow");
        $("p:odd").css("background-color", "white");
    });

    oddButton.on("click", () => {
        $("p:odd").css("background-color", "yellow");
        $("p:even").css("background-color", "white");
    });
});
