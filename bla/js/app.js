$(document).ready(function(){
	var a = document.querySelectorAll('.body .box');
	$(window).on('scroll',function(){
		for (var i = 0; i < a.length; i++) {
			if ($(window).scrollTop() > $(a[i]).offset().top) {
				$(a[i]).addClass('hide');
				var id = $(a[i]).data('id');
				$('.back').find("[data-id='" + id + "']").addClass('show')
			}
		}	
	})
})