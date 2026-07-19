const line1=document.getElementById("line1");
const line2=document.getElementById("line2");
const line3=document.getElementById("line3");

const bar=document.getElementById("bar");

const boot=document.getElementById("boot");

const menu=document.getElementById("menu");

line1.innerHTML="";

line2.innerHTML="";

line3.innerHTML="";

setTimeout(()=>{

line1.innerHTML="Booting ProblemOffice OS...";

},500);

setTimeout(()=>{

line2.innerHTML="Loading modules...";

},1800);

setTimeout(()=>{

line3.innerHTML="Initializing terminal...";

},3000);

let percent=0;

let interval=setInterval(()=>{

percent++;

bar.style.width=percent+"%";

if(percent>=100){

clearInterval(interval);

setTimeout(()=>{

boot.style.display="none";

menu.style.display="block";

},600);

}

},45);