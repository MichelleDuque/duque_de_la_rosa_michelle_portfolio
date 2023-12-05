(() => {

    $(".is-expandable").on('click', function(){
        const $that = $(this);
        const $content = $that.find(".content");
        const $contentSpan = $that.find(".content span");
        
        if(!$that.hasClass("is-expanded")) {
          TweenLite.set($content, {height:"auto"});
          TweenLite.from($content, 0.4, {height:0, ease: Expo.easeOut});   
          $($contentSpan).fadeIn('fast').css("display","inline-block");
          $that.addClass("is-expanded");
        } else {
          TweenLite.to($content, 0.4, {delay:0.09,height:0, ease: Expo.easeOut});
          $($contentSpan).fadeOut('fast');
          $that.removeClass("is-expanded");
        }
      })


      

})();