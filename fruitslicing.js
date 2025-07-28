var playing= false;
var score=0;
var trailsLeft;
var step;
var action;
var fruitImage=["apple","orange","pineapple","banana","strawberry","watermelon","pear","mango","grapes"];

$(function(){
    $("#startrestart").click(function(){
        if(playing == true){
            location.reload();
        }else{
            playing= true;
            score= 0;
            $("#scorevalue").html(score);
            $("#liferemainig").show();
            $("#gameover").hide();
            trailsLeft=3;
            addHearts();
            $("#startrestart").html("Reset Game");
            startAction();
            
        }
    });

$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score);
    $("#sound")[0].play();//sound effect
    
    //stop fruit in easy
    //stopAction();
    //startAction();
    clearInterval(action);
    $("#fruit1").hide("explode",500);//slicing animation
    
    setTimeout(startAction,500);
    
    
});
    
    
function addHearts(){
    $("#liferemainig").empty();
for(i=0;i<trailsLeft;i++){
                $("#liferemainig").append('<img src="images/heart.jpg" class="life">');
              }
            }
function startAction(){
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit
    $("#fruit1").css({"left" :Math.round(Math.random()*550),"top":-10});//a random position
    step=1+Math.round( 5*Math.random());//changing step
    action = setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top + step );
        
        if($("#fruit1").position().top > $("#fruitContainer").height()){
            if(trailsLeft >1){
                $("#fruit1").show();
                chooseFruit(); //choose a random fruit
                $("#fruit1").css({"left" :Math.round(Math.random()*550),"top":-10});//a random position
                step=1+Math.round( 5*Math.random());
                
                trailsLeft --;
                addHearts();
                
            }else{
                playing =false;
                $("#startrestart").html("Start Game");
                $("#gameover").show();
                $("#gameover").html("<p>GAME OVER!</p><p>your score:"+ score +"</P>");
                $("#liferemainig").hide();
                stopAction();
            }
        }
        
    },10);
    
    
}
//generate a randon fruit
function chooseFruit(){
    $("#fruit1").attr("src","images/" + fruitImage[Math.floor(Math.random()*8)]+".png");
}
//stop fruit falling
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
    
    });