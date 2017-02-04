chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello")
    {
    	alert('meghana1');
    	 var head = document.getElementsByTagName('head')[0];
 var script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = "https://apis.google.com/js/platform.js";
 head.appendChild(script);

    	start();
    	// 1. Load the JavaScript client library.
		gapi.load('client:auth2', start);
      sendResponse({farewell: "goodbye"});
    }
  });

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyDDPZE3jMox6P6flEPShAsaL6f6FktV8bE',
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
    // clientId and scope are optional if auth is not required.
    'clientId': '521310469536-ttgpv9d655urh39j46fcas7bmmccvb3s.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
  }).then(function() {
    // 3. Initialize and make the API request.
    alert('meghana2');
    return gapi.client.plus.people.get( {'userId' : 'me'} ).execute(function(resp) {
    	// Shows profile information
    	alert(resp);
  	});
  });

}