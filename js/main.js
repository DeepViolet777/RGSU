$(document).ready(function(){
   /*$(".form-title").on('click',(function(e){
        e.preventDefault();
        $(".form-title").removeClass("active");
        $(this).addClass("active");
        let href = $(this).attr("href");
        $(".content-block").removeClass("active").removeClass("in");
        $(href).addClass("active");
        setTimeout(() => {
            $(href).addClass("in")
        }, 200);
        return false;
    });*/

$(".form-title").on('click', function(e){
        e.preventDefault();
        
    $(".form-title").removeClass("active-title");
    $(".content-block").removeClass("active-block");

    $(this).addClass("active-title");
    let href = $(this).attr("href");
    console.log(href);
    $(href).addClass("active-block");

//let href = $(this).attr("href");
//let block = $(".content-block[data-tab='+href+']");
//console.log(block);

    //       tab = $('.js-tab-content[data-tab="'+tabName+'"]');
       
    //    $('.js-tab-trigger.active').removeClass('active');
    //    $(this).addClass('active');
       
       
    //    $('.js-tab-content.active').removeClass('active');
    //    tab.addClass('active');
    // });
});







$("#tel").mask("+7 (999) 999-99-99");
$("#snils").mask("999-999-999 99");
$("#bday").mask("99.99.9999")
});