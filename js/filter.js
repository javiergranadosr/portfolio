(function(){
	$(document).ready(function(){
		$(".btn-menu").click(function(e){
		
			var filtro = $(this).attr("data-filter");

			if (filtro == "todos") {
				$(".box-img").show(100);
			} else {
				$(".box-img").not("."+filtro).hide(50);
				$(".box-img").filter("."+filtro).show(50);
			}
		});

		$("button").click(function(){
			$(this).addClass("active-menu").siblings().removeClass("active-menu");
		});
	});
}())