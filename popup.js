document.addEventListener('DOMContentLoaded', function() {
    var nCageSwitch = document.getElementsByClassName('ncage-pics')[0];
    var dogeSwitch = document.getElementsByClassName('doge-pics')[0];
    var mouseChangeSwitch = document.getElementsByClassName('mouse-change-switch')[0];
    var mouseCursorDropdown = document.getElementsByClassName('mouse-cursor-dropdown')[0];
    var noInternetSwitch = document.getElementsByClassName('no-internet-switch')[0];
    var screenFlashSwitch = document.getElementsByClassName('screen-flash-switch')[0];
    var screenFlashIntervalInput = document.getElementsByClassName('screen-flash-interval-number')[0];
    var playErrorSwitch = document.getElementsByClassName('windows-error')[0];
    var playErrorIntervalInput = document.getElementsByClassName('play-error-interval-number')[0];
    var harlemShakeSwitch = document.getElementsByClassName('harlem-shake')[0];
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

    nCageSwitch.addEventListener('click' , function() {
        chrome.storage.sync.set({
            nicCageToggle: nCageSwitch.checked
        });
    }, false);

    chrome.storage.sync.get(["dogeToggle"], function(items){
        var dogeChecked = items.dogeToggle;

        if(dogeChecked === true){
            dogeSwitch.checked = true;
        }
        else{
            dogeSwitch.checked = false;
        }
    });

    dogeSwitch.addEventListener('click' , function() {
        chrome.storage.sync.set({
            dogeToggle: dogeSwitch.checked
        });
    }, false);

    chrome.storage.sync.get(["noInternetToggle"], function(items){
        var noInternetChecked = items.noInternetToggle;

        if(noInternetChecked === true){
            noInternetSwitch.checked = true;
        }
        else{
            noInternetSwitch.checked = false;
        }
    });

    noInternetSwitch.addEventListener('click' , function() {
        chrome.storage.sync.set({
            noInternetToggle: noInternetSwitch.checked
        });
    }, false);

    chrome.storage.sync.get(["screenFlashToggle"], function(items){

        var screenFlashChecked = items.screenFlashToggle;

        if(screenFlashChecked === true){
            screenFlashSwitch.checked = true;
        }
        else{
            screenFlashSwitch.checked = false;
        }
    });

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

    chrome.storage.sync.get(["mouseChangeToggle"], function(items){

        var mouseChangeChecked = items.mouseChangeToggle;

        if(mouseChangeChecked === true){
            mouseChangeSwitch.checked = true;
        }
        else{
            mouseChangeSwitch.checked = false;
        }
    });

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


    //play error
    playErrorSwitch.addEventListener('click', function() {
        chrome.storage.sync.set({
            playErrorChoice: playErrorSwitch.checked
        });
    }, false);

    chrome.storage.sync.get(["playErrorChoice"], function(items){
        var playErrorChoice = items.playErrorChoice;

        if(playErrorChoice === true){
            playErrorSwitch.checked = true;
        }
        else{
            playErrorSwitch.checked = false;
        }
    });

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

    chrome.storage.sync.get(["harlemShakeChoice"], function(items){
        var harlemShakeChecked = items.harlemShakeChoice;

        if(harlemShakeChecked === true){
            harlemShakeSwitch.checked = true;
        }
        else{
            harlemShakeSwitch.checked = false;
        }
    });



    

    

    
    
}, false);