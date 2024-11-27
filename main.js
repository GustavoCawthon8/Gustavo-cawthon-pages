import { Menu } from "./location/menu.js"

const config = {
  imageLogo: 0
}

Menu.menu(config);
window.addEventListener("load", ()=>{
  document.getElementById("btn_home").click()
})