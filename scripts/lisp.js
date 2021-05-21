// https://stackoverflow.com/questions/62857743/how-to-copy-to-clipboard-text-from-code-and-pre-tags-using-jquery-and-js

$(document).ready(function() {
  $('code').append('<button class="copy-btn">Copy to Clipboard</button>');

  $('code button.copy-btn').click(function(e) {
    var text = $(this).parent().text(); //.text();
    var newText = text.substring(0, text.length - 18);
    var copyHex = document.createElement('input');
    copyHex.value = newText;
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand('copy');
    console.log(copyHex.value)
    document.body.removeChild(copyHex);
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