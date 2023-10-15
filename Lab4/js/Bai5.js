$(document).ready(function() {
    function rotateImage() {
        var currentRotation = $('#image').data('rotation') || 0;
        currentRotation += 15;
        $('#image').css({
            transform: 'rotate(' + currentRotation + 'deg)'
        });
        $('#image').data('rotation', currentRotation);
    }

    setInterval(rotateImage, 2000);
});