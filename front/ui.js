let { ipcRenderer } = require("electron")
let {Hyperdrive } = require("Hyperdrive")
exports.openBox = () =>{
  ipcRenderer.send(
    "fl", {hs: location.hash}
  )
  ipcRenderer.on(location.hash, (v, arg)=>{
    var drive =  new Hyperdrive(v, location.hash)
    location = `index.html#${location.hash}`
  })

}
