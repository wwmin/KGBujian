
Partial Class Login
    Inherits System.Web.UI.Page


    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        If IsPostBack = False Then
            Session("LoginUser") = Nothing
        End If
    End Sub

    Protected Sub btn1_Click(sender As Object, e As System.EventArgs) Handles btn1.Click
        Dim name = Me.name.Value
        Dim pw = Me.pw.Value

        If String.IsNullOrEmpty(name) Then
            ClientScript.RegisterStartupScript([GetType], "", "<script>alert('请输入用户名！');</script>")
            Return
        End If
        If String.IsNullOrEmpty(pw) Then
            ClientScript.RegisterStartupScript([GetType], "", "<script>alert('请输入密码！');</script>")
            Return
        End If


        If name = "szcl" And pw = "szcl" Then
            Server.Transfer("Editor3.html")
        Else
            ClientScript.RegisterStartupScript([GetType], "", "<script>alert('用户名或密码错误！请重新输入！');</script>")
        End If

    End Sub
End Class
