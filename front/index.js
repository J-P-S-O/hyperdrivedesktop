//frontend scripts
const Hyperdrive = require("Hyperdrive")
let { openbox } = require("./front/ui")
let { remote } = require("electron")
let {dialog} = remote
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
    dv.appendChild(txt)
    dv.appendChild(bt)
    bd.appendChild(dv)
  }else if (location.hash !== ""){
    var drive = new Hyperdrive(location.hash.split("&")[0])
  if (location.hash.split("&")[1]){
    drive.readdir(location.hash.split("&")[1])

  }
  }else{

// default view
  }
}
