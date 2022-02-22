chrome.browserAction.onClicked.addListener(function (tab) {
    const url = tab.url;
    var finalUrl = "";
    if (url.match("youtube.com")) {                         // YOUTUBE
        const videoId = url.match(/([A-Za-z0-9_\-]{11})/);
        if (!videoId) { return; }
        finalUrl = "https://www.youtube.com/embed/" + videoId[0];
    } else {                                                // OTHERS
        finalUrl = tab.url;
    }
    chrome.windows.create({
        url: finalUrl,
        type: "popup"
    });
})