/**
 * Created by wwm on 2016/5/19.
 */

(function(){
    var arr1=[1,true,null], arr2=[null,false,100];

    function arraysSimilar(arr1, arr2){
        var a1=[],a2=[];
        // console.log(Object.prototype.toString.call(arr1));
        if(arr1.length!=arr2.length){
            return "两个变量不是相似的";
        }else{
            for(var i=0;i<arr1.length;i++){
                a1.push(Object.prototype.toString.call(arr1[i]));
                a2.push(Object.prototype.toString.call(arr2[i]));
            }
            // return a1+"-----"+a2;
        }
        for(var j=0;j<a1.length;j++){
            
        }
        console.log(a1,a2);
    }
    arraysSimilar(arr1,arr2);
}());
//自运行另一种方式
!function(){
    console.log("asdfsdf");
}();
!function(){
    var obj={x1:1,x2:2};
    var i=1,n=2;
    for (;i<=n;i++){
        console.log(obj['x'+i]); //用[]的方式取值,可以去到x1,x2这样的值,方便
    }
}();

!function(){
    var cat=Object;
    cat.legs=4;
    if(cat.legs!=undefined){ //相当于cat !==undefined, or !==null
        console.log("true");
    }
    if(cat.legs!==undefined){ //only if cat.legs is not undefined
        console.log("true")
    }
}();
var man={
    weibo:'wwm',
    $age:null,
    get age(){
        if(this.$age==undefined){
            return new Date().getFullYear()-1988;
        }else{
            return this.$age;
        }
    },
    set age(val){
        val= +val; //+尝试用转换成数字
        if(!isNaN(val) && val>0 && val<150){
            this.$age=+val;
        }else{
            throw new Error('Incorrect val = '+val);
        }
    }
};
console.log(man.age);
man.age=100;
console.log(man.age);
console.log(man.weibo);
// man.age='aba';