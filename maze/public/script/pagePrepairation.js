//------------page_prepairation-------------//

function Prepair_Page(page){
if( page == 1){
	//Lakes
	//backgroundColor//
	CharactorBox_BodyTransition( "no" ,"#FFF");
}

else if( page == 2){
	//street_spaceShadow
	//backgroundColor//
	CharactorBox_BodyTransition("yes", "#F3E5B6");
	//Space--Shadow//
	var SpaceShadow = document.getElementById('SpaceShadow');
	var SpaceShadow_width = BrowserWidth * 0.22;
	SpaceShadow.style.width = SpaceShadow_width + "px";
	SpaceShadow.style.height = 1.25 * SpaceShadow_width + "px" ;
	SpaceShadow.style.top = BrowserHeight * 0.53 + "px";
}

else if( page == 3){
	//storm_lightning
    //backgroundColor//
	CharactorBox_BodyTransition("yes","#2A2440");
}

else if( page == 4){
	//wall
    //backgroundColor//
	CharactorBox_BodyTransition("no","#FFF");
}

else if( page == 5){
	//streetLight
	//backgroundColor//
	CharactorBox_BodyTransition("yes","#000");
}

else if( page == 6){
	//starNight
	//backgroundColor//
	CharactorBox_BodyTransition("no","#000");
}

else if( page == 7){
	//station
	//backgroundColor//
	CharactorBox_BodyTransition("no","#ADDFFF");
}

else if( page == 8){
	//hub
	//backgroundColor//
	CharactorBox_BodyTransition("no","#FFF");
}

else if( page == 9){
	//hugeCloud
	//backgroundColor//
	CharactorBox_BodyTransition("no","#88C7D0");
}

else if( page == 10){
	//xMasTree
	//backgroundColor//
	CharactorBox_BodyTransition("no","#000");
}

else if( page == 11){
	//plants
	//backgroundColor//
	CharactorBox_BodyTransition("no","#FFF");
}

else if( page == 12){
	//greenMoon
	//backgroundColor//
	CharactorBox_BodyTransition("no","#253B26");
}

else if( page == 13){
	//greenLights
	//backgroundColor//
	CharactorBox_BodyTransition("no","#000");
}

else if( page == 14){
	//backgroundColor//
	CharactorBox_BodyTransition("no","#FFF");
}

else if( page == 15){
	//backgroundColor//
	CharactorBox_BodyTransition("no","#FFF");
}

else if( page == 16){
	//backgroundColor//
	CharactorBox_BodyTransition("no","#FFF");
}

//-----Prepair_Feedback;
console.log("Prepair_Page" + page);

}

//------------Body_BackGroungColor------------------//

function CharactorBox_BodyTransition( needChange, bodyColor){
   
   if(needChange == "yes" ){
   CharactorBox.style.webkitTransition = "opacity 1.2s ease-in-out";
   CharactorBox.style.opacity = "0";

   setTimeout(function(){
   	CharactorBox.style.opacity = "1";
   },2000);//Display_watting;
   }
   else{
   	console.log("CharactorBox_no_Transition");
   }


   Body.style.webkitTransition = "background-color 1.2s ease-in-out";
   Body.style.backgroundColor = bodyColor;
   Body.style.webkitTransition = "none";
}


