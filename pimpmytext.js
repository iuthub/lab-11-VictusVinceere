function fontSize(){
	document.querySelector("#justtext").style.fontSize="24pt";
}
function textBold(){
	if (document.querySelector("#pimp").checked) {
		document.querySelector("#justtext").style.fontWeight = "bold";
		document.querySelector("#justtext").style.textDecoration = "underline blink";
		document.querySelector("#justtext").style.color = "green";
	} else {
			document.querySelector("#justtext").style.fontWeight = "normal";
			document.querySelector("#justtext").style.textDecoration = "none";
			document.querySelector("#justtext").style.color = "black";
		}
}

function HeySnoop(){
	document.querySelector("#justtext").value = document.querySelector("#justtext").value.toUpperCase();
	document.querySelector("#justtext").value = document.querySelector("#justtext").value.split(".").join("-izzle.");
}
