//frontend scripts
const Hyperdrive = require("Hyperdrive")
let { openbox } = require("./ui")
let { remote } = require("electron")
let {BrowserWindow} = remote
onload = () =>{
  let bd = document.querySelector("body")
  if (location.hash.startsWith("hyper://")){
    let dv = document.createElement("div")
    dv.id = "newdrive"
    let txt = document.createElement("h1")
    txt.innerHTML = "Choose a folder for your new drive"
    let bt = document.createElement("button");
    bt.id = "newdrivebutton"
     bt.innerHTML = "Choose a folder"
     bt.onclick = openBox
    //process hash
    var drive =  new Hyperdrive(dest, location.hash)
  }else if (location.hash !== ""){
    var drive = new Hyperdrive(location.hash)
  }else{
// default view
  }
}
