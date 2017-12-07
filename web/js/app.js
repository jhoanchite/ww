var navBar = $('.navbar');
navBar.append('<li class="marker"></li>');
navBar.on("click", "a", function () {
    var navTap = $(this).closest('.navbar');
    var mrkWidth = $(this).parent('li').width();
    var marker = navTap.find('.marker');
    var nx = $(".navbar").offset();
    var lx = $(this).parent('li').offset();
    var left = lx.left - nx.left;
    navBar.find('li').removeClass('active');

    $(this).parent().addClass('active');
    marker.removeClass("anim").css({
        "width": mrkWidth,
        "left": left
    });
    setTimeout(function () {
        marker.addClass("anim")
    }, 200);
});


$('.share > a').on('click', function (e) {
    e.preventDefault()
    $(this).parent().find('div').toggleClass('ver animated fadeInRight');


});
$('.sociallinks').click(function () {
    $('.sociallinks').removeClass('ver');
});
$('.navbar-toggler').click(function () {
    $('.navbar-collapse').toggleClass('collapse');

});
