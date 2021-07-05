
var index = 0;
var sp = document.getElementsByTagName('span');
var len = sp.length
function showDot(){
    for(var i = 0; i < len; i++){
        sp[i].className = "";
    }
    sp[index].className = "on";
}   

pic = document.getElementById('pic');
function prePic(){
    var newL;
    if(pic.style.left == "0px"){
        newL = -3600
    }
    else{
        newL = parseInt(pic.style.left)+600;
    }
    index--;
    if(index<0){
        index = 6;
    }
    showDot();
    pic.style.left = newL+"px"; 
}
function nextPic(){
    var newR
    if (pic.style.left=='-3600px') {
        newR = 0;
    }
    else{
        newR = parseInt(pic.style.left)-600;
    } 
    index++;
    if(index>6){
        index = 0;
    }
    showDot();
    pic.style.left = newR+"px";
}

var t = null;
function autoPlay() {
    t = setInterval(nextPic, 1000);
}

function stopPlay() {
    clearInterval(t);
}

for(var i = 0; i < len; i++){
    ((i)=>{
        sp[i].onclick = function(){
            var val = index-i;
            pic.style.left = parseInt(pic.style.left)+val*600+'px';
            index = i;
            showDot();
        }
    })(i);
}

