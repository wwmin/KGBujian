/**
 * Created by wwm on 2016/5/18.
 */

var myModul=function(vip){
    //声明私有成员
    var Yvip=document.getElementById(vip);
    YQ="23413454";
    return{ 
        add:function(t){
            if (t>=12){
                t.innerHTML="年费:"+Yv+"   QQ群:"+YQ;
            }else{
                t.innerHTML="月费:"+Mv;
            }
        },
        del:function(t){
            console.log("你想对这个删掉"+t);
        }
    }
};
var Calculator=function(e){
    var eqCtl=document.getElementById(e);
    return{
        //暴漏公开的成员
        add:function(x,y){
            var val=x+y;
            eqCtl.innerHTML=x+" + "+y+" = "+val;
        }
    }
};
var myFun=function(myName){
    var maName11="wwmin";
    return{
        add:function(name){
            console.log("这个是没有参数的方法"+myName+" 由add函数传过来的:"+name);
        }
    }
};
var myF1=new myFun("wwm");
myF1.add("王为民");
// (function($,YAHOO){
//     //这里就可以使用全局的jQuery对象了,YAHOO也是
// }(jQuery,YAHOO));

var blogModule=(function(){
   var my={},privateName="博客园";
    function addTopic(data){
        console.log("传入的参数"+data);
    }
    my.Name=privateName;
    my.AddTopic=function(data){
        addTopic(data);
    };
    return my;
}());

var jm=new myModul("vip");
jm.add(10);
jm.del(200);
var calculator=new Calculator("eq");
calculator.add(2,3);

var cnblog=undefined;
//或者
// var cnblog=null;
var cnblogs=cnblog || {a:"aaa",b:"bbb"}; //确定cnblog是undefined或null 才能使用后面的
//全局变量注意点
aq="全局变量";  //此处为全局变量
function foo(){
    resultq=x+y; //此处为隐含全局变量
    var aqq=bqq=0;  //此处aq为局部,bq却为全局变量 原因 从右到左赋值引起 bqq是未声明的
    var a2,b2;
    a2=b2=0;  //两个均为局部变量
    return resultq;
}

//隐士类型转换 false==0 或""==0 返回是true
var zero=0;
if(zero === false){
    //不执行,因为zero为0,而不是false
}
if(zero == false ){
    //执行了...
}






(function(){
    console.log("闭包函数,并且加了()后,该函数是自执行");
    blogModule.addTopic="是这样赋值吗?-";
    blogModule.Name="改个名字";
    console.log(blogModule.Name+blogModule.addTopic);

    console.log(cnblogs);
}());