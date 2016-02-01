<%--
Views should be stored under the WEB-INF folder so that
they are not accessible except through controller process.

This JSP is here to provide a redirect to the dispatcher
servlet but should be the only JSP outside of WEB-INF.
--%>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <title>STORE PREMIER</title>
    <!-- <x-compile> -->
        <!-- <x-bootstrap> -->
            <link rel="stylesheet" href="bootstrap.css">
            <link rel="stylesheet" href="resources/css/app.css">
            <link rel="stylesheet" href="resources/css/style.css"> 
            <link rel="stylesheet" type="text/css" href="resources/css/uxs.css" />
		   <link rel="stylesheet" type="text/css" href="resources/css/overrides.css" />
            <script src="ext/ext-dev.js"></script>
            <script src="bootstrap.js"></script>
        <!-- </x-bootstrap> -->
        <script src="app.js"></script>       
    <!-- </x-compile> -->
</head>
<%
String redirectURL = "index.action";
response.sendRedirect(redirectURL);
%>
</html>