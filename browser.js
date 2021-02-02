let { navHome } = require("./lib")
var isLoading = false;
let HistMap = []
onload = function() {
  
  onresize = doLayout;
  
  var  hypdiv = document.querySelector("#hyper")
  doLayout();

  document.querySelector('#back').onclick = function() {
    
  };
  document.querySelector('#location-form').onsubmit = function(e) {
  e.preventDefault();
  navigateTo(document.querySelector('#location').value);
};

  document.querySelector('#forward').onclick = function() {
    
  };

  document.querySelector('#home').onclick = function() {
    navigateTo('meta:home');
  };

  document.querySelector('#reload').onclick = function() {
 
  };
  document.querySelector('#reload').addEventListener(
    'webkitAnimationIteration',
    function() {
      if (!isLoading) {
        document.body.classList.remove('loading');
      }
    });


};

function navigateTo(url) {
if (url == "meta:home"){
	navHome()
	return 0;
}else{
	
}

}

function doLayout() {
  var hypdiv = document.querySelector("#hyper")
 
  var controls = document.querySelector('#controls');
  var controlsHeight = controls.offsetHeight;
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
  hypdiv.style.width = windowWidth
  hypdiv.style.height = windowHeight - controlsHeight
}

