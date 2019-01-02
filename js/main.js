$('.btn__toggle_menu').click(function(e){
	e.preventDefault();
	$("#sidebar").toggleClass('active');
});

$("input").focus(function(e){	
	$('.form-group').addClass('focused');
	e.preventDefault();
});

$("input").blur(function(e){	
	$('.form-group').removeClass('focused');
	e.preventDefault();
});

$(".inbox__op_items, .chat__box").niceScroll({
  cursorcolor:"#cccccc",
  cursorwidth:"6px",
  cursorborder: "0"
});

document.addEventListener('DOMContentLoaded', function(){
  var chatWindow = document.querySelector('.inbox__op_items');
  chatWindow.scrollTop = chatWindow.scrollHeight;
});