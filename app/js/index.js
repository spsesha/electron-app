$('#menu').click(function(){
  $('#sideBarSlide .ui.sidebar')
    .sidebar({context: $('#sideBarSlide')})
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle')
})

$('.ui.menu .item').click(function(){
  $('.ui.menu .item').removeClass("active");
  $(this).addClass("active");
})

$('.ui.two.button').click(function(){
  $('.ui.two.button').removeClass("active");
  $(this).addClass("active");
})
