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

$('#menu-sp').click(function() {
    $('.content-wrapper').hide();
    $('.right-menu').removeAttr('style');
    $('.left-menu')
        .css('width', '100%')
        .css('background-color', '#fff')
        .css('padding-left', '20px')
        .css('display', 'block');
});

$('.j-currency').click(function() {
    $('.content').hide();
    $('.left-menu').removeAttr('style');
    $('.right-menu')
        .css('width', '100%')
        .css('padding', '15px')
        .css('margin', '0')
        .css('background-color', '#fff')
        .css('display', 'block');
});

$('.left-menu .sub-menu-item a').click(function() {
    $('.left-menu').removeAttr('style');
    $('.content-wrapper').show();
    $('.content').show();
    var menu = $(this).data('menu');
    $('#container').load("components/" + menu + ".html", function(responseTxt, statusTxt, xhr){
        // if(statusTxt == "success")
        //   alert("External content loaded successfully!");
        // if(statusTxt == "error")
        //   alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});