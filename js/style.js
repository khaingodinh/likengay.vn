$(document).click(function(e) {
    if (e.target.id != 'amount_filter' && $(e.target).parents('#amount_filter').length == 0) {
        if ($('#amount_filter').hasClass('selected')) {
            $('#amount_filter').removeClass('selected');
            $('.amount-filer-items').css('display', 'none');
        }
    }
});

$('#amount_filter').click(function() {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        $('.amount-filer-items').css('display', 'none');
    } else {
        $(this).addClass('selected');
        $('.amount-filer-items').removeAttr('style');
    }
});

$('#amount_filter_select ul li').click(function() {
    $('#amount_filter .amount-filter__text').html($(this).html());
});