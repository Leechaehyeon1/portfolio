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
      { y: '0%', delay: 1 },
        0.2
      );
    }
  })
  
  // gnb_btn click event
  let menuTab = $('.gnb ul li');
  menuTab.on('click', function(e){
    e.preventDefault();

    menuTab.children('a').removeClass('on');
    
    let i = $(this).index();
    $(this).children('a').addClass('on');
    
    let curr = $('.container').scrollTop();
    let curOffset =  $('.container .section').eq(i).offset().top;
    let total = curOffset + curr;
    $('.container').animate({scrollTop: total}, 500);
  });

  // scroll gnb toggl class event
  $('.container').on('scroll', function(){
    $('.container .section').each(function(){
      if($(this).offset().top <= $(window).scrollTop()){
        let i = $(this).index();

      menuTab.children('a').removeClass('on');
      menuTab.eq(i).children('a').addClass('on');
      }
    });
  });
});
