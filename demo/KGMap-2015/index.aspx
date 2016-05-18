<%@ page language="VB" autoeventwireup="false" inherits="Login, App_Web_dewgurjl" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <title>Bootstrap In Practice - Landing Page Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="UTF-8"/>
    <!-- Bootstrap -->
    <!--<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">-->
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />
    <!--<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />-->
    <!--<link href="http://fonts.googleapis.com/css?family=Abel|Open+Sans:400,600" rel="stylesheet" />-->
    <style type="text/css">
        html {
            background: url("http://area.sinaapp.com/bingImg") no-repeat center center fixed;
            /*background: #fffff4;*/
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
        body {
            padding-top: 50px;
            font-size: 16px;
            font-family: "Open Sans",serif;
            background: transparent;  //背景透明
        }
        h1 {
            font-family: "Abel", Arial, sans-serif;
            font-weight: 400;
            font-size: 40px;
        }
        /* Override B3 .panel adding a subtly transparent background */
        .panel {
            background-color: rgba(255, 255, 255, 0.8);
        }
        .margin-base-vertical {
            margin: 40px 0;
        }
    </style>
  
   
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4 panel panel-default">
            <h1 class="margin-base-vertical">欢迎登陆空港计量</h1>

            <form action="" method="post" class="margin-base-vertical" runat="server">
                <p class="input-group">
                    <span class="input-group-addon">用户名</span>
                    <input id="name" type="text" runat="server" class="form-control input-lg" name="email" placeholder="输入用户名" />
                </p>
                <p class="input-group">
                    <span class="input-group-addon">密&nbsp;码</span>
                    <input id="pw" type="password" runat="server" class="form-control input-lg" name="email" placeholder="输入密码" />
                </p>
                <p class="help-block text-center"><small>&nbsp;</small></p>
                <p class="text-center">
              <%--   <button id="btn" runat="server" class="btn btn-success btn-lg btn-primary btn-block btn-login" >&nbsp;&nbsp;登&nbsp;&nbsp;&nbsp;陆&nbsp;&nbsp;</button>--%>
                    <asp:Button runat="server" ID="btn1" Text="&nbsp;&nbsp;登&nbsp;&nbsp;&nbsp;陆&nbsp;&nbsp;" class="btn btn-success btn-lg btn-primary btn-block btn-login" />
                </p>

            </form>
        </div>
    </div>
</div>
</body>
</html>