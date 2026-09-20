
function acceptCookies() {
	localStorage.setItem("cookies", "1");
	updateCookiePolicy();
}

function rejectCookies() {
	localStorage.setItem("cookies", "0");
	updateCookiePolicy();
}

function resetCookies() {
	 localStorage.removeItem("cookies");
	 updateCookiePolicy();
	 window.location.reload();
}

function updateCookiePolicy() {

	if (localStorage.getItem("cookies") == 1) {
			document.getElementById("cookiesNotice").style.display = "none";
		}
	else if (localStorage.getItem("cookies") == 0) {
			document.getElementById("cookiesNotice").style.display = "none";
		}
	else   {
		var div = document.createElement("div");
		div.id = "cookiesNotice";
		div.style.position = "fixed";
		div.style.zIndex = "999999999999999";
		div.style.width = "85%";
		div.style.color = "black";
		div.style.padding = "5px";
		div.style.paddingTop = "15px";
		div.style.paddingBottom = "10px";
		div.style.borderRadius = "5px";
		div.innerHTML = "This site uses cookies and other features to help show content. By clicking accept, you agree to use these technologies. You can read more about it <a href='privacypolicy.html' target='_blank'>here</a><br><br><button onclick='acceptCookies()'>Accept</button>&nbsp&nbsp<button onclick='rejectCookies()'>Reject</button><br>";
		div.style.textAlign = "center";
		div.style.left = "50%";
		div.style.background = "white";
		div.style.bottom = "0px";
		div.style.transform = "translate(-50%, -50%)";
		div.style.justifyContent = "center";
		
		
		document.body.appendChild(div);
	}
}



updateCookiePolicy();