chrome.browserAction.onClicked.addListener(function(activeTab) {
//    var newURL = "http://localhost:3000?target=" + activeTab.url;
    var newURL = "https://tweesky.com/?target=" + activeTab.url;
    chrome.tabs.create({
        url: newURL
    });
});
