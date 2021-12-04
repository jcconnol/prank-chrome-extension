document.addEventListener('DOMContentLoaded', function() {
    var screenFlashIntervalInput = document.getElementsByClassName('screen-flash-interval-number')[0];
    var mouseCursorDropdown = document.getElementsByClassName('mouse-cursor-dropdown')[0];
    var playErrorIntervalInput = document.getElementsByClassName('play-error-interval-number')[0];

    chrome.storage.sync.get([
        "nicCageToggle",
        "dogeToggle",
        "noInternetToggle",
        "screenFlashToggle",
        "mouseChangeToggle",
        "playErrorToggle",
        "harlemShakeToggle",
        "noRightClickToggle",
        "addBookmarksToggle",
        "comicSansToggle"
    ], function(items){
        document.getElementsByClassName('ncage-pics')[0].checked = items.nicCageToggle;
        document.getElementsByClassName('doge-pics')[0].checked = items.dogeToggle;
        document.getElementsByClassName('no-internet-switch')[0].checked = items.noInternetToggle;
        document.getElementsByClassName('screen-flash-switch')[0].checked = items.screenFlashToggle;
        document.getElementsByClassName('mouse-change-switch')[0].checked = items.mouseChangeToggle;
        document.getElementsByClassName('windows-error')[0].checked = items.playErrorToggle;
        document.getElementsByClassName('harlem-shake')[0].checked = items.harlemShakeToggle;
        document.getElementsByClassName('no-right-click')[0].checked = items.noRightClickToggle;
        document.getElementsByClassName('add-bookmarks')[0].checked = items.addBookmarksToggle;
        document.getElementsByClassName('comic-sans')[0].checked = items.comicSansToggle;
    });

    $('.switch #prank-switch').click(function(event) {
        var inputClicked = event.target;
        var key = null;
        var value = event.target.checked;    

        if(inputClicked.matches(".ncage-pics")){
            key = "nicCageToggle";
        }
        else if(inputClicked.matches(".doge-pics")){
            key = "dogeToggle";
        }
        else if(inputClicked.matches(".no-internet-switch")){
            key = "noInternetToggle";
        }
        else if(inputClicked.matches(".screen-flash-switch")){
            key = "screenFlashToggle";
        }
        else if(inputClicked.matches(".mouse-change-switch")){
            key = "mouseChangeToggle";
        }
        else if(inputClicked.matches(".windows-error")){
            key = "playErrorToggle";
        }
        else if(inputClicked.matches(".harlem-shake")){
            key = "harlemShakeToggle";
        }
        else if(inputClicked.matches(".no-right-click")){
            key = "noRightClickToggle";
        }
        else if(inputClicked.matches(".add-bookmarks")){
            key = "addBookmarksToggle";
        }
        else if(inputClicked.matches(".comic-sans")){
            key = "comicSansToggle";
        }
        
        if(key){
            chrome.storage.sync.set({
                [key]: value
            });
            
        }
    });

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
}, false);