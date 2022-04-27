var coll = document.getElementsByClassName("app__schedule");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-schedule");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function toggleModal() {
  var element = document.getElementById("m");
  element.classList.toggle("modal-show");
};