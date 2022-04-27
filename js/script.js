var coll = document.getElementsByClassName("app__schedule");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-schedule");
    var content = this.nextElementSibling;
    // var elem = this.document.getElementsByClassName("collapsible");
    // var elem = this.lastChild;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    //   elem.css('background-color', 'green');
    }
  });
}