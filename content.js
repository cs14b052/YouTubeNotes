window.onkeyup = function(e){
	if(e.which == 'f'){
		if(sidePanel.style.display != "none")
			sidePanel.style.display = "none";
		else
			sidePanel.style.display = "block";
	}
}

var button = document.createElement("button");
button.style.cursor = "pointer";
button.appendChild(document.createTextNode("YouTubeNotes"));
button.addEventListener('click', function(){
	var a = addPanel();
});
document.getElementById('watch8-secondary-actions').appendChild(button);

function addPanel(){
	var curNote = null;
	var a = document.getElementById("mainPanel");
	if(a != null && a.style.display != "none")
		return a;
	else if(a != null && a.style.display == "none"){
		a.style.display = "block";
		return a;
	}
	var sidePanel = document.createElement("div");
	sidePanel.id = "mainPanel";
	sidePanel.style.backgroundColor = "white";
	sidePanel.style.display = "block";
	sidePanel.style.position = "relative";
	sidePanel.style.left = "50%";
	sidePanel.style.transform = "translateX(-50%)";
	sidePanel.style.top = "-10px";
	sidePanel.style.margin = "5px";
	sidePanel.style.padding = "0px 5px";
	sidePanel.style.height = (document.getElementsByClassName("ytp-iv-video-content")[0].clientHeight - 10) + "px";
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
	closeBut.style.fontSize = "16px";
	closeBut.style.fontFamily = "cursive";
	closeBut.style.fontWeight = "700";
	closeBut.style.color = "#a90909";
	closeBut.style.position = "absolute";
	closeBut.style.right = "0%";
	closeBut.style.top = "0%";
	closeBut.onmouseenter = function(){
		closeBut.style.color = "black";
		closeBut.style.textDecoration = "underline";
	}
	closeBut.onmouseleave = function(){
		closeBut.style.color = "#a90909";
		closeBut.style.textDecoration = "none";
	}
	closeBut.onclick = function(){
		sidePanel.style.display="none";
	}
	closeBut.appendChild(document.createTextNode("close"));
	sidePanel.appendChild(closeBut);


	var addBut = document.createElement("button");
	addBut.style.cursor = "pointer";
	addBut.style.fontSize = "16px";
	addBut.style.fontFamily = "cursive";
	addBut.style.fontWeight = "700";
	addBut.style.color = "#a90909";
	addBut.onclick = function(){
		//contact server for this
		if(curNote == null){
			
		}
		var note = createNote();
	}
	addBut.onmouseenter = function(){
		addBut.style.color = "black";
		addBut.style.textDecoration = "underline";
	}
	addBut.onmouseleave = function(){
		addBut.style.color = "#a90909";
		addBut.style.textDecoration = "none";
	}
	addBut.appendChild(document.createTextNode("+ Add Note"));
	sidePanel.appendChild(addBut);

	
	
	// var view = document.createElement("details");
	// view.style.cursor = "pointer";
	// view.appendChild(document.createTextNode("Notes"));

	// //styling by Kaaaaaaavs

	// sidePanel.appendChild(view);
	
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

