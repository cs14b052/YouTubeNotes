
chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      alert(response.farewell);
    });  
  });
});
