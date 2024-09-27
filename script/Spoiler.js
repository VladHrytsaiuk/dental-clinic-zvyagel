$(document).ready(function(){
	 $('.gallery__button').click(function(event){
		$('.gallery_start').toggleClass('active').next().slideToggle(300);
		if($('.gallery_start').hasClass('active')){
			$('#gallery__button').text('Згорнути');
			$('#gallery__button-pc').css("display","none");
		}
		else{
			$('#gallery__button').text('Всі фото');
			$('#gallery__button-pc').css("display","block");
		}
	 });
});