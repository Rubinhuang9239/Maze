
var UnitPerspective;

function Tilt_State2(){
  //--------MiddleBox-------//
    MiddleBox.style.webkitTransform = "perspective("+UnitPerspective+"px) translateZ("+0.23*MiddleBoxHeight+"px) rotateY(-25deg)";
    MiddleBox.style.backgroundColor = "rgba(255,255,255,0.85)";
    MiddleBox.style.width = MiddleBoxHeight + "px";

    //-------Boy--------//
    introBoy.style.opacity = 1;
    introBoy.style.webkitTransform = "perspective("+UnitPerspective+"px) translateX(-"+0.14*MiddleBoxHeight+"px) translateZ("+0.36*MiddleBoxHeight+"px)";
    BoySign.style.opacity = 0.35;
    //-------Girl--------//
    introGirl.style.opacity = 1;
    introGirl.style.webkitTransform = "perspective("+UnitPerspective+"px) translateX("+0.14*MiddleBoxHeight+"px) translateZ("+0.091*MiddleBoxHeight+"px)";
    setTimeout("Tilt_State3()",4000);
}

function Tilt_State3(){

  //--------MiddleBox-------//
    MiddleBox.style.border = "solid 5px #E7E7E7";
    MiddleBox.style.width = "0px";
    MiddleBox.style.height = 1.36 * MiddleBoxHeight+"px"; 

    MiddleBox.style.webkitTransform = "perspective("+UnitPerspective+"px) translateZ("+0.23*MiddleBoxHeight+"px) rotateY(-82deg)";
    MiddleBox.style.backgroundColor = "rgba(255,255,255,0)";

  //-------Boy--------//
    introBoy.style.webkitTransform = "perspective("+UnitPerspective+"px) translateX(-"+0.36*MiddleBoxHeight+"px) translateZ("+0.23*MiddleBoxHeight+"px)";
  //-------Girl--------//
    introGirl.style.webkitTransform = "perspective("+UnitPerspective+"px) translateX("+0.36*MiddleBoxHeight+"px) translateZ("+0.23*MiddleBoxHeight+"px)";
    GirlSign.style.opacity = 0.35;

    IntroAnimationAllowed = true;
}