(function ($){
	var fadeTime = 600;
    var maxSizeM_w = 750; // 設計尺寸寬
    var maxSizeM_h = 1334 // 設計尺寸高
	$.fn.MainDataInIt = function (){
        // $.Loading.fadeOut(fadeTime, function(){
            $.Body.ClickInIt();
            $.Body.ResizeInIt();
            $('.slider').slick({
                arrows: false,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover:false,
                dotsClass: 'custom-dots',
                customPaging:   function (slider, i) {
                    // console.log(slider);
                    var slideNumber = (i + 1),
                        totalSlides = slider.slideCount;
                    return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
                },
            });
        // });
    };
    $.fn.ClickInIt = function (){
        $.Body.on('click','.totopbtn_wrap', function(e){
            $.temp_click = $(this);
            switch (true){
                case $.temp_click.hasClass('totopbtn_wrap'):
                    $('html,body').animate({scrollTop: 0});
                    break;
            }
        });
    }
	$.fn.ResizeInIt = function (){
        var _ratio_pc = 1920 / 1080
        var _ratio_mo = 750 / 1334
        function resizing(){
            $.b_w = $.Body.width();
            $.b_h = $.Body.height();
            $.w_w = $.Window.width();
            $.w_h = $.Window.height();
            var _size_ratio_0 = 16 * ($.b_w / maxSizeM_w);

            if($.b_w <= maxSizeM_w){
                $.html.css({ "font-size": _size_ratio_0 + "px" });
            	console.log('mobile');
            }
            else{
                $.html.css({ "font-size": 16  + "px" });
            	console.log('pc');
            }
        }
        $.Window.resize(resizing).trigger('resize');
        // console.log('111');
	};
})(jQuery);

$(function(){
    $.html =$('html');
    $.Body =$('body');
    $.Window = $(window);
    $.Loading = $.Body.find('div#loading');
    $(document).ready(function(){
            $.Body.MainDataInIt();
            // console.log('load');
        }
    );
});