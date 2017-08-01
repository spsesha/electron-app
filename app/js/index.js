$('#menu').click(function(){
  $('#sideBarSlide .ui.sidebar')
    .sidebar({context: $('#sideBarSlide')})
    .sidebar('setting', 'transition', 'scale down')
    .sidebar('toggle')
})

$('.ui.menu .item').click(function(){
  $('.ui.menu .item').removeClass("active");
  $(this).addClass("active");
})

$('.ui.accordion').accordion();
$('.ui.modal').modal();
