runNicCage();
mouseSize();

function runNicCage(){
    chrome.storage.sync.get(["nicCageToggle"], function(items){

        if(items.nicCageToggle == true || items.nicCageToggle == "true"){
            //list out all images and replace them with nic cage images
            var imageArray = document.getElementsByTagName("img");

            var imageNum = 1;
            alert("image leng: " + imageArray.length);
            for(var i = 0; i < imageArray.length; i++){

                var fileURL = chrome.runtime.getURL('cageImgs/'+imageNum);

                if(imageNum > 12 && imageNum < 15){
                    fileURL = fileURL + ".gif"
                }
                else if(imageNum >= 0 && imageNum <= 12){
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

function mouseSize(){
    chrome.storage.sync.get(["mouseSizeToggle"], function(items){
        if(items.mouseSizeToggle === true){
            //make mouse bigger and smaller
        }
    })
}

function cursorChange(x) {
    var whichSelected = x.selectedIndex;
    document.body.style.cursor = x.options[whichSelected].text;
}

function snackShow() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ 
        x.className = x.className.replace("show", ""); 
    }, 3000);
  }