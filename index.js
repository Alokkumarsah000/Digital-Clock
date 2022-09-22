let H1=document.getElementById("hour")
let M1=document.getElementById("minutes")
let S1=document.getElementById("seconds")
let ampm1=document.getElementById('ampm')
function updateClock(){
let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
let ampm = "AM"
if(h>12){
    h=h-12;
    ampm="PM";
}
h= h<10? "0" + h:h;

H1.innerHTML=h;
M1.innerHTML=m;
S1.innerHTML=s;
ampm1.innerHTML=ampm;
setTimeout(()=>{
  updateClock()
},1000)
}
updateClock();