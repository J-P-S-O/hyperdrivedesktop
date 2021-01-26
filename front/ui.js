let { dialog } = require("electron")
let {Hyperdrive } = require("Hyperdrive")
exports.openBox = () =>{
  let v = dialog.showOpenDialogSync(
    {
      properties: ["openDirectory"]
    }
  )
  var drive =  new Hyperdrive(v, location.hash)
  location = `index.html#${v}`
}
