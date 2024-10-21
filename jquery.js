$(document).ready(function()
{
    $("#btn1").click(function(){
        $("form").hide();
    });
    $("#btn2").click(function(){
        $("form").show();
    });
    
    $("#btn3").click(function(){
        $("#btn4").toggle();
    });

    $("#btn5").click(function(){
        $("#btn6").toggle();
    });

    $("#btn7").click(function(){
        $("#btn8").toggle();
    });

    $("#btn12").click(function(){
        $("#btn9").fadeIn(9000);
    });

    $.getJSON("index.json",function(obj){
        $.each(obj,function(key,value){
            $("#btn15").click(function(){
                $("#name1").append(value.name[0])
                $("#about1").append(value.about[0])
            });
            $("#btn16").click(function(){
                $("#name2").append(value.name[1])
                $("#about2").append(value.about[1])
            });
            $("#btn17").click(function(){
                $("#name3").append(value.name[2])
                $("#about3").append(value.about[2])
            });
            $("#btn18").click(function(){
                $("#name4").append(value.name[3])
                $("#about4").append(value.about[3])
            });
            $("#btn19").click(function(){
                $("#name5").append(value.name[4])
                $("#about5").append(value.about[4])
            });
            $("#btn20").click(function(){
                $("#name6").append(value.name[5])
                $("#about6").append(value.about[5])
            });
            
        });
    });
   
    // $("btn11").click(function(){
    //     $("#btn10").fadeIn(9000);
    // });
});



