
chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab){
	
	if (changeInfo.status == 'complete') {
    	chrome.tabs.sendMessage(tabID, {url: tab.url}, function(response) {
      		console.log(response.farewell);
    	});
	}
});