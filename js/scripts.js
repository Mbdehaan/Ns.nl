
$(function() { //menu is open!
    $('.menu_open').click(function() {
        $('.menu_open').toggle();
        $('.menu_closed').toggle();

        $('.navigation').fadeToggle(200);

        $('.header').animate({height: "60px"}, 200);
        
    
    });
});

$(function() { // Menu is closed!
    $('.menu_closed').click(function() {
        $('.menu_closed').toggle();
        $('.menu_open').toggle();

        $('.header').animate({height: "100vh"}, 200);
        
        $('.navigation').delay(600).fadeToggle(200);

    });
});


$(document).ready(function(){
	
	$('ul.tabs li a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li a').removeClass('current');
		$('.sub_menu').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})



















$(document).ready(function(){ 


 //$('.toggle_show', '.navigation').hide();
 //$('.toggle_hide').show();
 //$('.header').toggleClass("header_active");

});


/** 
$(function() {
    $(".menu_control>a").click(function(){
        
        $('.menu_closed',this).toggle();
        $('.menu_open',this).toggle();

        $('.header').toggleClass("header_active");
        
        $('.navigation').delay(300).fadeToggle(500);

        
    });
});
*/