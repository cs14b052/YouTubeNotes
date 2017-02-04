
if(document != null){
	var button = document.createElement("button");
	button.style.cursor = "pointer";
	button.appendChild(document.createTextNode("YouTubeNotes"));
	button.addEventListener('click', function(){
		var a = addPanel();
	});
	document.getElementById('watch8-secondary-actions').appendChild(button);
}	
function addPanel(){
	var a = document.getElementById("mainPanel");
	if(a != null && a.style.display != "none")
		return a;
	var videoContainer = document.getElementsByClassName("ytp-iv-video-content")[0];
	var sidePanel = document.createElement("div");
	sidePanel.appendChild(document.createElement("p").appendChild(document.createTextNode("dkjshdg")));
	sidePanel.id = "mainPanel";
	sidePanel.style.display = "block";
	var clickFunc = function () {
		if(sidePanel.style.display != "none")
			sidePanel.style.display = "none";
		else
			sidePanel.style.display = "block";
		console.log(sidePanel.style.display);
	};
	document.getElementsByClassName("ytp-size-button")[0].onclick = clickFunc;
	document.getElementsByClassName("ytp-fullscreen-button")[0].onclick = clickFunc;
	document.getElementsByClassName("ytp-iv-video-content")[0].ondblclick = function(){
		if(sidePanel.style.display != "none")
			sidePanel.style.display = "none";
		else
			sidePanel.style.display = "block";
		console.log(sidePanel.style.display);
	};
	window.addEventListener('onkeypress', function(e){
		if(e.which == 27 || e.which == 'f'){ // key for esc 
			if(sidePanel.style.display != "none")
				sidePanel.style.display = "none";
			else
				sidePanel.style.display = "block";
		}
	});
	var sideBar = document.getElementById("watch7-sidebar-contents");
	sideBar.insertBefore(sidePanel, sideBar.firstChild);
	return sidePanel;
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		alert('sfkjsd');
		if(request.greeting == "hello"){
			sendResponse({farewell : "goodbye!!"});
		}
	}
);