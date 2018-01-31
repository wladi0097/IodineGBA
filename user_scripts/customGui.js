var customGui = {
  init () {
    this.cacheDom()
    this.bindEvents()
  },

  cacheDom () {
    this.$full = document.getElementById('customGui')
    this.$bios = document.getElementById('addBios')
    this.$biosInput = document.getElementById('biosInput')
    this.$game = document.getElementById('addGame')
    this.$gameInput = document.getElementById('gameInput')
    this.$start = document.getElementById('startEmulator')
  },

  bindEvents () {
    this.$bios.addEventListener('mousedown', () => {
      this.$biosInput.parentNode.classList.add('active')
      setTimeout(() => {
        this.$biosInput.focus();
      }, 100);
    })

    this.$biosInput.addEventListener('change', this.addBios)
    this.$biosInput.addEventListener('keyup', (e) => {
      if(e.key === 'Enter') {
        this.addBios()
      }
    })

    this.$game.addEventListener('mousedown', () => {
      if (this.$game.allow) {
        this.$gameInput.parentNode.classList.add('active')
        setTimeout(() => {
          this.$gameInput.focus();
        }, 100);
      }
    })

    this.$gameInput.addEventListener('change', this.addGame)
    this.$gameInput.addEventListener('keyup', (e) => {
      if(e.key === 'Enter') {
        this.addGame()
      }
    })

    this.$start.addEventListener('mousedown', () => {
      if (this.$start.allow) {
        this.$full.classList.add('hideGui')
        IodineGUI.Iodine.play()
      }
    })
  },

  addBios () {
    this.$biosInput.parentNode.classList.remove('active')
    downloadVendorFile(this.$biosInput.value, attachBIOS)
    this.$bios.classList.add('done')
    this.$game.classList.add('active')
    this.$game.allow = true
  },

  addGame () {
    this.$gameInput.parentNode.classList.remove('active')
    downloadVendorFile(this.$gameInput.value, attachROM)
    this.$game.classList.add('done')
    this.$start.classList.add('active')
    this.$start.allow = true
  }
}


documentReady(customGui.init.bind(customGui))
function documentReady(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
