$(document).click(function(e) {
    if (e.target.id != 'table_filter' && $(e.target).parents('#table_filter').length == 0) {
        if ($('#table_filter').hasClass('selected')) {
            $('#table_filter').removeClass('selected');
            $('.table-filter-items').css('display', 'none');
        }
    }
});

$('#table_filter').click(function() {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        $('.table-filter-items').css('display', 'none');
    } else {
        $(this).addClass('selected');
        $('.table-filter-items').removeAttr('style');
    }
});

$('#table_filter_select ul li').click(function() {
    $('#table_filter .table-filter__text').html($(this).html());
});