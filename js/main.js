$(document).ready(function(){
  /* $(".form-title").on('click',(function(e){
        e.preventDefault();
        $(".form-title").removeClass("active-title");
        $(this).addClass("active-title");
    

        $(".content-block").removeClass("active-block").removeClass("in");
        $(href).addClass("active-block");
        
        /*setTimeout(() => {
            $(href).addClass("in")
        }, 1000);
        return false;
   }));*/

$(".form-title").on('click', function(e){
        e.preventDefault();
     
    $(".form-title").removeClass("active-title");
    $(".content-block").hide(300, function(){
        $(".content-block").removeClass("active-block");
    });

    $(this).addClass("active-title");
    let href = this.hash

    $($(this.hash)).show(300, function(){
        $(href).addClass("active-block");
      });

    

    });

/*

$(".form-title").on('click', function(e){
    e.preventDefault();
 
$(".form-title").removeClass("active-title");
$(".content-block").removeClass("active-block");

$(this).addClass("active-title");
let href = $(this).attr("href");
$(href).addClass("active-block");



});*/

//let href = $(this).attr("href");
//let block = $(".content-block[data-tab='+href+']");
//console.log(block);

    //       tab = $('.js-tab-content[data-tab="'+tabName+'"]');
       
    //    $('.js-tab-trigger.active').removeClass('active');
    //    $(this).addClass('active');
       
       
    //    $('.js-tab-content.active').removeClass('active');
    //    tab.addClass('active');
    // });








$("#tel").mask("+7 (999) 999-99-99");
$("#snils").mask("999-999-999 99");
$("#bday").mask("99.99.9999")
});