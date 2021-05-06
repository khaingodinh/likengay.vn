$('.guide__link').click(function() {
    var menu = $(this).data('guide');
    $('#container').load("components/" + menu + ".html");
});