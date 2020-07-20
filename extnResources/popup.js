var appId = chrome.app.getDetails().id;
var htmlPage = "/index.html";
var createNewTab = true;

chrome.tabs.getAllInWindow(null, function (tabs) {
    tabs.forEach(tab => {
        if (tab.url.indexOf(appId) > 0) {
            chrome.tabs.update(tab.id, {
                active: true
            });
            createNewTab = false;
            window.close();
        }
    })

    if (createNewTab) {
        try {
            chrome.tabs.create({
                url: chrome.runtime.getURL(htmlPage + '?id=' + appId)
            });
        } catch (e) {
            browser.tabs.create({
                url: chrome.runtime.getURL(htmlPage + '?id=' + appId),
                active: true
            });

        }
    }
});
