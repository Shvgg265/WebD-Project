function myFunction(){
    var x = document.getElementById("myLinks");
    var y = document.getElementById("hamb");
    var z = document.getElementById("crss");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "block";
    }
}
