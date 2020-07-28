// ==UserScript==
// @name         Stake2 - Enviar mensagem com Enter no SuperAnimes e SuperMangás
// @namespace    https://github.com/stake2/sa-script/
// @version      1.1
// @description  Esse script permite você enviar mensagens para outras pessoas no site SuperAnimes e SuperMangás apertando o Enter, o site não permite isso por padrão
// @author       Stake2, Izaque
// @license MIT
// @homepageURL  https://github.com/stake2/sa-script/
// @updateURL    https://github.com/stake2/sa-script/
// @include      https://www.superanimes.*/*
// @include      https://www.supermangas.*/*
// @include      https://www.superhentais.*/*
// ==/UserScript==

var input_box = document.getElementsByClassName("friend_sms_text")[0];
var perfil_sms_btn = document.getElementsByClassName("perfil_sms_btn")[0];

function Type() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
		console.log("Enter key was pressed, clicking on send button.");
		perfil_sms_btn.click();
    }

    else {
		console.log("Enter key was not pressed.");
    }
}

//console.log("Type function was defined.");

input_box = input_box.parentNode.replaceChild(document.createElement("input"), input_box);
input_box = document.evaluate("/html/body/div[7]/div[2]/div[1]/div/div[2]/div[1]/input", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
input_box.setAttribute('class', 'friend_sms_text');
input_box.setAttribute('name', 'sms_text');
input_box.setAttribute('maxlength', '1000');
input_box.setAttribute('placeholder', 'Escrever Mensagem!');
input_box.setAttribute('style', 'overflow: hidden;');

input_box.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    perfil_sms_btn.click();
  }
});

//input_box.setAttribute('onkeypress', 'Type();');

/*GM_xmlhttpRequest({
  method : "GET",
  // from other domain than the @match one (.org / .com):
  url : "https://github.com/stake2/sa-style/raw/master/Stake2's Test Script.js",
  onload : (ev) =>
  {
    let e = document.createElement('script');
    e.innerText = ev.responseText;
    unsafeWindow.document.head.appendChild(e);
  }
});*/

//var e = document.createElement('script');
//e.setAttribute('src', "https://github.com/stake2/sa-style/raw/master/Stake2's%20Test%20Script.js");
//document.head.appendChild(e);

//e.innerText = `
/*function Type() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
		console.log("Enter key was pressed, clicking on send button.");
		input_box.click();
    }

    else {
		console.log("Enter key was not pressed.");
    }
}
`;*/
//document.head.appendChild(e);

//document.body.setAttribute('onload', 'Type();');

//ChangeTitleTo("The new title");
//ChangeTitleTo("is");
//setTimeout(2000);
//ChangeTitleTo(newtitle);
//setTimeout(2000);
//ChangeTitleTo(originaltitle);
