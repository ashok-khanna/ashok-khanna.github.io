// https://stackoverflow.com/questions/62857743/how-to-copy-to-clipboard-text-from-code-and-pre-tags-using-jquery-and-js

$(document).ready(function() {
  $('code').append('<button class="copy-btn">Copy to Clipboard</button>');

  $('code button.copy-btn').click(function(e) {
    var text = $(this).parent().text(); //.text();
    var newText = text.substring(0, text.length - 18);
    var copyHex = document.createElement('textarea');
    // copyHex.style.whiteSpace = "pre";
    copyHex.value = newText;
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand('copy');
    console.log(copyHex.value)
  });
})