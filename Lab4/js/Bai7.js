$(document).ready(function() {
    let currentNumber = 1;

    // Tạo 64 button với số từ 1 đến 64
    for (let i = 1; i <= 64; i++) {
        let $button = $('<button>', {
            text: i,
            id: 'button-' + i
        });
        $('#game-container').append($button);
    }

    // Xử lý sự kiện khi nhấn vào button
    $('button').click(function() {
        const clickedNumber = parseInt($(this).text());

        if (clickedNumber === currentNumber) {
            $(this).remove();
            currentNumber++;

            if (currentNumber === 65) {
                alert('Chúc mừng! Bạn đã hoàn thành trò chơi!');
            }
        } else {
            alert('Sai! Hãy nhấn vào button số ' + currentNumber + '.');
        }
    });
});
