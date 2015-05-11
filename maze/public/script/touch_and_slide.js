//--------------------------------Touch_Support------------------------------//
var touchSetX=0;
var touchSetY=0;
var touchOffX=0;
var touchOffY=0;
var ValueRunMasterKey = false;
var IntroAnimationAllowed = false;
var RandomMode = false;
var TapIn = false;



function touchStarted(){
    //console.log("touched")
    if(ValueRunMasterKey == false && IntroAnimationAllowed == false){
      Tilt_State2();
    }

    if(ValueRunMasterKey == false && IntroAnimationAllowed == true){
    //Skip();

    waittingCover.style.opacity = 0;
    StageOne.style.webkitTransform="translateY(" + (BrowserWidth*0.135) + "px) scale(" + BrowserWidth/1280 + ")"; 

    setTimeout("takeOutCover()",3000);
    if(skiped == false ){
    skip.style.display = "block";
    }
    TimeLine.play();
    

    
    if(ScenArrayList.length>15){
    
    ValueRunMasterKey = true;

    if(ScenArrayList.length>15){

      introMedia.play();

    }

    }
    }

    if(TapIn == "WaitingForTap"){
    TapIn = "TabedIn";
    BookContent.style.opacity = "1";
    BookContent.style.backgroundSize = "100% 120%";
    BookContent.style.backgroundColor = "#FFF";
    BookContent.style.backgroundPosition = "0px " + (-0.41 * BrowserHeight) +"px";
    Welcome.style.opacity= 0;
    setTimeout("RandomStart()",4500);
    storylayer.style.display = "block";
    introMediaFadeOut();
    localStorage.OldUser = "yes";
    console.log("hi, TapIn the Game!!!");
    setTimeout(function(){
      InputDefault_Boy();
    },4200);
    }

    touchSetX = touchX;
    touchSetY = touchY;

} 


function touchEnded(){

    touchOffX = touchX;
    touchOffY = touchY;


    if(RandomMode == true){
    SlideRequest();
    }

}

function takeOutCover(){

waittingCover.style.display="none";
 Local_OldUser = localStorage.OldUser;
 //alert(Local_OldUser);

 if(Local_OldUser == "yes"){
      skip = document.getElementById("skip");
      skip.style.opacity = 1;
  }

}

function takeOutSnow(){

  SnowLayer.style.display="none";
  snowPush = -5000;
  UseSnow = false;

}

function RandomStart(){
  BackSnow.style.opacity = 0.5;
  Welcome.style.display = "none";
  RandomMode = true;
}

// function touchMoved(){
// }

var pageCount = 2;
var Choice = 16;

var UserStatus = new Array();

//[0]PageRemain,[1]CurrentPage,[2]PublicStting

function SlideRequest(){
    ValueRunMasterKey = false;
    a=93;
    BackSnow.style.opacity = 0;


    if( touchOffY - touchSetY > 90 ){
    ChoicePic();
    //up
    //alert("up");
    SlideUpF( pageCount );
  
    }
    else if( touchOffY - touchSetY < -90 ){
    ChoicePic();
    //down
    //alert("down");
    SlideDownF( pageCount );
    }

    else if( touchOffX - touchSetX > 90 ){
    ChoicePic();
    //left
    //alert("left");
    SlideLeftF( pageCount );
    }

    else if( touchOffX - touchSetX < -90 ){
    ChoicePic();
    //right
    //alert("right");
    SlideRightF( pageCount );
    }


    if(ScenArrayList.length>=1){
    ScenArrayList.splice(SlideChoice-1,1);
    }

    if(ScenArrayList.length == 0){

      alert("Slides Ends");
    }

    UserStatus[0] = ScenArrayList.length;
    UserStatus[1] = pageCount;
    //[0]PageRemain,[1]CurrentPage,[2]PublicStting
    //change to role play
    
    socket.emit('BoyData',UserStatus);
    console.log("socket_emit!",UserStatus);
}

var SlideChoice=0;

function ChoicePic(){
 
  if(Choice < 1){
  }
    else{
    SlideChoice = Math.ceil(Math.random()*Choice);
    }
    Choice--;
    pageCount = ScenArrayList[SlideChoice-1];

}

function SlideUpF(inputPage){

    //pageCount++;
    $("#UptoP" + (inputPage)).click();
    SlideStatuseCheck(inputPage);    
}

function SlideDownF(inputPage){

    //pageCount++;
    $("#DowntoP" + (inputPage)).click();
    SlideStatuseCheck(inputPage); 
    
}

function SlideLeftF(inputPage){

    //pageCount++;
    $("#LefttoP" + (inputPage)).click();
    SlideStatuseCheck(inputPage); 
}

function SlideRightF(inputPage){

    //pageCount++;
    $("#RighttoP" + (inputPage)).click();
    SlideStatuseCheck(inputPage); 
}


function SlideStatuseCheck(inputPage){
    //Prepair_Page_Settings
    Prepair_Page(inputPage);
    
    if(pageCount>16){pageCount=1};
    
    if(inputPage == 1){//Lakes
        //Nothing//
    }
    else if(inputPage == 2){//street_spaceShadow
        
        Input_SideBack_Boy();
    }
    else if(inputPage == 3){//storm_lightning
        
        needLightning = true;
        lightningMaster("yes");
        setTimeout(function(){HandleLightning(3)},1000);
    }
    else if(inputPage == 4){//wall
        
    }
    else if(inputPage == 5){//streetLight
        
        Input_DarkBack_Boy();
    }
    else if(inputPage == 6){//starNight
        
    }
    else if(inputPage == 7){//station
        
    }
    else if(inputPage == 8){//hub
        
    }
    else if(inputPage == 9){//hugeCloud
        
    }
    else if(inputPage == 10){//xMasTree
        
    }
    else if(inputPage == 11){//plants
        
    }
    else if(inputPage == 12){//greenMoon
        
    }
    else if(inputPage == 13){//greenLights
        
    }
    else if(inputPage == 14){
        
    }
    else if(inputPage == 15){
        
    }
    else if(inputPage == 16){//longWayRun
        
    }

}

//---------------------------END!----Touch_Support--------------------------//