document.addEventListener('DOMContentLoaded', function() {
    var nCageSwitch = document.getElementsByClassName('ncage-pics')[0];
    var dogeSwitch = document.getElementsByClassName('doge-pics')[0];
    var noInternetSwitch = document.getElementsByClassName('no-internet-switch')[0];
    var screenFlashSwitch = document.getElementsByClassName('screen-flash-switch')[0];
    var screenFlashIntervalInput = document.getElementsByClassName('screen-flash-interval-number')[0];
    var mouseChangeSwitch = document.getElementsByClassName('mouse-change-switch')[0];
    var mouseCursorDropdown = document.getElementsByClassName('mouse-cursor-dropdown')[0];
    var playErrorSwitch = document.getElementsByClassName('windows-error')[0];
    var playErrorIntervalInput = document.getElementsByClassName('play-error-interval-number')[0];
    var harlemShakeSwitch = document.getElementsByClassName('harlem-shake')[0];
    var noRightClickSwitch = document.getElementsByClassName('no-right-click')[0];
    var nicCageChecked = true;

    chrome.storage.sync.get([
        "nicCageToggle",
        "dogeToggle",
        "noInternetToggle",
        "screenFlashToggle",
        "mouseChangeToggle",
        "playErrorToggle",
        "harlemShakeChoice",
        "noRightClickChoice"
    ], function(items){
        document.getElementsByClassName('ncage-pics')[0].checked = items.nicCageToggle;
        document.getElementsByClassName('doge-pics')[0].checked = items.dogeToggle;
        document.getElementsByClassName('no-internet-switch')[0].checked = items.noInternetToggle;
        document.getElementsByClassName('screen-flash-switch')[0].checked = items.screenFlashToggle;
        document.getElementsByClassName('mouse-change-switch')[0].checked = items.mouseChangeToggle;
        document.getElementsByClassName('windows-error')[0].checked = items.playErrorToggle;
        document.getElementsByClassName('harlem-shake')[0].checked = items.harlemShakeChoice;
        document.getElementsByClassName('no-right-click')[0].checked = items.noRightClickChoice;
    });

    nCageSwitch.addEventListener('click' , function() {
        chrome.storage.sync.set({
            nicCageToggle: nCageSwitch.checked
        });
    }, false);

    dogeSwitch.addEventListener('click' , function() {
        chrome.storage.sync.set({
            dogeToggle: dogeSwitch.checked
        });
    }, false);

    noInternetSwitch.addEventListener('click' , function() {
        chrome.storage.sync.set({
            noInternetToggle: noInternetSwitch.checked
        });
    }, false);

    screenFlashSwitch.addEventListener('click', function() {

        chrome.storage.sync.set({
            screenFlashToggle: screenFlashSwitch.checked
        });
    }, false);

    chrome.storage.sync.get(["screenFlashInterval"], function(items){

        var screenFlashInterval = items.screenFlashInterval;

        if(screenFlashInterval && !isNaN(screenFlashInterval)){
            screenFlashIntervalInput.value = screenFlashInterval/1000;
        }
        else{
            screenFlashIntervalInput.value = -1;
        }
    });

    screenFlashIntervalInput.addEventListener('change', function(){
        var intervalNum = screenFlashIntervalInput.valueAsNumber * 1000;

        if(!isNaN(intervalNum)){
            chrome.storage.sync.set({
                screenFlashInterval: intervalNum
            });
        } else {
            chrome.storage.sync.set({
                screenFlashInterval: -1
            });
        }
    }, false);

    mouseChangeSwitch.addEventListener('click', function() {
        chrome.storage.sync.set({
            mouseChangeToggle: mouseChangeSwitch.checked
        });
    }, false);

    chrome.storage.sync.get(["mouseCursorChoice"], function(items){
        var mouseCursorChoice = items.mouseCursorChoice;

        if(mouseCursorChoice){
            $(".mouse-cursor-dropdown option:contains(" + mouseCursorChoice + ")").attr('selected', 'selected');
        }
        else{
            $(".mouse-cursor-dropdown option:contains(Random)").attr('selected', 'selected');
        }
    });
    
    mouseCursorDropdown.addEventListener('change', function(){
        var dropdownChoice = $(".mouse-cursor-dropdown option:selected").text();
        
        if(dropdownChoice){
            chrome.storage.sync.set({
                mouseCursorChoice: dropdownChoice
            });
        } else {
            chrome.storage.sync.set({
                mouseCursorChoice: "Random"
            });
        }

    }, false);

    playErrorSwitch.addEventListener('click', function() {
        chrome.storage.sync.set({
            playErrorToggle: playErrorSwitch.checked
        });
    }, false);

    chrome.storage.sync.get(["playErrorInterval"], function(items){

        var playErrorInterval = items.playErrorInterval;

        if(playErrorInterval && !isNaN(playErrorInterval)){
            playErrorIntervalInput.value = playErrorInterval;
        }
        else{
            playErrorIntervalInput.value = -1;
        }
    });

    playErrorIntervalInput.addEventListener('change', function(){
        var intervalNum = playErrorIntervalInput.valueAsNumber;

        if(!isNaN(intervalNum)){
            chrome.storage.sync.set({
                playErrorInterval: intervalNum
            });
        } else {
            chrome.storage.sync.set({
                playErrorInterval: -1
            });
        }
    }, false);

    //harlem shake
    harlemShakeSwitch.addEventListener('click', function() {
        chrome.storage.sync.set({
            harlemShakeChoice: harlemShakeSwitch.checked
        });
    }, false);

    noRightClickSwitch.addEventListener('click', function() {
        chrome.storage.sync.set({
            noRightClickChoice: noRightClickSwitch.checked
        });
    }, false);
}, false);