import './nicCage';
import './mouseSize';

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        nicCage();
        mouseSize();
    }
});