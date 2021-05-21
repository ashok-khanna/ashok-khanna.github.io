// https://stackoverflow.com/questions/62857743/how-to-copy-to-clipboard-text-from-code-and-pre-tags-using-jquery-and-js

  const codes = document.getElementsByTagName("code");

  for (code of codes){
    code.textContent = code.textContent.trim();
  }

  HighlightLisp.highlight_auto();
  HighlightLisp.paren_match();


  var copyButton = document.createElement("button");
  copyButton.classList.add("copy-btn");
  copyButton.textContent = "Copy to Clipboard"

  copyButton.click = function(e) {
    var text = $(this).parent().text().substring(17); //.text();
    var newText = text.trim();
    var copyHex = document.createElement('textarea');
    // copyHex.style.whiteSpace = "pre";
    copyHex.value = newText;
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand('copy');
    console.log(copyHex.value)
    document.body.removeChild(copyHex);
  }

  for (code of codes){
    code.prepend(copyButton);
    $('code button.copy-btn')
  }

  // $('code').prepend('<button class="copy-btn">Copy to Clipboard</button>');


