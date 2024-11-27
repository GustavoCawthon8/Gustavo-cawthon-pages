class Menu {
  static imageLogo = 0;

  static menu(config) {
    this.imageLogo = config.imageLogo;

    const container_app = document.getElementById("container_app");

    // Adicionando o estilo globalmente
    const estilos = `
      * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
      }
      
      body {
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-family: Arial, Helvetica, sans-serif;
        background: #1E3C72;
      }
      
      hr {
        border: none;
        height: 2px;
        background-color: #ffffff;
        margin: 10px 0;
      }
      
      header {
        background: #386ffc;
      }
      
      #background_header {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
      }
      
      #background_header button {
        margin-right: 10px;
      }
      
      #image_banner {
        width: 300px;
      }
      
      #local_track {
        margin-left: 6px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
      }
      
      #btnMenu {
        padding: 8px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;
        cursor: pointer;
        border-radius: 3px;
      }
      
      .panelClose {
        left: -200px !important;
      }
      
      #panel_navigator {
      position: absolute;
      z-index: 8335;
      top: 0;
      background: rgba(0, 0, 0, 0.75);
      width: 200px;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 1s;
      left: 0;
      }

     #items_btn {
     display: flex;
     flex-direction: column;
     padding: 20px 0; 
     align-items: center;
     }

    #items_btn ul {
    list-style: none;
     padding: 0;
    }

#items_btn li {
  margin-bottom: 10px;
}

.btn {
  text-decoration: none;
  padding: 10px;
  width: 130px;
  border-radius: 10px;
  background: #147BFF;
  color: #ffffff;
  text-transform: lowercase;
  transition: 0.3s;
  cursor: pointer;
  display: block; 
}

.btn:hover {
  background: #205191;
  transform: scale(1.2);
  text-transform: uppercase;
}

#btnX {
  position: absolute;
  right: 0;
  top: 0;
  width: 50px !important;
  margin-right: 10px;
  cursor: pointer;
}`

    const styleElement = document.createElement("style");
    styleElement.textContent = estilos;
    document.head.appendChild(styleElement);

    // Criando elementos do header
    const header = document.createElement("header");
    header.setAttribute("id", "header");

    const background_header = document.createElement("div");
    background_header.setAttribute("id", "background_header");

    const div1 = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("id", "image_banner");

    if (this.imageLogo == 0) {
      img.setAttribute("src", "location/src/image/banner.png");
    } else {
      img.setAttribute("src", "src/image/banner.png");
    }
    div1.appendChild(img);

    const button = document.createElement("button");
    button.setAttribute("id", "btnMenu");
    const i = document.createElement("i");
    i.classList.add("bi", "bi-grid-fill");
    button.appendChild(i);
    button.addEventListener("click", () => {
      panelNavigator.classList.remove("panelClose");
    })

    background_header.appendChild(div1);
    background_header.appendChild(button);

    const hr = document.createElement("hr");

    const div2 = document.createElement("div");
    div2.setAttribute("id", "local_track");
    const h1 = document.createElement("h1");
    h1.setAttribute("id", "title_page");
    h1.innerHTML = "Gustavo Cawthon";
    div2.appendChild(h1);

    // Criando o painel do menu
    const panelNavigator = document.createElement("section");
    panelNavigator.setAttribute("id", "panel_navigator");
    panelNavigator.classList.add("panelClose");

    const btnX = document.createElement("button");
    btnX.setAttribute("id", "btnX");
    btnX.classList.add("btn");
    const iconX = document.createElement("i");
    iconX.classList.add("bi", "bi-x-circle");
    btnX.appendChild(iconX);
    btnX.addEventListener("click", () => {
      panelNavigator.classList.add("panelClose");
    })

    const itemsBtn = document.createElement("div");
    itemsBtn.setAttribute("id", "items_btn");

    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    const a1 = document.createElement("a");
    a1.setAttribute("id", "btn_home");
    a1.setAttribute("class", "btn");
    a1.setAttribute("href", "home.html");
    a1.textContent = "Home";
    li1.appendChild(a1);

    const li2 = document.createElement("li");
    const a2 = document.createElement("a");
    a2.setAttribute("id", "btn_rede");
    a2.setAttribute("class", "btn");
    a2.setAttribute("href", "network.html");
    a2.textContent = "Conexão";
    li2.appendChild(a2);

    const li3 = document.createElement("li");
    const a3 = document.createElement("a");
    a3.setAttribute("id", "btn_pl");
    a3.setAttribute("class", "btn");
    a3.setAttribute("href", "playlist.html");
    a3.textContent = "Playlist";
    li3.appendChild(a3);

    const li4 = document.createElement("li");
    const a4 = document.createElement("a");
    a4.setAttribute("id", "btn_loja");
    a4.setAttribute("class", "btn");
    a4.setAttribute("href", "shopping.html");
    a4.textContent = "Loja";
    li4.appendChild(a4);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    itemsBtn.appendChild(ul);

    panelNavigator.appendChild(btnX);
    panelNavigator.appendChild(itemsBtn);

    // Adicionando o painel ao container
    container_app.appendChild(panelNavigator);

    header.appendChild(background_header);
    header.appendChild(hr);
    header.appendChild(div2);

    container_app.prepend(header);
  }
}

export { Menu };