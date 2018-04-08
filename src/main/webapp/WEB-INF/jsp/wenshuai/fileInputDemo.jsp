<%--
  Created by IntelliJ IDEA.
  User: jiangyang
  Date: 2018/3/23
  Time: 13:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <jsp:include page="../head.jsp"></jsp:include>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/fileInput/css/fileinput.min.css"/>
    <script src="${pageContext.request.contextPath}/static/template/js/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/template/js/bootstrap.min.js?v=3.3.6"></script>
    <script src="${pageContext.request.contextPath}/static/fileInput/js/fileinput.js"></script>
    <script src="${pageContext.request.contextPath}/static/fileInput/js/locales/zh.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/fileInputDemo.js" type="text/javascript"></script>
    <title>数据源导入</title>
</head>
<body class="gray-bg">
<div class="navbar navbar-default navbar-custom" role="navigation">
    <div class="navbar-header">
        <a class="navbar-brand" href="http://zhangjikai.com/">
            <!--<img alt="zjk" src="../bootstrap/images/logo.png" height="50">-->
        </a>
    </div>

    <!--<div>
        <ul class="nav navbar-nav" style="float: right">
            <li><a href="#">IE9及以下请访问</a></li>
        </ul>
    </div>-->
</div>

<!-- Page Content -->

<div class="container kv-main">
    <div class="row ">
        <div style="padding:10px; ">
            <form enctype="multipart/form-data">
                <input id="file-0a" class="file" name="file" type="file" multiple data-min-file-count="1">
                <br>
            </form>
        </div>
    </div>


</div>
<div class="push"></div>
</body>
</html>
