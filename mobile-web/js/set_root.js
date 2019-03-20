// 封闭函数
(function(){
	var calc = function(){
		// document.documentElement: <html>
		var docElement = document.documentElement;
		// docElement.clientWidth <html>里的属性，整体外框的宽度
		var clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth;
		// 上面相当于下面
		// if (docElement.clientWidth > 750) {
		// 	clientWidthValue = 750;
		// } else {
		// 	clientWidthValue = docElement.clientWidth
		// }

		docElement.style.fontSize = 20*(clientWidthValue/375) + 'px';
		// 375px 是 iPhone6 的宽度；2 就是倍数为适配 Retina屏幕 
		// 如果以iPhone6设计网页(width, hegiht)=(720, height) 根节点<html>的font-size: 2*20px=40px
		// 这样就不用每次从Photoshop量取数值然后除以2了
	}
	// 一开始就执行一次
	calc();
	// 绑定监听，当窗口尺寸改变时，在执行一次 calc();
	window.addEventListener('resize',calc);
})();