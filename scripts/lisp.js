$(document).ready(function() {
  $('.code-div').append('<button class="copy-btn">Copy to Clipboard</btn>');

  $('.copy-btn').click(function(e) {
    console.log("hellow")
    text = $(this).parent().first().first().select(); //.text();
    copiedText = $.trim(text);
    console.log(text.value);
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