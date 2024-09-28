export class Reloj12h extends HTMLElement {
    constructor() {
      super();
      setInterval(() => {
        this.ahora = new Date();
        this.reloj = {
          hora: this.ahora.getHours(),
          minut: this.ahora.getMinutes(),
          segon: this.ahora.getSeconds(),
        };
        this.render();
      }, 1000);
    }
  
    anyado00s(formateo) {
      return formateo <= 9 ? "0" + formateo : formateo;
    }
  
    render() {
      this.innerHTML = `<h5 style="color: aliceblue; text-align: center;"><hr> ${this.anyado00s(
        this.reloj.hora
      )}:${this.anyado00s(
        this.reloj.minut
      )}: <span style="font-size: 7pt;"> ${this.anyado00s(
        this.reloj.segon
      )} </span> <hr></h5>`;
    }
  }
  customElements.define("un-reloj", Reloj12h);
  