$( "#site-head" ).load( "/site-wide/head.html" );

$( "#sidebar-menu" ).load( "/site-wide/sidebar.html", function() {
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var contenta = this.nextElementSibling;
    if (contenta.style.display === "block") {
      contenta.style.display = "none";
    } else {
      contenta.style.display = "block";
    }
  });
}
});

$( "#site-header" ).load( "/site-wide/header.html" );
$( "#site-footer" ).load( "/site-wide/footer.html" );

