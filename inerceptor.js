/**
 * Created by U112586 on 06.05.2014.
 */
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        var b2eBrowser = {name: "B2E-Browser", value: "YEP"};
        details.requestHeaders.splice(0, 0, b2eBrowser);
        return {requestHeaders: details.requestHeaders};
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]);