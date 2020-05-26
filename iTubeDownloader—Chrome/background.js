
function sendURL(url, tab){
	var action_url = "itdl://url=" + encodeURI(url);
	chrome.tabs.update(tab.id, {
		url: action_url
	});
};

chrome.contextMenus.create({
	"title" : "Send link to iTubeDownloader",
	"contexts" : [ "link" ],
	"onclick" : function(info, tab){
		sendURL(info.linkUrl, tab);
	}
});

chrome.browserAction.onClicked.addListener(function(tab) {
	sendURL(tab.url, tab);
});

chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.query({
		active: true,
		lastFocusedWindow: true
	}, function(tabs) {
		var tab = tabs[0];
		sendURL(tab.url, tab);
	});
});
