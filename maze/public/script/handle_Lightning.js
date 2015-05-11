//------------Handle_Lightning-----------//

function lightningMaster(usage){
var lightningFlash = document.getElementById('page3_LightningFlash');
if(usage == "yes"){
  needLightning = true;
}
if(usage == "no"){
  needLightning = false;
  lightningFlash.style.display = "none";
}
}

needLightning = false;

function HandleLightning( lightningUse ){

   var lightningFlash = document.getElementById('page3_LightningFlash');

   var lightningPlace = Math.floor(Math.random() * 100);

   lightningFlash.style.backgroundPositionX = lightningPlace + "%";
   lightningFlash.style.backgroundImage = "url( 'img/bgDraft/bg_storm_lightning0" + lightningUse + ".png')";
   
   //-----Lightning_Trigger-----//
   var lightningTrigger = function(){

        lightningFlash.style.webkitAnimation = "lightning 1s infinite";
   		//console.log("lightning_triggered ");
        setTimeout(function(){
   			lightningFlash.style.display = "none";
   	    },1002);
	} 

   lightningTrigger();

   var nextLightningSource = Math.floor(Math.random() * 4);
   if(nextLightningSource == 0){ nextLightningSource = 1; }
   
   var lightningInterval = Math.floor(Math.random() * 12500);
   if(lightningInterval <= 2000){ lightningInterval = 4800; }
   //console.log("lightning_Prepair ", lightningInterval);

   setTimeout(function(){
   if(needLightning == true){
        lightningFlash.style.display = "block";
   }
   }, lightningInterval-120 );

   setTimeout(function(){
   if(needLightning == true){
   		HandleLightning( nextLightningSource );
   }
   }, lightningInterval );


}