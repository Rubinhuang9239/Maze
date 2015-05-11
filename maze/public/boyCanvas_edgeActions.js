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
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);
         sym.getSymbol("boy_Default").playAll();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'b_headPart'
   (function(symbolName) {   
   
   })("b_headPart");
   //Edge symbol end:'b_headPart'

   //=========================================================
   
   //Edge symbol: 'b_clmainPart'
   (function(symbolName) {   
   
   })("b_clmainPart");
   //Edge symbol end:'b_clmainPart'

   //=========================================================
   
   //Edge symbol: 'b_nlegPart'
   (function(symbolName) {   
   
   })("b_nlegPart");
   //Edge symbol end:'b_nlegPart'

   //=========================================================
   
   //Edge symbol: 'b_flegPart'
   (function(symbolName) {   
   
   })("b_flegPart");
   //Edge symbol end:'b_flegPart'

   //=========================================================
   
   //Edge symbol: 'boy_Default'
   (function(symbolName) {   
   
   })("boy_Default");
   //Edge symbol end:'boy_Default'

   //=========================================================
   
   //Edge symbol: 'b_headWithHat'
   (function(symbolName) {   
   
   })("b_headWithHat");
   //Edge symbol end:'b_headWithHat'

   //=========================================================
   
   //Edge symbol: 'b_clback'
   (function(symbolName) {   
   
   })("b_clback");
   //Edge symbol end:'b_clback'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-Boy_Default");