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

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function print(variable) {
	console.log(variable);
}

function sleep(variable_function, time) {
	var is_function = true;

	if (typeof variable_function !== "function") {
		is_function = false;
	}

	if (is_function == true) {
		setTimeout(variable_function, time);
	}

	if (is_function == false) {
		setTimeout(function() {
		variable_function;
		}, time);
	}
}

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

function Style_Message_Box() {
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
}

var input_box = document.querySelectorAll('[name="sms_text"]')[0];
var friend_sms_text = document.getElementsByClassName("friend_sms_text")[0];
var perfil_sms_btn = document.getElementsByClassName("perfil_sms_btn")[0];

input_box = input_box.parentNode.replaceChild(document.createElement("input"), input_box);

setTimeout(function() {
input_box = getElementByXpath("/html/body/div[7]/div[2]/div[1]/div/div[1]/input");

if (input_box == null) {
	input_box = getElementByXpath("/html/body/div[7]/div[2]/div[1]/div/div[2]/div[1]/input");
}
}, 300);



sleep(Style_Message_Box, 350);
