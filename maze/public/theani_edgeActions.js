/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17890, function(sym, e) {
         PostCardPos = 1;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40427, function(sym, e) {
         PostCardPos = 2;
         if(skiped == false){
         BackSnow.style.opacity = 1;
         }
         //$("#page1").css("display","block");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 48000, function(sym, e) {
         // insert code here
         if(skiped == false){
         FrontSnow.style.opacity = 0.35;
         IntroShowName("Cincin")
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70000, function(sym, e) {
         PostCardPos="End";
         StageOne.style.display="none";
         skip.style.display = "none";

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 63000, function(sym, e) {
         if(skiped == false){
         Welcome.style.opacity = "1";
         skip.style.opacity = 0;
         TapIn = "WaitingForTap";
         }
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         // insert code here
         
         BookContent.style.backgroundPosition = "center";
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42000, function(sym, e) {
         // insert code here

         BookContent.style.backgroundSize = "100% 155%";

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 62075, function(sym, e) {
         if(TapIn==false){
         TapIn="WatingForTap";
         }
         
         if(skiped==false){
         BookContent.style.webkitTransition = "background 5s ease-in-out";
         WelcomeReflection.style.opacity = 1;
         WelcomeReflection.style.webkitTransform = "rotate(180deg) translateY(-0.6em)";
         }
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49000, function(sym, e) {
         if(skiped == false){
         Welcome.style.display = "block";
         }
      });
      //Edge binding end

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         TimeLineDefine(sym);
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // insert code to be run when the user presses a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 32 = space
         // if (e.which == 32 || skipState == true) {
         // 	sym.play(134000);
         //    Skip();

         // }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35433, function(sym, e) {
            if(skiped == false){
            IntroShowName("Rubin");
            }
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'PostBox'
   (function(symbolName) {   
   
   })("PostBox");
   //Edge symbol end:'PostBox'

   //=========================================================
   
   //Edge symbol: 'backCloud'
   (function(symbolName) {   
   
   })("backCloud");
   //Edge symbol end:'backCloud'

   //=========================================================
   
   //Edge symbol: 'BackCloud'
   (function(symbolName) {   
   
   })("BackCloud");
   //Edge symbol end:'BackCloud'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-211632830");