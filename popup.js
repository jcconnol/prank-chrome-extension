document.addEventListener('DOMContentLoaded', function() {
    var nCageSwitch = document.getElementsByClassName('ncage-pics')[0];
    var mouseSizeSwitch = document.getElementsByClassName('mouse-size-switch')[0];
    var nicCageChecked = true;

    chrome.storage.sync.get(["nicCageToggle"], function(items){
        var nicCageChecked = items.nicCageToggle;

        if(nicCageChecked === true){
            nCageSwitch.checked = true;
            console.log("its true");
        }
        else{
            nCageSwitch.checked = false;
            console.log("its false");
        }
    });

    chrome.storage.sync.get(["mouseSizeToggle"], function(items){

        var mouseSizeChecked = items.mouseSizeToggle;

        if(mouseSizeChecked === true){
            mouseSizeSwitch.checked = true;
        }
        else{
            mouseSizeSwitch.checked = false;
        }
    });

    nCageSwitch.addEventListener('click' , function() {
        chrome.storage.sync.set({
            nicCageToggle: nCageSwitch.checked
        });
    }, false);


    mouseSizeSwitch.addEventListener('click', function() {
        chrome.storage.sync.set({
            mouseSizeToggle: mouseSizeSwitch.checked
        });
    }, false);
    
}, false);