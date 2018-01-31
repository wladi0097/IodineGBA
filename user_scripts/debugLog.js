if (window.location.href.split('?')[1] === 'debug') {
  var elem = document.getElementById('debugWindow')
  elem.classList.add('active')

  console.log = function(msg){
    elem.innerHTML +='log: ' + msg + '<br>'
  }

  window.onerror = function(message, url, linenumber) {
    elem.innerHTML += "error: " + message + " on line " +
                linenumber + " for " + url + '<br>'
    }
  console.log('init debug')
}
