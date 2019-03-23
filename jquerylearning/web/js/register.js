$(function () {

    var errorName = false;
        errorPwd = false;
        errorCpwd = false;
        errorEmail = false;
        errorAllow = false;
    
    $("#user_name").blur(function () {
        // 失去光标时，检查输入框内容
        checkUserName();
    });
    $("#user_name").focus(function () {
        // 隐藏提示信息
        $(this).next().hide();
    });

    $("#pwd").blur(function () {
        // 失去光标时，检查输入框内容
        checkPwd();
    });
    $("#pwd").focus(function () {
        // 隐藏提示信息
        $(this).next().hide();
    });

    $("#cpwd").blur(function () {
        // 失去光标时，检查输入框内容
        checkCpwd();
    });
    $("#cpwd").focus(function () {
        // 隐藏提示信息
        $(this).next().hide();
    });

    $("#email").blur(function () {
        // 失去光标时，检查输入框内容
        checkEmail();
    });
    $("#email").focus(function () {
        // 隐藏提示信息
        $(this).next().hide();
    });

    $("#allow").click(function () { 
        if ($(this).prop("checked") == true) {
            errorAllow = false;
            $(".error_tip2").hide();
        } else {
            errorAllow = true;
            $(".error_tip2").html("请勾选同意").show();
        }       
    });

    $(".reg_form").submit(function () { 
        // 进来就先判断一次
        checkUserName();
        checkPwd();
        checkCpwd();
        checkEmail();
        
        if (!(errorName == false &&
            errorPwd == false &&
            errorCpwd == false &&
            errorEmail == false &&
            errorAllow == false
        )) {
            return false;
        }
    });


    function checkUserName() {
        var val = $("#user_name").val();
            re = /^\w{5,15}$/ig;

        if (val == "") {
            $("#user_name").next().html("用户名不能为空！");
            $("#user_name").next().show();
            errorName = true;
            return;
        }

        if (re.test(val)) {
            errorName = false;
        } else {
            errorName = true;
            $("#user_name").next().html("用户名应是包含字母、数字、下划线的5到15位数构成");
            $("#user_name").next().show();
        }

    }


    function checkPwd() {
        var val = $("#pwd").val();
            re = /^[a-zA-Z0-9@_/+-\.\$]{6,16}$/ig;

        if (val == "") {
            $("#pwd").next().html("密码不能为空！");
            $("#pwd").next().show();
            errorPwd = true;
            return;
        }

        if (re.test(val)) {
            errorPwd = false;
        } else {
            errorPwd = true;
            $("#pwd").next().html("用户名应是包含字母、数字,特殊字符的6到16位数构成");
            $("#pwd").next().show();
        }

    }

    function checkCpwd() {
        var val = $("#pwd").val();
        var cval = $("#cpwd").val();

        if (cval == val) {
            errorCpwd = false;
        } else {
            errorCpwd = true;
            $("#cpwd").next().html("两次输入的密码不一致").show();
        }
    };

    function checkEmail() {
        var val = $("#email").val();
            re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

        if (re.test(val) == true) {
            errorEmail = false;
        } else {
            errorEmail = true;
            $("#email").next().html("请输入正确的邮箱地址").show();
        }
    };

});