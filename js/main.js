window.onload=function(){
	document.getElementById("hamburgerBtn").addEventListener("click", openHamburger);
	document.getElementById("hamburgerCloseBtn").addEventListener("click", closeHamburger);
}

function openHamburger(){
	document.querySelector(".hamburger").style.display = "none";
	document.querySelector(".links").style.display = "block";
	document.querySelector(".social").style.display = "block";
	document.querySelector(".hamburgerClose").style.display = "block";
}

function closeHamburger(){
	document.querySelector(".hamburger").style.display = "block";
	document.querySelector(".links").style.display = "none";
	document.querySelector(".social").style.display = "none";
	document.querySelector(".hamburgerClose").style.display = "none";
}

function inputText(){
	document.getElementById("name").value = "";
}

function addItem(){
	alert("need to add to this function");
}

// onfocus="if(this.value == 'Default text') { this.value = ''; }" 

// onblur="if(this.value == '') { this.value = 'Default text'; }">










