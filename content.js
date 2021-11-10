var RANDOM_CAGE_IMAGE_NUMBER = 12;
var RANDOM_CAGE_GIF_NUMBER = 2;
var RANDOM_CURSOR_MAX_NUMBER = 7;

runNicCage();
cursorChange();
noNetwork();
//toastShow();

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

//want to make your own cursor? Go here: http://www.rw-designer.com/online-cursor-editor
function cursorChange() {
    chrome.storage.sync.get(["mouseChangeToggle"], function(items){
        if(items.mouseChangeToggle === true || items.mouseChangeToggle === "true"){

            //random number from 1 to RANDOM_CURSOR_MAX_NUMBER
            var randomNumber = Math.floor(Math.random() * (RANDOM_CURSOR_MAX_NUMBER)) + 1;

            document.body.style.cursor = "url("+chrome.runtime.getURL("cursorFiles/"+randomNumber+".cur")+"), none"
        }
    });
}

function toastShow() {
    chrome.storage.sync.get(["toastTextToggle"], function(items){
        if(items.toastTextToggle === true || items.toastTextToggle === "true"){
            // Get the snackbar DIV
            alert("toast");

            var cssFileContents = `
            #snackbar {
                visibility: hidden;
                min-width: 250px;
                margin-left: -125px;
                background-color: #333;
                color: #fff;
                text-align: center;
                border-radius: 2px;
                padding: 16px;
                position: fixed;
                z-index: 1;
                left: 50%;
                bottom: 30px;
              }
              
              #snackbar.show {
                visibility: visible;
                -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
                animation: fadein 0.5s, fadeout 0.5s 2.5s;
              }
              
              @-webkit-keyframes fadein {
                from {bottom: 0; opacity: 0;}
                to {bottom: 30px; opacity: 1;}
              }
              
              @keyframes fadein {
                from {bottom: 0; opacity: 0;}
                to {bottom: 30px; opacity: 1;}
              }
              
              @-webkit-keyframes fadeout {
                from {bottom: 30px; opacity: 1;}
                to {bottom: 0; opacity: 0;}
              }
              
              @keyframes fadeout {
                from {bottom: 30px; opacity: 1;}
                to {bottom: 0; opacity: 0;}
              }`
            
            var elemDiv = document.createElement('div');
            elemDiv.id = 'snackbar';
            elemDiv.style = cssFileContents;
            elemDiv.className = "show";
            elemDiv.innerText = 'random text';
            document.body.appendChild(elemDiv);
        
            // Add the "show" class to DIV
            
            var x = document.getElementById("snackbar");
        
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){
                x.className = ""; 
            }, 3000);
        }
    });
}

function noNetwork() {
    chrome.storage.sync.get(["noInternetToggle"], function(items){
        if(items.toastTextToggle === true || items.toastTextToggle === "true"){
            
            location.replace(chrome.runtime.getURL("noNetwork.html"));
        }
    });
}

function cursorSize() {

}