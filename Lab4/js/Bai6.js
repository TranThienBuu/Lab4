$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault(); // Ngăn form được gửi đi

        // Lấy giá trị của trường nhập liệu
        var username = $('input[type="text"]').val();
        var password = $('input[type="password"]').val();

        // Kiểm tra dữ liệu và hiển thị thông báo
        var usernamePattern = /^[a-z]+$/; // Ký tự thường
        var passwordPattern = /^[0-9]+$/;  // Số

        if (!username.match(usernamePattern)) {
            $('input[type="text"]').css('border', '2px solid red');
            $('<p class="error-message">Username must contain only lowercase letters</p>').insertAfter('input[type="text"]');
        }
        if (!password.match(passwordPattern)) {
            $('input[type="password"]').css('border', '2px solid red');
            $('<p class="error-message">Password must contain only digits</p>').insertAfter('input[type="password"]');
        } else {
            // Dữ liệu hợp lệ, có thể gửi form
            $('form')[0].submit();
        }
    });

    // Xử lý sự kiện khi người dùng bắt đầu nhập lại giá trị vào các trường
    $('input[type="text"]').focus(function () {
        $(this).css('border', '');
        $('.error-message').remove();
    });

    $('input[type="password"]').focus(function () {
        $(this).css('border', '');
        $('.error-message').remove();
    });
});
