/* var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    var div = document.querySelector("#container");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
}); */

/* let btn = document.querySelector("#btn"); */

var div = document.querySelector("#form1");
var div2 = document.querySelector("#form2");

function acao(){

    if(div.style.display === "none") {
        div.style.display = "block";
        div2.style.display = "none";
    } else {
      div.style.display = "none";
      div2.style.display = "block";
  }

}
