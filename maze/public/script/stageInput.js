
function InputAllComp_Boy(){

//---------Defualt---------//
AdobeEdge.loadComposition('boyCanvas', 'EDGE-Boy_Default', {
    scaleToFit: "none",
    centerStage: "both",
    minW: "0",
    maxW: "undefined",
    width: "170px",
    height: "340px"
}, {dom: [ ]}, {dom: [ ]});

//----------DarkBack--------//

AdobeEdge.loadComposition('boy_DarkBack', 'EDGE-Boy_DarkBack', {
    scaleToFit: "none",
    centerStage: "none",
    minW: "0",
    maxW: "undefined",
    width: "100%",
    height: "100%"
}, {dom: [ ]}, {dom: [ ]});

//----------SideBack---------//

}


function InputDefault_Boy(){
      var CharactorBox = document.getElementById("CharactorBox");
      $("#CharactorBox").animate({opacity:1},1200);

      var Boy_Default_Canvas = document.getElementById("Boy_Default_Canvas");
      displayCharactor_Boy(Boy_Default_Canvas);
}

function Input_DarkBack_Boy(){

   var CharactorBox = document.getElementById("CharactorBox");

   setTimeout(function(){
       
       //Snow_Setting_//
       //SnowUsageSet(use,Maina,layerF,FAlpha,layerM,MAlpha,layerB,BAlpha,Direction,PushMount)
       SnowUsageSet("yes", "no", 0, "yes", 0.3, "yes", 1, -1, 3);
       //------------//
       
       //Chractor_Box//
       SetCharactorBoxSize(0.28,0.23);

       CharactorBox.style.left = "32%";
       CharactorBox.style.bottom = "0%";
       CharactorBox.style.opacity = "1";

       var DarkBack_body_Canvas = document.getElementById("DarkBack_body_Canvas");
       displayCharactor_Boy(DarkBack_body_Canvas);
   
   },2000);
}

function Input_SideBack_Boy(){

   var CharactorBox = document.getElementById("CharactorBox");

   setTimeout(function(){

       //Snow_Setting_//
       //SnowUsageSet(use,Maina,layerF,FAlpha,layerM,MAlpha,layerB,BAlpha,Direction,PushMount)
       SnowUsageSet("no", "no", 0, "no", 0, "no", 0, 1, 3);
       //------------//
       
       //-----CharactorBox-----//
       SetCharactorBoxSize(0.28,0.2);
       
       //use_SpaceShadow
       var SpaceShadow = document.getElementById('SpaceShadow');

       CharactorBox.style.left = ((SpaceShadow.offsetLeft/BrowserWidth)*100 - 0)+"%";
       CharactorBox.style.top = SpaceShadow.style.top;
       CharactorBox.style.height = parseInt(SpaceShadow.style.height) * 0.85 + "px";
       CharactorBox.style.bottom = "auto";
       CharactorBox.style.opacity = "1";
       //---------------------//
   
   },2000);
}

//------------SetSnow---------------//


function SnowUsageSet(use,layerF,FAlpha,layerM,MAlpha,layerB,BAlpha,Direction,PushMount){
       
       //Define//
       var SnowLayer = document.getElementById('SnowLayer');
       var FrontSnow = document.getElementById('FrontSnow');
       var MiddleSnow = document.getElementById('MiddleSnow');
       var BackSnow = document.getElementById('BackSnow');

       //--------------SnowLayer---------------//
       
       if( use == "yes" ){
       UseSnow = true;
       }
       else if( use == "no" ){
       UseSnow = true;
       snowPush = -5000;
       }

       //---------------Front------------------//

       if( layerF == "yes" ){
       FrontSnow.style.opacity = FAlpha;
       FrontSnow.style.display = "block";
       }
       else if( layerF == "no" ){
       FrontSnow.style.opacity = "0";
       FrontSnow.style.display = "none";
       }

       //---------------Middle------------------//

       if( layerM == "yes" ){
       MiddleSnow.style.opacity = MAlpha;
       MiddleSnow.style.display = "block";
       }
       else if( layerF == "no" ){
       MiddleSnow.style.opacity = "0";
       MiddleSnow.style.display = "none";
       }

       //---------------Back------------------//

       if( layerB == "yes" ){
       BackSnow.style.opacity = BAlpha;
       BackSnow.style.display = "block";
       }
       else if( layerF == "no" ){
       BackSnow.style.opacity = "0";
       BackSnow.style.display = "none";
       }

      //----------------Rest----------------//
       snowPush=-5000;
       SnowDirection = Direction;
       snowPushAmount = PushMount;
       //------------//

}

function SetCharactorBoxSize(widthPercentageOnHeight, heightPercentage){
  //-----pay attention to usage!!!!----//
  CharactorBox.style.height = widthPercentageOnHeight * BrowserHeight + "px";
  var CharactorBoxWidth = heightPercentage * BrowserHeight;
  CharactorBox.style.width = CharactorBoxWidth + "px";

}

//----------------DisplayCharactor-----------------//

function displayCharactor_Boy(CharactorStatus){
var CharactorBox = document.getElementById('CharactorBox');
var BackStage = document.getElementById('BackStage');
var Charactor_BoyList = document.getElementsByName('Charactor_Boy');

//console.log(Charactor_BoyList);
for( i=0; i < Charactor_BoyList.length; i++ ){

var currentStatus = Charactor_BoyList[i];
BackStage.appendChild(currentStatus);

}


$('#CharactorBox').empty();
//console.log(CharactorBox.children);
CharactorBox.appendChild(CharactorStatus);
}

