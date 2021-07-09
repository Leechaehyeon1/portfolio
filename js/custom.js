$(document).ready(function(){
  $('.menu_btn').on('click', function(e){
    e.preventDefault();
    
    $('body').removeClass('on leave');
    
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $('body').addClass('leave');
      TweenMax.staggerTo('.gnb a', 0.5,
      { y: '100%', },
        0.2
      );
    } else {
      $('body').addClass('on');
      $(this).addClass('on');
      TweenMax.staggerTo('.gnb a', 0.8,
      { y: '0%', delay:1 },
        0.2
      );
    }
  })
  
  $('.gnb a').on('click', function(e){
    e.preventDefault();
    $('.gnb a').removeClass('on');
    $(this).addClass('on');
    var curr = $('.container').scrollTop();
    var target = $(this).data('target');
    var total = $('.'+target).offset().top + curr
    $('.container').animate({scrollTop: total}, 300)
  });

});
