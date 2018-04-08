<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <title>利步瑞 - 登录</title>
    <link href="${pageContext.request.contextPath}/static/template/css/bootstrap.min.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/static/template/css/font-awesome.css?v=4.4.0" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/static/template/css/animate.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/static/template/css/style.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/static/template/css/login.css" rel="stylesheet">

    <script>
        if (window.top !== window.self) {
            window.top.location = window.location;
        }
    </script>

</head>

<body class="signin">

<!-- HEADER -->
<section id="page">
    <header>
        <!--/NAV-BAR -->
    </header>
    <div class="signinpanel">

        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-3">
                    <div id="logo">
                        <a href="#"><img src="${pageContext.request.contextPath}/static/template/img/logo-alt.png"
                                         height="90" alt="logo name" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-7 col-md-offset-3">
                <form method="post" action="/login" accept-charset="UTF-8">
                    <input type="text" id="inputEmail" name="username" class="form-control uname" placeholder="用户名" required autofocus/>
                    <input type="password" id="inputPassword" name="password" class="form-control pword m-b" placeholder="密码" required />
                    <p class="bg-warning"><span style="color:red;">${error}</span></p>
                    <button class="btn btn-success btn-block" type="submit">登录</button>
                </form>
            </div>
        </div>
        <div class="signup-footer">
            <div class="pull-left">
                              <%--<a href="#">&copy; 欢迎登录利步瑞。。。系统</a>--%>
            </div>
        </div>
    </div>
</section>
</body>

</html>
