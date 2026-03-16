$(function() {
	window.alert = function(name){
	    var iframe = document.createElement("IFRAME");
	    iframe.style.display="none";
	    iframe.setAttribute("src", 'data:text/plain,');
	    document.documentElement.appendChild(iframe);
	    window.frames[0].window.alert(name);
	    iframe.parentNode.removeChild(iframe);
	};
	
	window.confirm = function (message) {
	    var iframe = document.createElement("IFRAME");
	    iframe.style.display = "none";
	    iframe.setAttribute("src", 'data:text/plain,');
	    document.documentElement.appendChild(iframe);
	    var alertFrame = window.frames[0];
	    var result = alertFrame.window.confirm(message);
	    iframe.parentNode.removeChild(iframe);
	    return result;
	};
	w = $(window).width()
	f = 100 * w / 750;
	$("html").css("font-size", f);
	$(window).resize(function() {
		$("html").css("font-size", f);
	});

	$("body").prepend('<img src="../js/iss.jpg" class="imgIsOrientation" style="position: fixed;top: 0;left: 0;z-index: 9999; display: none;" width="100%"/>');
	// $("body").prepend('<div class="onload" style="opacity:0.95;background: #000;width: 100%;height: 100%; position: fixed;top: 0; left: 0; z-index: 9999;"><img src="../js/loading.gif" style="position: fixed;top: 46%;left: 40%; width: 20%;" alt="" /></div>');

	$("input,select").blur(function() {
		setTimeout(function() {
			var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
			window.scrollTo(0, Math.max(scrollHeight - 1, 0));
		}, 100);
	});
});
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
	if(window.orientation === 180 || window.orientation === 0) {
		//alert('竖屏状态！'); 
		$(".imgIsOrientation").hide();
	}
	if(window.orientation === 90 || window.orientation === -90) {
		//alert('横屏状态！');  
		$(".imgIsOrientation").show();
	}
}, false);

function addLoad(func) {
	var oldonload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
window.onload = function() {
	$(".onload").fadeOut(800);
}