window.onkeyup = function(e){
	if(e.which == 'f'){
		if(sidePanel.style.display != "none")
			sidePanel.style.display = "none";
		else
			sidePanel.style.display = "block";
	}
}

var dictionary = {};
var emailID;
var button = document.createElement("button");
var current_url;

function enableContent() {
	//<button id="subtitle-button" class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon action-panel-trigger-subtitle" type="button" onclick=";return false;" data-button-toggle="true"><span style="margin-right:9px;"><img src="chrome-extension://oanhbddbfkjaphdibnebkklpplclomal/images/subtitles_icon.svg" width="18px"></span><span class="yt-uix-button-content">Subtitles</span></button>

if(document != null){
	var button = document.createElement("button");
	button.style.cursor = "pointer";
	button.setAttribute('class','yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon');
	var image = document.createElement('span');
	image.style.marginRight = 'initial';
	var logo = document.createElement('img');
	logo.src = chrome.extension.getURL('sub_logo.png');
	logo.style.width = '23px';
	logo.style.height = '23px';
	image.appendChild(logo);
	button.appendChild(image);
	var text = document.createElement("span");
	text.innerText = 'YouTube Notes';
	text.setAttribute('class','yt-uix-button-content');
	button.appendChild(text);
	button.addEventListener('click', function(){
		if (!getEmailAddress()){
			alert('Please sign into your gmail account to access this extension');
		}
		else
			var a = addPanel();
	});
	document.getElementById('watch8-secondary-actions').appendChild(button);	
}

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
	sidePanel.style.backgroundColor = "white";
	sidePanel.style.overflowY = "scroll";
	sidePanel.style.height = (videoContainer.clientHeight - 10 )+ "px";
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
		var startTime = document.getElementsByClassName("ytp-time-current")[0].innerText;
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
	sidePanel.appendChild(addBut);
	addBut.addEventListener('click',function(){
		//TODO:contact server for this
		var curtime = document.getElementsByClassName("ytp-time-current")[0].innerText;
		console.log(curtime);
		var emailid = document.getElementsByClassName("yt-masthead-picker-header yt-masthead-picker-active-account")[0].innerText;
		console.log(emailid);

		var inp = document.createElement("div");
		var textbox = document.createElement("textarea");
		var saveBut = document.createElement("button");
		saveBut.appendChild(document.createTextNode("Save"));
		saveBut.style.cursor="pointer";
		inp.appendChild(textbox);
		inp.appendChild(saveBut);
		var view = document.createElement("details");
		view.style.cursor = "pointer";
		view.appendChild(inp);
		sidePanel.appendChild(view);
		saveBut.addEventListener('click',function(){
			//TODO:save to the database.
		});
	});
	
	//TODO:get content from server

	var sideBar = document.getElementById("watch7-sidebar-contents");
	sideBar.insertBefore(sidePanel, sideBar.firstChild);
	return sidePanel;
}
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		current_url = request.url;
		enableContent();
	}
);

function getEmailAddress(argument) {
	var emailElement = document.getElementsByClassName("yt-masthead-picker-header yt-masthead-picker-active-account");
	if (emailElement.length == 0) {
		return false;
	}
	else
	{
		emailID = emailElement[0].innerText;
		return true;
	}
}