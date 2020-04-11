function myFunction() {
    var x = document.getElementById("gaming-part");
    var y = document.getElementById("intro");
    if (x.style.display === "none" && y.style.display === "flex") {
      x.style.display = "inline";
      y.style.display ="none";
    } else {
      x.style.display = "none";
      y.style.display ="flex";
    }
  } 