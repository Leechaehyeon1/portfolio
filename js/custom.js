$(document).ready(function(){

  // loading animation
  $(window).load(function(){
    let seconds = $('.loading_wrap span').text();
    let timerId;
    
    timerId = setInterval(function(){
      seconds--;
      if(seconds < 0){
        clearInterval(timerId);
      }
      $('.loading_wrap').find('span').text(seconds);
    }, 1000);

    $('.loading_wrap').delay(5000).animate({marginTop: '-100vh'}, 1300);
  });

  // menu_btn click event
  $('.menu_btn').on('click', function(e){
    e.preventDefault();
    
    $('body').removeClass('on leave');
    
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $('body').addClass('leave');
      TweenMax.staggerTo('.gnb a', 0.5,
      { y: '100%' },
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
  
  // gnb_btn click event
  $('.gnb a').on('click', function(e){
    e.preventDefault();

    $('.gnb a').removeClass('on');
    $(this).addClass('on');
    var curr = $('.container').scrollTop();
    var target = $(this).data('target');
    var total = $('.'+target).offset().top + curr;
    $('.container').animate({scrollTop: total}, 300);
  });

});
