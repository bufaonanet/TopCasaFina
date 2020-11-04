$('#navbarNav').on('show.bs.collapse', () => {
    $('.banner').css('transform', 'translate(-50%,-10%');
});

$('#navbarNav').on('hide.bs.collapse', () => {
    $('.banner').css('transform', 'translate(-50%,-50%');
});