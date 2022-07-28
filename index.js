alert("HI! Let's have some fun.");
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHTML= this.innerHTML;
  makesound(buttonInnerHTML);


 });
}
 document.addEventListener("keypress", function(event){

makesound(event.key);
});
 function makesound(key){
   switch(key){
     case "a":
     var so1=new Audio("sounds/s1.wav");
     so1.play();
     break;

     case "b":
     var so2=new Audio("sounds/s2.wav");
     so2.play();
     break;

     case "c":
     var so3=new Audio("sounds/s3.wav");
     so3.play();
     break;

     case "d":
     var so4=new Audio("sounds/s1.wav");
     so4.play();
     break;

     case "e":
     var so5=new Audio("sounds/s5.wav");
     so5.play();
     break;

     case "f":
     var so6=new Audio("sounds/s6.wav");
     so6.play();
     break;

     case "g":
     var so7=new Audio("sounds/s7.wav");
     so7.play();
     break;

     case "h":
     var so8=new Audio("sounds/s8.wav");
     so8.play();
     break;

     case "i":
     var so9=new Audio("sounds/s9.wav");
     so9.play();
     break;

     case "j":
     var so10=new Audio("sounds/s10.wav");
     so10.play();
     break;

     case "k":
     var so11=new Audio("sounds/s11.wav");
     so11.play();
     break;

     case "l":
     var so12=new Audio("sounds/s12.wav");
     so12.play();
     break;


     default: console.log(key);

   }
 }

