chrome.runtime.onInstalled.addListener(function() {
    //get url of welcome.html
    var welcomeUrl = chrome.runtime.getURL('welcome.html');
    //open welcome.html in a new tab
    chrome.tabs.create({ url: welcomeUrl });
});