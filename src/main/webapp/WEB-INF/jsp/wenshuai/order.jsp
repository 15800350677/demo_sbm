<%--
  Created by IntelliJ IDEA.
  User: jiangyang
  Date: 2018/3/28
  Time: 10:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <jsp:include page="../head.jsp"></jsp:include>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/uploadfile/css/uploadfile.css"/>
    <script src="${pageContext.request.contextPath}/static/template/js/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/uploadfile/js/jquery.uploadfile.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/order.js" type="text/javascript"></script>
    <title>订单页面</title>
</head>
<body class="gray-bg">
<!-- SAMPLE -->
<div class="row">
    <div class="col-lg-12 jqGrid_wrapper">
        <table id="rowed3"></table>
        <div id="prowed3"></div>
    </div>
</div>
</body>
</html>
