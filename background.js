chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: 'OFF'
    });
});

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
    // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState
    });

    if (nextState === 'ON') {
        // Listen for messages from the content script
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            if (request.type === "createTab") {
                // Create a new tab with the specified URL
                chrome.tabs.create({ url: request.url }, function (tab) {
                    // Send a response back to the content script
                    sendResponse({ tabId: tab.id });
                });

                // Indicate that the response will be sent asynchronously
                return true;
            }
        });
    } else if (nextState === 'OFF') {
        console.log("h")
    }

});

