onresize = doLayout;
var isLoading = false;

onload = function() {
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
 

}

function doLayout() {
 
  var controls = document.querySelector('#controls');
  var controlsHeight = controls.offsetHeight;
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
  var webviewWidth = windowWidth;
  var webviewHeight = windowHeight - controlsHeight;
}

