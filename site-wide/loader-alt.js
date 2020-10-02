var titleValue = document.getElementById("ajax-loader").getAttribute("data-title");
var contentFile = document.getElementById("ajax-loader").getAttribute("data-content");
var nextUrl = document.getElementById("ajax-loader").getAttribute("data-nextUrl");
var lastUrl = document.getElementById("ajax-loader").getAttribute("data-lastUrl");
var nextName = document.getElementById("ajax-loader").getAttribute("data-nextName");
var lastName = document.getElementById("ajax-loader").getAttribute("data-lastName");

$.get("/site-wide/head.html", function(data){
  $(data).appendTo("#site-head");
  $( "#page-title" ).append( titleValue );
});

$( "#site-body" ).load( "/site-wide/body.html", function() {

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

$.get( contentFile , function(data){
  $(data).appendTo("#page-content");

  $( "#page-content" ).append( "<div class=\"page-nav\"><div class=\"page-back\">" );

  if(lastName !="null") {
      $( "#page-content" ).append( "<a href=\"" + lastUrl + "\" type=\"text/html\"> <<< " + lastName + "</a></p>" );
  };

  $( "#page-content" ).append("</div>");

  $( "#page-content" ).append( "<div class=\"page-next\">" );

  if(nextName != "null") {
    $( "#page-content" ).append( "<p class=\"next\">Next: <a href=\"" + nextUrl + "\" type=\"text/html\">" + nextName + " >>></a></p>" );
  };
  $( "#page-content" ).append("</div>")

});

});


<div class="top-logo"><h2>Math.Dev</h2></div>
<div class="top-menu">
<div class="top-menu-item"><a href="/index.html">Home</a></div>
<div class="top-menu-item"><a href="/blog/index.html">Blog</a></div>
<div class="top-menu-item"><a href="/beta/index.html">Math</a></div>
<div class="top-menu-item"><a href="/lisp/index.html">Lisp</a></div>
</div>
