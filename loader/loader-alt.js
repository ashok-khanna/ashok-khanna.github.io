var titleValue = document.getElementById("ajax-loader").getAttribute("data-title");
var contentFile = document.getElementById("ajax-loader").getAttribute("data-content");
var nextUrl = document.getElementById("ajax-loader").getAttribute("data-nextUrl");
var lastUrl = document.getElementById("ajax-loader").getAttribute("data-lastUrl");
var nextName = document.getElementById("ajax-loader").getAttribute("data-nextName");
var lastName = document.getElementById("ajax-loader").getAttribute("data-lastName");

$.get("/loader/head.html", function(data){
  $(data).appendTo("#site-head");
  $( "#page-title" ).append( titleValue );
});


$( "#site-body" ).load( "/loader/body.html", function() {

  $( "#sidebar-menu" ).load( "/loader/sidebar.html", function() {
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

$( "#site-header" ).load( "/loader/header.html" );
$( "#site-footer" ).load( "/loader/footer.html" );

$.get( contentFile , function(data){
  $(data).appendTo("#page-content");
});

});
