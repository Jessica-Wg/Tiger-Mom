let urls = ["comment pages/comment1.html",
    "comment pages/comment2.html",
    "comment pages/comment3.html",
    "comment pages/comment4.html",
    "comment pages/comment5.html",
    "comment pages/comment6.html",
    "comment pages/comment7.html",
    "comment pages/comment8.html",
    "comment pages/comment9.html",
    "comment pages/comment10.html",
    "comment pages/comment11.html",
    "comment pages/comment12.html",
    "comment pages/comment13.html",
    "comment pages/comment14.html",
    "comment pages/comment15.html",
    "comment pages/comment16.html",
    "comment pages/comment17.html",
    "comment pages/comment18.html",
    "comment pages/comment19.html",
    "comment pages/comment20.html"]

// Send a message to the background script
chrome.runtime.sendMessage({ type: "createTab", url: urls[Math.floor(Math.random() * 22)] }, function (response) {
    console.log(response);
});