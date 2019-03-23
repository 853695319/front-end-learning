$(function () {

    // 1 获取元素
    var $li = $(".slide_pics li");
    var sw = $(".slide_pics").width();  // 幻灯片宽度
    var len = $li.length;  // 幻灯片数量
    var nowli = 0;  // 将要运动过来的li
    var preli = 0;  // 当前要离开的li
    var timer = null;  // 定时器自动播放
    // console.log($li.length); // 4
    // console.log(-sw);

    // 2 初始把第一张幻灯片以外的都叠放到右边
    $li.not(":first").css({left: sw});

    // 根据幻灯片数量创建相应的节点
    $li.each(function (index) {
        // 创建节点
        var $sli = $("<li>");

        // 初始第一个节点高亮
        if (index == 0) {
            $sli.addClass("active");
        }

        // 添加节点
        $sli.appendTo(".points");
    });

    // 这个变量要在li节点创建好后在赋值！！
    var $points = $(".points li");
    console.log($points.length);

    // ------------------------------------------------------------
    // 定时器-自动播放
    timer = setInterval(autoplay, 4000);
    // ------------------------------------------------------------

    // ------------------------------------------------------------
    // 鼠标悬浮事件
    $(".slide").mouseenter(function () {
        clearInterval(timer);
    });
    $(".slide").mouseleave(function () {
        timer = setInterval(autoplay, 4000);
    });
    // ------------------------------------------------------------

    // ------------------------------------------------------------
    // points 点击事件
    $points.click(function () {

        // 点击那个，当前要运动过来的就是那个
        nowli = $(this).index();

        if (nowli == preli) {
            return;
        }

        move();  // 处理所有运动

        $(this).addClass("active").siblings().removeClass("active");
    });
    // ------------------------------------------------------------

    // ------------------------------------------------------------
    // 左右箭头事件
    var $prev = $(".prev");
    var $next = $(".next");

    $prev.click(function () {
        nowli--;
        move();
        $points.eq(nowli).addClass("active").siblings().removeClass("active");
    });

    $next.click(function () {
        nowli++;
        move();
        $points.eq(nowli).addClass("active").siblings().removeClass("active");
    });
    // ------------------------------------------------------------

    function autoplay() {
        nowli++;
        move();
        $points.eq(nowli).addClass("active").siblings().removeClass("active");
    }


    function move() {

        // 两种极端情况
        if (nowli < 0) {
            nowli = len - 1;
            preli = 0;
            // 图片从左向右划过来
            $li.eq(nowli).css({left: -sw});
            $li.eq(preli).stop().animate({left: sw});
            $li.eq(nowli).stop().animate({left: 0});
            preli = nowli; // 这句重要
            return;
        }

        if (nowli > len-1) {
            nowli = 0;
            preli = len - 1;
            // 图片从右向左划过来
            $li.eq(nowli).css({left: sw});
            $li.eq(preli).stop().animate({left: -sw});
            $li.eq(nowli).stop().animate({left: 0});
            preli = nowli;
            return;
        }
        
        // 将要过来的图片序号大，应该放在右边待机
        if (nowli > preli) {
            // 右边待机
            $li.eq(nowli).css({left: sw});

            // 当前展示图片离开
            $li.eq(preli).stop().animate({left: -sw});
        } else {
            // 左边待机
            $li.eq(nowli).css({left: -sw});

            // 当前展示图片离开
            $li.eq(preli).stop().animate({left: sw});
        }
        // 待机图片过来
        $li.eq(nowli).stop().animate({left: 0});
        preli = nowli;

    };

});