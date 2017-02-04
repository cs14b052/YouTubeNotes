
chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab){
	
	if (changeInfo.status == 'complete') {
		chrome.pageAction.show(tab.id);
    	chrome.tabs.sendMessage(tabID, {url: tab.url}, function(response) {
    	});
	}
});