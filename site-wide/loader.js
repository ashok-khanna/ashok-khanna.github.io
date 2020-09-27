var titleValue = document.getElementById("ajax-loader").getAttribute("data-title");
var contentFile = document.getElementById("ajax-loader").getAttribute("data-content");

$( "#site-head" ).on("load", "/site-wide/head.html", function() {
  $( "#page-title" ).append( titleValue );
});

$( "#site-body" ).on("load", "/site-wide/body.html", function() {

  $( "#sidebar-menu" ).on("load", "/site-wide/sidebar.html", function() {
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

$( "#site-header" ).on("load", "/site-wide/header.html" );
$( "#site-footer" ).on("load", "/site-wide/footer.html" );
$( "#page-content" ).on("load", contentFile );

});



