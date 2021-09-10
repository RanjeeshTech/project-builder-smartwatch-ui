var currentDate = new Date();
var time = currentDate.getHours()+":"+currentDate.getMinutes();
var day = currentDate.getDay();
document.querySelector("#time-sub").innerHTML=time;
document.querySelector("#time-main").innerHTML=time;
if(day==0){
    document.querySelector("#date-main").innerHTML="Sunday";
}
if(day==1){
    document.querySelector("#date-main").innerHTML="Monday";
}
if(day==2){
    document.querySelector("#date-main").innerHTML="Tuesday";
}
if(day==3){
    document.querySelector("#date-main").innerHTML="Wednesday";
}
if(day==4){
    document.querySelector("#date-main").innerHTML="Thursday";
}
if(day==5){
    document.querySelector("#date-main").innerHTML="Friday";
}
if(day==6){
    document.querySelector("#date-main").innerHTML="Saturday";
}