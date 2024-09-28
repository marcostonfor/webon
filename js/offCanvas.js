import { reglas } from './reglas.js';
import { Reloj12h } from './hora.js'
export function Menu_offCanvas() {
    class MenuNavegacion extends HTMLElement {
        constructor() {
            super();
            window.openNav = this.openNav.bind(this);
            window.closeNav = this.closeNav.bind(this);            
             this.estils = reglas();
        }

        openNav() {
            const sidenav = document.getElementById("mySidenav");
            if (sidenav) {
              sidenav.style.width = "250px";
             // document.getElementById("main").style.marginLeft = "250px";
              document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            } else {
              console.error("Elemento 'mySidenav' no encontrado");
            }
          }

          closeNav() {
            const sidenav = document.getElementById("mySidenav");
            if (sidenav) {
              sidenav.style.width = "0";
             // document.getElementById("main").style.marginLeft = "0";
              document.body.style.backgroundColor = "white";
            } else {
              console.error("Elemento 'mySidenav' no encontrado");
            }
          }

          offCanvas() {
            this.innerHTML = /* html */ `
              ${this.estils};
              <div id="mySidenav" class="sidenav"> 
              
              <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
              <a href="#">HOME</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
              <p style="position: absolute; bottom: 0; left: 5vw; text-align: center;">
              <un-reloj style="text-align: center; width: fit-content;"></un-reloj>
              </p>
              </div>
          
             
              <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
            `;
             // Agregar eventos de clic a los elementos dinámicamente
             this.querySelector('.closebtn').addEventListener('click', () => this.closeNav());
             this.querySelector('span').addEventListener('click', () => this.openNav());
          }
    
        connectedCallback(){ 
             this.offCanvas();  
           }
    }    
customElements.define('menu-offcanvas', MenuNavegacion);
// document.body.appendChild(document.createElement('menu-offcanvas'));
}