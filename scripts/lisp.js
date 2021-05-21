$(document).ready(function() {
  $('code, pre').append('<span class="command-copy">Copy to Clipboard</span>');

  $('code span.command-copy').click(function(e) {
    text = $(this).parent().select(); //.text();
    copiedText = $.trim(text);
    document.execCommand("copy");
  });


  $('pre span.command-copy').click(function(e) {
    text = $(this).parent().parent().select(); //.text();
    copiedText = $.trim(text);
    document.execCommand("copy");
  });
})


function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select(); 
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}