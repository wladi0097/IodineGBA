console.log(window.location.href === 'debug')
if (window.location.href.split('?')[1] === 'debug') {
  var elem = document.getElementById('debugWindow')
  elem.classList.add('active')

  console.log = function(msg){
    elem.innerHTML +='log: ' + msg + '<br>'
  }

  console.error = function(msg){
    elem.innerHTML +='error: ' + msg + '<br>'
  }

  window.onerror = function(message, url, linenumber) {
    elem.innerHTML += "error: " + message + " on line " +
                linenumber + " for " + url
    }
}
