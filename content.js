var RANDOM_CAGE_IMAGE_NUMBER = 12;
var RANDOM_CAGE_GIF_NUMBER = 2;
var DOGE_IMAGE_NUMBER = 9;
var RANDOM_CURSOR_MAX_NUMBER = 7;
var RANDOM_SCREEN_FLASH_MAX_INTERVAL = 45000;

runNicCage();
runDoge();
cursorChange();
noNetwork();
screenFlash();
playError();

//TODO put all the chrome storage into its own function and call other functions
function runNicCage(){
    chrome.storage.sync.get(["nicCageToggle"], function(items){

        if(items.nicCageToggle == true || items.nicCageToggle == "true"){
            //list out all images and replace them with nic cage images
            var imageArray = document.getElementsByTagName("img");

            var imageNum = 1;
            for(var i = 0; i < imageArray.length; i++){

                var fileURL = chrome.runtime.getURL('cageImgs/'+imageNum);

                if(imageNum > RANDOM_CAGE_IMAGE_NUMBER && imageNum < (RANDOM_CAGE_IMAGE_NUMBER + RANDOM_CAGE_GIF_NUMBER)){
                    fileURL = fileURL + ".gif"
                }
                else if(imageNum >= 0 && imageNum <= RANDOM_CAGE_IMAGE_NUMBER){
                    fileURL = fileURL + ".jpg"
                }

                imageArray[i].src = fileURL;

                imageNum++;

                if(imageNum > 14){
                    imageNum = 1;
                }
            }
        }
    });
}

function runDoge(){
    chrome.storage.sync.get(["dogeToggle"], function(items){

        if(items.dogeToggle == true || items.dogeToggle == "true"){
            //list out all images and replace them with nic cage images
            var imageArray = document.getElementsByTagName("img");
            imageArray = document.getElementsByTagName("img");

            var imageNum = 1;
            for(var i = 0; i < imageArray.length; i++){

                var fileURL = chrome.runtime.getURL('dogeImgs/'+imageNum);
                fileURL = fileURL + ".png"
                imageArray[i].src = fileURL;
                imageNum++;

                if(imageNum > DOGE_IMAGE_NUMBER){
                    imageNum = 1;
                }
            }
        }
    });
}

//want to make your own cursor? Go here: http://www.rw-designer.com/online-cursor-editor
function cursorChange() {
    chrome.storage.sync.get(["mouseChangeToggle"], function(items){
        if(items.mouseChangeToggle === true || items.mouseChangeToggle === "true"){
            chrome.storage.sync.get(["mouseCursorChoice"], function(items){
                if(items.mouseCursorChoice.trim() === "Random"){
                    //random number from 1 to RANDOM_CURSOR_MAX_NUMBER
                    var randomNumber = Math.floor(Math.random() * (RANDOM_CURSOR_MAX_NUMBER)) + 1;

                    var cursorURLStyle = "url("+chrome.runtime.getURL("cursorFiles/"+randomNumber+".cur")+"), none";
                    var allDivs = document.getElementsByTagName("*");

                    for(var i = 0; i < allDivs.length; i++){
                        allDivs[0].style.cursor = cursorURLStyle
                    }
                    
                    document.body.style.cursor = cursorURLStyle;

                }
                else{

                    var allDivs = document.getElementsByTagName("*");

                    for(var i = 0; i < allDivs.length; i++){
                        allDivs[0].style.cursor = items.mouseCursorChoice
                    }

                    document.body.style.cursor = items.mouseCursorChoice;
                }
            });
        }
    });
}

function noNetwork() {
    chrome.storage.sync.get(["noInternetToggle"], function(items){
        if(items.noInternetToggle === true || items.noInternetToggle === "true"){
            var noInternetURL = chrome.runtime.getURL("noNetwork.html");
            fetch(noInternetURL)
                .then(function (response) { 
                    return response.text();                    
                }).then(function(template){
                    document.body.innerHTML = template;
                });
        }
    });
}

function screenFlash(){
    chrome.storage.sync.get(["screenFlashToggle"], function(items){
        if(items.screenFlashToggle === true || items.screenFlashToggle === "true"){
            chrome.storage.sync.get(["screenFlashInterval"], function(items){
                RANDOM_SCREEN_FLASH_MAX_INTERVAL = items.screenFlashInterval;

                setInterval(function(){
                    //random number from 1 to RANDOM_CURSOR_MAX_NUMBER
                    var randomTime = Math.floor(Math.random() * (RANDOM_SCREEN_FLASH_MAX_INTERVAL)) + 1;

                    setTimeout(function() {
                            var screenOverlay = document.createElement("DIV");
                            screenOverlay.style = "position: fixed;z-index: 100000;top: 0;left: 0;right: 0;bottom: 0;background-color: black;";
                            screenOverlay.id = "screen-flash";
                            document.body.appendChild(screenOverlay);
                            setTimeout(function() {
                                    document.getElementById("screen-flash").remove();
                                }, 500
                            )
                        }, randomTime
                    );
                }, RANDOM_SCREEN_FLASH_MAX_INTERVAL);
            });
        }
    });
}