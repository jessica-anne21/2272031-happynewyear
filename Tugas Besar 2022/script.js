// 2272031_Jessica Anne

var i = 0;
function move() {
  document.getElementById("text1").style.animation = "blinker 1s linear infinite";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById("loadingBar").style.display='none';
        document.getElementById("btn").style.display='none';        
        document.getElementById("text1").innerText= "Happy New Year";
        document.getElementById("text1").style.animation = "none";
        document.getElementById("text1").style.fontSize = "60px";  
        document.getElementById("content").style.display = "block"; 
        let person = prompt("Please enter your name:");   
        document.getElementById("name").innerText = person + '!';
        document.getElementById("name").style.color = "#f9d793";
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}



