function runNicCage(){
    chrome.storage.sync.get(["nicCageToggle"], function(items){
        if(items.nicCageToggle == true || items.nicCageToggle == "true"){
            //list out all images and replace them with nic cage images
            var imageArray = document.getElementsByTagName("img");

            var imageNum = 1;
            for(var i = 0; i < imageArray.length; i++){
                var fileURL = chrome.runtime.getURL('cageImgs/'+imageNum+".jpg");
                imageArray[i].src = fileURL;

                imageNum++;

                if(imageNum > 15){
                    imageNum = 1;
                }
            }
        }
    });
}