window.addEventListener("DOMContentLoaded", function () {
    let boxes = document.querySelectorAll(".host-physical");

    Array.from(boxes, function (box) {
        box.addEventListener("click", function () {
            alert(this.classList[1]);
        });
    });
});

window.addEventListener("DOMContentLoaded", function () {
    let boxes = document.querySelectorAll(".host-virtual");

    Array.from(boxes, function (box) {
        box.addEventListener("click", function () {
            alert(this.classList[1]);
        });
    });
});

object.addEventListener("DOMContentLoaded", function () {
    let boxes = document.querySelectorAll(".host-physical");

    $(this).css("background-color", "yellow");
});


$("host-physical").hover(function () {
    $(this).css("background-color", "yellow");
}, function () {
    $(this).css("background-color", "pink");
});

$("p").mouseover(function () {
    $("p").css("background-color", "yellow");
});

$("div.host-physical").mouseover(function () {
    $(this).css("background-color", "pink");
});
$("div.host-virtual").mouseenter(function () {
    $(this).css("background-color", "pink");
});