$(".check-box").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else {
        $(this).addClass("active");
    }
})

$(".lb").click(function(){
    $(".lb").removeClass("active");
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else {
        $(this).addClass("active");
    }
})