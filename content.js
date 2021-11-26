var RANDOM_CAGE_IMAGE_NUMBER = 12;
var RANDOM_CAGE_GIF_NUMBER = 2;
var DOGE_IMAGE_NUMBER = 9;
var RANDOM_CURSOR_MAX_NUMBER = 7;
var RANDOM_SCREEN_FLASH_MAX_INTERVAL = 45000;
var WINDOWS_ERROR_RANDOM_THRESHOLD = 500;

runPranks();

function runPranks(){
    chrome.storage.sync.get(["nicCageToggle"], function(items){
        if(items.nicCageToggle == true || items.nicCageToggle == "true"){
            runNicCage();
        }
    });

    chrome.storage.sync.get(["dogeToggle"], function(items){
        if(items.dogeToggle == true || items.dogeToggle == "true"){
            runDoge();
        }
    });

    chrome.storage.sync.get(["mouseChangeToggle"], function(items){
        if(items.mouseChangeToggle === true || items.mouseChangeToggle === "true"){
            chrome.storage.sync.get(["mouseCursorChoice"], function(items){
                runCursorChange(items);
            });
        }
    });

    chrome.storage.sync.get(["noInternetToggle"], function(items){
        if(items.noInternetToggle === true || items.noInternetToggle === "true"){
            noNetwork();
        }
    });

    chrome.storage.sync.get(["screenFlashToggle"], function(items){
        if(items.screenFlashToggle === true || items.screenFlashToggle === "true"){
            chrome.storage.sync.get(["screenFlashInterval"], function(items){
                runScreenFlash(items);
            });
        }
    });

    chrome.storage.sync.get(["playErrorToggle"], function(items){
        if(items.playErrorToggle === true || items.playErrorToggle === "true"){
            chrome.storage.sync.get(["playErrorInterval"], function(items){
                runPlayError(items);
            });
        }
    });

    chrome.storage.sync.get(["harlemShakeChoice"], function(items){
        if(items.harlemShakeChoice === true || items.harlemShakeChoice === "true"){
            runHarlemShake();
        }
    });
}

function runNicCage(){
    
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

function runDoge(){
    
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

//want to make your own cursor? Go here: http://www.rw-designer.com/online-cursor-editor
function runCursorChange(items) {
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
}

//TODO change to use chrome network API to block requests
function noNetwork() {
    var noInternetURL = chrome.runtime.getURL("noNetwork.html");
    fetch(noInternetURL)
        .then(function (response) { 
            return response.text();                    
        }).then(function(template){
            document.body.innerHTML = template;
        });
}

function runScreenFlash(items){
    
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
}

function runPlayError(items){
    if(items.playErrorInterval){
        WINDOWS_ERROR_RANDOM_THRESHOLD = items.playErrorInterval;
    }

    document.body.addEventListener('click', function() {
        var randomInteger = Math.floor(Math.random() * (1000)) + 1;

        if(randomInteger < WINDOWS_ERROR_RANDOM_THRESHOLD){
            var errorURL = chrome.runtime.getURL('soundFiles/windows_error.mp3');
            new Audio(errorURL).play();
        }
    });
}

function runHarlemShake(){
    document.body.addEventListener('click', function() {
        function harlemShakeInner() {
            function c() {
                var e = document.createElement("link");
                e.setAttribute("type", "text/css");
                e.setAttribute("rel", "stylesheet");
                e.setAttribute("href", f);
                e.setAttribute("class", l);
                document.body.appendChild(e);
            }
            function h() {
                var e = document.getElementsByClassName(l);
                for (var t = 0; t < e.length; t++) {
                    document.body.removeChild(e[t]);
                }
            }
            function p() {
                var e = document.createElement("div");
                e.setAttribute("class", a);
                document.body.appendChild(e);
                setTimeout(function () {
                    document.body.removeChild(e);
                }, 100);
            }
            function d(e) {
                return { height: e.offsetHeight, width: e.offsetWidth };
            }
            function v(i) {
                var s = d(i);
                return s.height > e && s.height < n && s.width > t && s.width < r;
            }
            function m(e) {
                var t = e;
                var n = 0;
                while (!!t) {
                    n += t.offsetTop;
                    t = t.offsetParent;
                }
                return n;
            }
            function g() {
                var e = document.documentElement;
                if (!!window.innerWidth) {
                    return window.innerHeight;
                } else if (e && !isNaN(e.clientHeight)) {
                    return e.clientHeight;
                }
                return 0;
            }
            function y() {
                if (window.pageYOffset) {
                    return window.pageYOffset;
                }
                return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            }
            function E(e) {
                var t = m(e);
                return t >= w && t <= b + w;
            }
            function S() {
                var e = document.createElement("audio");
                e.setAttribute("class", l);
                e.src = i;
                e.loop = false;
                e.addEventListener(
                    "canplay",
                    function () {
                        setTimeout(function () {
                            x(k);
                        }, 500);
                        setTimeout(function () {
                            N();
                            p();
                            for (var e = 0; e < O.length; e++) {
                                T(O[e]);
                            }
                        }, 15500);
                    },
                    true
                );
                e.addEventListener(
                    "ended",
                    function () {
                        N();
                        h();
                    },
                    true
                );
                e.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
                document.body.appendChild(e);
                e.play();
            }
            function x(e) {
                e.className += " " + s + " " + o;
            }
            function T(e) {
                e.className += " " + s + " " + u[Math.floor(Math.random() * u.length)];
            }
            function N() {
                var e = document.getElementsByClassName(s);
                var t = new RegExp("\\b" + s + "\\b");
                for (var n = 0; n < e.length; ) {
                    e[n].className = e[n].className.replace(t, "");
                }
            }
            var e = 30;
            var t = 30;
            var n = 350;
            var r = 350;
            var i = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";
            var s = "mw-harlem_shake_me";
            var o = "im_first";
            var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
            var a = "mw-strobe_light";
            var f = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";
            var l = "mw_added_css";
            var b = g();
            var w = y();
            var C = document.getElementsByTagName("*");
            var k = null;
            for (var L = 0; L < C.length; L++) {
                var A = C[L];
                if (v(A)) {
                    if (E(A)) {
                        k = A;
                        break;
                    }
                }
            }
            if (A === null) {
                console.warn("Could not find a node of the right size. Please try a different page.");
                return;
            }
            c();
            S();
            var O = [];
            for (var L = 0; L < C.length; L++) {
                var A = C[L];
                if (v(A)) {
                    O.push(A);
                }
            }
        };

        harlemShakeInner();
    })
}

