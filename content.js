if(window != null)
	window.onkeyup = function(e){
		if(e.which == 'f'){
			if(sidePanel.style.display != "none")
				sidePanel.style.display = "none";
			else
				sidePanel.style.display = "block";
		}
	}

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
	else if(a != null && a.style.display == "none"){
		a.style.display = "block";
		return a;
	}
	var videoContainer = document.getElementsByClassName("ytp-iv-video-content")[0];
	var sidePanel = document.createElement("div");
	sidePanel.style.backgroundColor = "white";
	sidePanel.style.height = (videoContainer.clientHeight - 10 )+ "px";
	// sidePanel.appendChild(document.createElement("p").appendChild(document.createTextNode("dkjshdg")));
	sidePanel.id = "mainPanel";
	sidePanel.style.display = "block";
	sidePanel.style.position = "relative";
	
	var clickFunc = function () {
	if(sidePanel.style.display != "none")
		sidePanel.style.display = "none";
	else
		sidePanel.style.display = "block";
	// console.log(sidePanel.style.display);
	};
	document.getElementsByClassName("ytp-size-button")[0].onclick = clickFunc;
	document.getElementsByClassName("ytp-fullscreen-button")[0].onclick = clickFunc;
	var closeBut = document.createElement("button");
	closeBut.style.cursor = "pointer";
	closeBut.appendChild(document.createTextNode("close"));
	
	closeBut.style.position = "absolute";
	closeBut.style.right = "0%";
	closeBut.style.top = "0%";
	//styling by Kaaaaaaavs

	sidePanel.appendChild(closeBut);
	closeBut.addEventListener('click',function(){
		sidePanel.style.display="none";
	});

	var addBut = document.createElement("button");
	addBut.style.cursor = "pointer";
	addBut.appendChild(document.createTextNode("+ Add Note"));

	//styling by Kaaaaaaavs

	sidePanel.appendChild(addBut);
	addBut.addEventListener('click',function(){
		//contact server for this
	});

	var view = document.createElement("details");
	view.style.cursor = "pointer";
	view.appendChild(document.createTextNode("Notes"));

	//styling by Kaaaaaaavs

	sidePanel.appendChild(view);
	
	//get content from server

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