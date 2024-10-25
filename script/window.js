class Window {
    static header_content = null;
    static main_content = null;
    static footer_content = null;
    static color = "#1e1e1e";
    static destino = document.body;
    
    static config() {
    
  
    }
    static exibir() {
     const area_window = document.createElement("div");
     const style_area = `
     background-color: rgba(0,0,0,0.7);
     position: absolute;
     height: 100%;
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     `;
     area_window.setAttribute("class","area_window");
     area_window.setAttribute("id","area_window");
     area_window.setAttribute("style", style_area);
     this.destino.prepend(area_window);
     
  
     const box_window = document.createElement("div");
     const style_box = `
     background-color: #fff;
     color: #000;
     height: 300px;
     width: 350px;
     border-radius: 8px;
     display: grid;
     grid-tamplate-rows: 70px 1fr 70px;
  
     `;
     box_window.setAttribute("classe", "box_window");
     box_window.setAttribute("id","box_window");
     box_window.setAttribute("style",style_box);
     area_window.appendChild(box_window);
  
     const header = document.createElement("div");
     const style_header = `
     background-color: ${this.color} ;
     color: #fff;
     width: 100%;
     padding: 6px;
     display: flex;
     aling-items: center;
     justify-content: space-between;
     `;
     header.setAttribute("class","header");
     header.setAttribute("id","header");
     header.setAttribute("style", style_header);
     header.innerHTML = this.header_content;
     box_window.appendChild(header);
  
     const main = document.createElement("div");
     const style_main = `
     background-color: #fff;
     color: #000;
     width: 100%;
     heigt: 100%;
     padding: 6px;
     `;
     main.setAttribute("class","main");
     main.setAttribute("id","main");
     main.setAttribute("style", style_main);
     main.innerHTML = this.main_content;
     box_window.appendChild(main);
     
     const footer = document.createElement("div");
     const style_footer = `
     background-color: #fff;
     color: #000;
     padding: 6px;
     width: 100%;
     display: flex;
     justify-content: center;
     `;
     footer.setAttribute("class","footer");
     footer.setAttribute("id","footer");
     footer.setAttribute("style", style_footer);
     box_window.appendChild(footer);
  
     const botao_footer = document.createElement("button");
     const style_botao = `
     background-color: ${this.color};
     borde: none;
     borde-radius: 8px;
     padding: 0px 8px;
     color: #fff;
     width: 100%;
     margin 50px;
     display flex;
     align-items: center;
     justify-content: space-between;
     text-aling: center;
     
     `;
     botao_footer.setAttribute("class",botao_footer);
     botao_footer.setAttribute("id",botao_footer);
     botao_footer.setAttribute("style",style_botao);
     botao_footer.innerHTML = "OK";
     footer.appendChild(botao_footer);
    }
    
    static ocutar() {
  
    }
  }
  
  export default Window;