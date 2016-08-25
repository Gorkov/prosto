$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
    $(".form-button").click(Validate);
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}
// Функция валидации
function Validate(ev) {
    $(".form-input").each(function() {
        if ($(this).value !== '') {
            $(this).addClass("invalide");
            ev.preventDefault();
        } else {
            $(this).removeClass("validate");
            $(".form-button").click(PopUpHide);
        }
    });
}
