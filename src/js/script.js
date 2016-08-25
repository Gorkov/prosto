$(document).ready(function(){
    PopUpHide();
    Slider();
    $(".form-button").on('click', Validate);
});
//Функция отображения PopUp
function PopUpShow(){
    $('#popup1').fadeIn(250);
}
//Функция скрытия PopUp
function PopUpHide(){
    $('.form-input').each(function() {
        $(this).val('');
    });
    $('#popup1').find('.invalide').removeClass('invalide').attr('placeholder','');
    $("#popup1").fadeOut(250);
}
//Функция валидации
function Validate(ev) {
    ev.preventDefault();
    var $this = $(this),
        container = $this.closest('#popup1'),
        input = container.find('.form-input'),
        invalide = container.filter('.invalide');
        allInput = container.filter('.form-input');

        input.each(function() {
            if ($(this).val() == '') {
                $(this).addClass('invalide');
                $(this).attr('placeholder','Поле обязательно для заполнения');
               // работаем
            } else if ($(this).val() !== '') {
                $(this).removeClass('invalide').attr('placeholder','');
            }
            
        });
}
//Функция работы слайдера
function Slider() {
    var hwSlideSpeed = 700;
    var hwTimeOut = 4000;
    var hwNeedLinks = true;

    $(document).ready(function(e) {
        $('.slide__item').css(
            {"position" : "absolute",
             "top":'0', "left": '0'}).hide().eq(0).show();
        var slideNum = 0;
        var slideTime;
        slideCount = $("#slider .slide__item").size();
        var animSlide = function(arrow){
            clearTimeout(slideTime);
            $('.slide__item').eq(slideNum).fadeOut(hwSlideSpeed);
            if(arrow == "next"){
                if(slideNum == (slideCount-1)){slideNum=0;}
                else{slideNum++}
                }
            else if(arrow == "prew")
            {
                if(slideNum == 0){slideNum=slideCount-1;}
                else{slideNum-=1}
            }
            else{
                slideNum = arrow;
                }
            $('.slide__item').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
            }
    if(hwNeedLinks){
    var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
        .prependTo('#slider');      
        $('#nextbutton').click(function(){
            animSlide("next");
            return false;
            })
        $('#prewbutton').click(function(){
            animSlide("prew");
            return false;
            })
    }
        var pause = false;
        var rotator = function(){
                if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
                }
        $('#slider-wrap').hover(    
            function(){clearTimeout(slideTime); pause = true;},
            function(){pause = false; rotator();
            });
        rotator();
    });
}
