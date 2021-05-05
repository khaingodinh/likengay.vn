if (!window.isMobile()) {
    $('.right-menu').load("components/network-history.html");
}

$('.j__network__branch').click(function() {
    var $this = $(this);
    $('.j__network__branch').each(function() {
        $(this).removeClass('selected');
        $(this).find('.network__item__selected-icon').remove();
    });
    $this.addClass('selected');
    $this.append('<img class="network__item__selected-icon" width="13" src="images/check-circle.png" alt="">')
});

$('.j__network__amount').click(function() {
    var $this = $(this);
    $('.j__network__amount').each(function() {
        $(this).removeClass('selected');
        $(this).find('.network__item__selected-icon').remove();
    });
    $this.addClass('selected');
    $this.append('<img class="network__item__selected-icon" width="13" src="images/check-circle.png" alt="">')
});

$('#history-btn').click(function() {
    $('#container').load("components/network-history.html");
});