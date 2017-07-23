$('#menu').click(function(){
  $('.ui.sidebar')
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle')
});

$('.ui.menu .item').click(function(){
  $('.ui.menu .item').removeClass("active");
  $(this).addClass("active");
})
