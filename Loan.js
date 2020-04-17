answer = document.getElementById('answer');
a = document.getElementById('result00id');
b = document.getElementById('tryid');
c = document.getElementById('mysubmit');
d = document.getElementById('reset');

c.addEventListener("click",myfunc);
c.addEventListener("click",result);
c.addEventListener("click",getFocus);
d.addEventListener("click",resetfunc);

e = document.getElementById('myform');

function myfunc(){

b.style.display = "block";
e.style.height = "auto";
a.style.display = "block";

}


function resetfunc(){
a.style.display ="none";		
b.style.display ="none";				
				}

function getFocus() { 	document.getElementById("mysubmit").focus(); 
   }

function result(){
var p =  parseInt(document.getElementById("principal").value);  
var r =  parseInt(document.getElementById("rate").value);  
var t =  parseInt(document.getElementById("time").value);  				
								
var interest = (p * r * t)/100;			
var loan = p + interest;		
var comma = loan.toLocaleString('en')	
answer.innerHTML = comma;		
				}

function openNav(){
document.getElementById("mysidenav").style.width= "69%";
		}
function closeNav(){
document.getElementById("mysidenav").style.width= "0px";		
		}



//CODE FOR DIFFERENT NAVIGATION BACKGROUND

var p = document.getElementsByClassName('for_nav');

p[0].addEventListener("click",myfunc1);

function myfunc1(){
var diff_colours = "0123456789ABCDEF";
var hexacode = "#";

for (var i=0; i<6; i++ ){
		hexacode += diff_colours[Math.floor(Math.random()*16)];
		}

document.getElementById("mysidenav").style.backgroundColor= hexacode;
var q = document.getElementsByClassName("colour_nav")
q[0].innerHTML= hexacode;

}


//CODE FOR DIFFERENT BODY BACKGROUND

var r = document.getElementsByClassName('for_background');

r[0].addEventListener("click",myfunc2);

function myfunc2(){
var diff_colours = "0123456789ABCDEF";
var hexacode2 = "#";

for (var i=0; i<6; i++ ){
		hexacode2 += diff_colours[Math.floor(Math.random()*16)];
		}
var s = document.getElementsByTagName("body")

s[0].style.backgroundColor= hexacode2;
var t = document.getElementsByClassName("colour_background");
t[0].innerHTML= hexacode2;

}



//CODE FOR DIFFERENT FORM BACKGROUND

var u = document.getElementsByClassName('for_form');

u[0].addEventListener("click",myfunc3);

function myfunc3(){
var diff_colours = "0123456789ABCDEF";
var hexacode3 = "#";

for (var i=0; i<6; i++ ){
		hexacode3 += diff_colours[Math.floor(Math.random()*16)];
		}
//var v = document.getElementsByTagName("body")

document.getElementById("myform").style.backgroundColor= hexacode3;
var w = document.getElementsByClassName("colour_form");
w[0].innerHTML= hexacode3;

}


//CODE FOR DIFFERENT TITLE COLOURS

var x = document.getElementsByClassName('for_title');

x[0].addEventListener("click",myfunc4);

function myfunc4(){
var diff_colours = "0123456789ABCDEF";
var hexacode4 = "#";

for (var i=0; i<6; i++ ){
		hexacode4 += diff_colours[Math.floor(Math.random()*16)];
		}
var y = document.getElementsByClassName("title");

y[0].style.color= hexacode4;
var z = document.getElementsByClassName("colour_title");
z[0].innerHTML= hexacode4;
}


//CODE FOR DIFFERENT TITLE COLOURS

var aa = document.getElementsByClassName('for_user');

aa[0].addEventListener("click",myfunc5);

function myfunc5(){
var diff_colours = "0123456789ABCDEF";
var hexacode5 = "#";

for (var i=0; i<6; i++ ){
		hexacode5 += diff_colours[Math.floor(Math.random()*16)];
		}
var bb = document.getElementsByClassName("user_calc");

bb[0].style.backgroundColor= hexacode5;
var cc = document.getElementsByClassName("colour_user");
cc[0].innerHTML= hexacode5;
}


//CODE FOR DIFFERENT LETTER COLOURS

var dd = document.getElementsByClassName('for_letters');

dd[0].addEventListener("click",myfunc6);

function myfunc6(){
var diff_colours = "0123456789ABCDEF";
var hexacode6 = "#";

for (var i=0; i<6; i++ ){
		hexacode6 += diff_colours[Math.floor(Math.random()*16)];
		}
var ee = document.getElementById("myform");

ee.style.color= hexacode6;
var ff = document.getElementsByClassName("colour_letters");
ff[0].innerHTML= hexacode6;
}


//CODE FOR MY OWN STYLE OF COLOURS

var gg = document.getElementsByClassName('my_special');

gg[0].addEventListener("click",myfunc7);

function myfunc7(){
		
var hh = document.getElementById("myform");
hh.style.backgroundColor= "#0e330d";

var jj = document.getElementsByTagName("body")
jj[0].style.backgroundColor= "#f4f4f4";

var ii = document.getElementsByClassName("user_calc");
ii[0].style.backgroundColor= "#1b5c2a";

document.getElementById("myform").style.color="white";
document.getElementById("myform").style.border="3px solid #1b5c2a";

var ll = document.getElementsByClassName("AI");
ll[0].style.color= "#0e330d";

var jj = document.getElementsByClassName("title");
jj[0].style.color= "#0e330d";

a.style.backgroundColor="#99e599";
answer.style.backgroundColor="#f4f4f4";

var kk = document.getElementsByClassName("help");
kk[0].style.color= "black";

var zz = document.getElementsByClassName("hidden_nav");
zz[0].style.backgroundColor= "#447961";

var yy = document.getElementsByClassName("set");
yy[0].style.color= "#fff";

var xx = document.getElementsByClassName('my_mode');
xx[0].style.backgroundColor="#1b5c2a"

var ww = document.getElementsByClassName('line');
ww[0].style.color="#1b5c2a";

c.style.color="#1b5c2a";
}




var js_width = window.matchMedia("(min-width:767px)");	

function js_width_func(js_width){
if (js_width.matches){

var xxx = document.getElementsByClassName("line");
xxx[0].addEventListener("click",openNav);

function openNav(){
document.getElementById("mysidenav").style.width= "50%";
   }			
 	}
}

js_width_func(js_width)

