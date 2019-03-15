(function(){
	var calc = function(){
		var docElement = document.documentElement;
		var clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth;
		docElement.style.fontSize = 20*(clientWidthValue/375) + 'px';
		// 375px 是 iPhone6 的宽度；2 就是倍数为适配 Retina屏幕 
		// 如果以iPhone6设计网页(width, hegiht)=(720, height) 根节点<html>的font-size: 2*20px=40px
		// 这样就不用每次从Photoshop量取数值然后除以2了
	}
	calc();
	window.addEventListener('resize',calc);
})();