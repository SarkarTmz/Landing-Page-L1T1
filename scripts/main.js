let a = document.getElementById("menu");
let b = document.getElementById("bar");
a.style.display = "none";

function myFunction(){
  if (a.style.display === "none") {
    a.style.display = "flex";
  } else {
    a.style.display = "none";
  }
};
