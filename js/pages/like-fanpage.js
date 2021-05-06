$('#history-btn').click(function() {
    $('#container').load("components/transaction-history.html");
});

$('.like-fanpage__form__btn').click(function() {
    $(this).hide();
    $('.like-fanpage__form__processing').show();
    window.moveProgressBar(function () {
        // $('.like-fanpage__form__processing').html(
        //     '<div class="d-flex align-items-center justify-content-center flex-column w-100">' + 
        //         '<img src="images/process-success.png" alt="">' +
        //         '<span>Bạn đã mua thành công 500 like với giá 60đ</span>' +
        //     '</div>');
        $('.like-fanpage__form__processing').html(
            '<div class="d-flex align-items-center justify-content-center flex-column w-100">' + 
                '<img src="images/process-fail.png" alt="">' +
                '<span>Tạo tiến trình thất bại</span>' +
                '<span>Tài khoản của bạn không đủ tiền</span>' +
            '</div>');
    });
});