chrome.browserAction.onClicked.addListener(function(tab) {
    const url = tab.url;
    if(!url.match("youtube.com")){return;}

    const videoId = url.match(/([A-Za-z0-9_\-]{11})/);
    if(!videoId){return;}
    const finalUrl = "https://www.youtube.com/embed/"+videoId[0];
    chrome.windows.create({
        url: finalUrl,
        type: "popup"
    });
})