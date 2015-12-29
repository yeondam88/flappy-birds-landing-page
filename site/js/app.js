$(document).ready(function(){
  $(".btn-2").mousedown(function(){
  	$(this)
  		.velocity({ translateY: "-30px", rotateZ: "10deg" }, 100, "easeOut")
  		.velocity({ rotateZ: "-8deg" }, 150)
  		.velocity({ translateY: "0", rotateZ: "0" }, {duration: 600, easing: [ 500, 14 ]});
  });
  
  $(".menu").mouseenter(function(){
	$(this)
		.velocity( { translateY: "-10px", backgroundColor: "#FFEB3B" }, 400 );
});
  
});


  