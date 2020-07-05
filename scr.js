async function loadnaruto() {
    document.getElementById("img1").style.display="none";
    document.getElementById("msg1").innerHTML="Loading ......please wait"
    setTimeout(function(){
        document.getElementById("msg1").style.display="none";
        $("#spinner1").removeClass();
         document.getElementById("img1").style.display="block";
         }, 5000);
  }
 function loadsasuke() {
    document.getElementById("img2").style.display="none";
    
    document.getElementById("msg2").innerHTML="Loading.....please wait"
    setTimeout(function(){
        $("#spinner2").removeClass();
        document.getElementById("msg2").style.display="none";
         document.getElementById("img2").style.display="block";
         }, 10000);
  }

  function loadex() {
    document.getElementById("img3").style.display="none";
    document.getElementById("msg3").innerHTML="Loading.....please wait"
    setTimeout(function(){
       
        document.getElementById("msg3").style.display="none";
        $("#spinner3").removeClass();
         document.getElementById("img3").style.display="block";
         }, 15000);
  }

window.onload=function(){loadnaruto().then(loadsasuke()).then(loadex());}