$('.j-recharge__momo').click(function() {
    $('.recharge .recharge__momo').show();
    $('.recharge .recharge__vietcombank').hide();
});

$('.j-recharge__vietcombank').click(function() {
    $('.recharge .recharge__momo').hide();
    $('.recharge .recharge__vietcombank').show();
});