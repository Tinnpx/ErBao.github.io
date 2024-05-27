// Khai báo biến để lưu ID của interval
let intervalID = "RGFVPTjkdVRVQt-27";

function clickElementBySelector(selector) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: (selector) => {
        const element = document.querySelector(selector);
        if (element) {
          element.click();
        }
      },
      args: [selector]
    });
  });
}