document.addEventListener('DOMContentLoaded', function() {
    var nCageSwitch = document.getElementsByClassName('ncage-pics')[0];
    var mouseChangeSwitch = document.getElementsByClassName('mouse-change-switch')[0];
    var toastTextSwitch = document.getElementsByClassName('toast-switch')[0];
    var noInternetSwitch = document.getElementsByClassName('no-internet-switch')[0];
    var screenFlashSwitch = document.getElementsByClassName('screen-flash-switch')[0];
    var nicCageChecked = true;

    chrome.storage.sync.get(["nicCageToggle"], function(items){
        var nicCageChecked = items.nicCageToggle;

        if(nicCageChecked === true){
            nCageSwitch.checked = true;
        }
        else{
            nCageSwitch.checked = false;
        }
    });

    chrome.storage.sync.get(["noInternetToggle"], function(items){
        var noInternetChecked = items.noInternetToggle;

        if(noInternetChecked === true){
            noInternetSwitch.checked = true;
        }
        else{
            noInternetSwitch.checked = false;
        }
    });

    chrome.storage.sync.get(["mouseChangeToggle"], function(items){

        var mouseChangeChecked = items.mouseChangeToggle;

        if(mouseChangeChecked === true){
            mouseChangeSwitch.checked = true;
        }
        else{
            mouseChangeSwitch.checked = false;
        }
    });

    chrome.storage.sync.get(["toastTextToggle"], function(items){

        var toastTextChecked = items.toastTextToggle;

        if(toastTextChecked === true){
            toastTextSwitch.checked = true;
        }
        else{
            toastTextSwitch.checked = false;
        }
    });

    //TODO 
    chrome.storage.sync.get(["screenFlashToggle"], function(items){

        var screenFlashChecked = items.screenFlashToggle;

        if(screenFlashChecked === true){
            screenFlashSwitch.checked = true;
        }
        else{
            screenFlashSwitch.checked = false;
        }
    });

    nCageSwitch.addEventListener('click' , function() {
        chrome.storage.sync.set({
            nicCageToggle: nCageSwitch.checked
        });
    }, false);

    noInternetSwitch.addEventListener('click' , function() {
        chrome.storage.sync.set({
            noInternetToggle: noInternetSwitch.checked
        });
    }, false);


    mouseChangeSwitch.addEventListener('click', function() {
        chrome.storage.sync.set({
            mouseChangeToggle: mouseChangeSwitch.checked
        });
    }, false);

    toastTextSwitch.addEventListener('click', function() {

        chrome.storage.sync.set({
            toastTextToggle: toastTextSwitch.checked
        });
    }, false);

    screenFlashSwitch.addEventListener('click', function() {

        chrome.storage.sync.set({
            screenFlashToggle: screenFlashSwitch.checked
        });
    }, false);
    
}, false);