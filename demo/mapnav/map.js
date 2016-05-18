$(function(){
    $(".control-button").on("mouseover",function(){
        $("#entry").remove();
        var top = $(this).offset().top;
        var entry = $("<div />").attr("id","entry").addClass("entry")
            .append($("<div />").addClass("entry-trangle-right"))
            .append($(this).attr("data-original-title"))
            .css("top",(top-40)+"px").css("right","40px")
            .appendTo($(".map-control"));
    });
    $(".control-button").on("mouseout",function() {
        $("#entry").remove();
    });
    $(".control-button").on("click",function(){
        if($(this).attr("isclick")==="true") {
            var cls = $(this).attr("class");
            if(cls.indexOf("active") > 0){
                $(this).removeClass("active");
                $("#infoBox").animate({height:"hide"},"slow",null,function(){
                    $("#infoContent").html("");
                });
            }
            else{
                $(".control-button").removeClass("active");
                $(this).addClass("active");
                var title = $(this).attr("data-original-title");
                $("#infoBox").animate({height:"show"},"slow",null,function(){
                    $("#infoContent").html("").append(title);
                });
            }
        }
    });
    $("#infoClose").on("click",function(){
        $(".control-button").removeClass("active");
        $("#infoBox").animate({height:"hide"},"slow",null,function(){
            $("#infoContent").html("");
        });
    })
});