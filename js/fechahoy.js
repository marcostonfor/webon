class Fecha extends HTMLElement {
    constructor() {
        super();
        this.ahora = new Date();
        this.fecha = {
            diaSemanal: this.ahora.getDay(),
            diaMes: this.ahora.getDate(),
            mes: this.ahora.getMonth(),
            anyo: this.ahora.getFullYear()
        };
        this.forma = ``;
        this.salida;
        this.renderFecha();
    }

    cambioDia() { }

    renderFecha() {
        const meses = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ];
        const diaSemana = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado"
        ];
        this.fecha.diaSemanal = diaSemana[this.ahora.getDay()];
        this.fecha.mes = meses[this.ahora.getMonth()];

        this.forma = `<aside class="fecha-tag"><em class="semanal">${this.fecha.diaSemanal}</em> <span class="diactual">${this.fecha.diaMes}</span> <i>de</i> <strong>${this.fecha.mes}</strong> <i>del</i> <span class="any_ara">${this.fecha.anyo}</span></aside>`;

        this.salida = `<h6 class="formatoFecha">${this.forma}</h6>`;
        let estiloDiaSemana = document.createElement("STYLE");
        if (this.fecha.diaSemanal === "Domingo") {
            estiloDiaSemana.textContent = /* css */ `
        em.semanal {
            padding: 0.5vw;
            font-size: 19pt;
            color: hsla(348, 83%, 47%, 0.7);
            text-shadow: 0.1vw 0.1vw 1px hsl(60, 100%, 50%);
            background-color: hsla(0, 100%, 50%, 0.450);
            border-radius: 0.5vw;
        }
        .diactual {
            font-size: 21pt;
            color: hsla(0, 100%, 35%, 0.7);
            background-color: hsla(348, 83%, 47%, 0.450);
            padding: 0.5vw;
            border-radius: 0.4vw;
            text-shadow: 0.1vw 0.1vw 1px hsl(54, 100%, 49%);
        }
                    `;
            document.head.appendChild(estiloDiaSemana);
        } else if (this.fecha.diaSemanal === "Sabado") {
            estiloDiaSemana.textContent = /* css */ `
        em.semanal {
            padding: 0.5vw;
            font-size: 15pt;
            color: hsl(210, 100%, 56%);
            text-shadow: 0.1vw 0.1vw 1px hsl(0, 0%, 0%);
            background-color: hsl(240, 100%, 25%);
            border-radius: 0.5vw;
        }
        .diactual {
            font-size: 18pt;
            color: hsl(219, 79%, 66%);
            background-color: hsl(197, 71%, 73%);
            padding: 0.5vw;
            border-radius: 0.4vw;
            text-shadow: 0.1vw 0.1vw 1px hsl(0, 0%, 0%);
        }
                    `;
            document.head.appendChild(estiloDiaSemana);
        } else {
            estiloDiaSemana.textContent = /* css */ `
        em.semanal {
            padding: 0.5vw;
            font-size: 15pt;
            color: hsl(60, 100%, 50%);
            text-shadow: 0.1vw 0.1vw 1px hsl(0, 0%, 0%);
            // background-color: hsl(45, 100%, 50%);
            border-radius: 0.5vw;
        }
        .diactual {
            font-size: 18pt;
            color: hsl(60, 100%, 50%);
            // background-color: hsl(60, 100%, 40%);
            padding: 0.5vw;
            border-radius: 0.4vw;
            text-shadow: 0.1vw 0.1vw 1px hsl(0, 0%, 0%);
        }
                    `;
            document.head.appendChild(estiloDiaSemana);
        }
        return (this.innerHTML = this.salida);
    }
}

customElements.define("fecha-de-hoy", Fecha);

class Reloj {
	constructor() {
		this.amOpm = "";
		this.ahora = new Date();
		this.marcaHora = {
			hora: this.ahora.getHours(),
			minut: this.ahora.getMinutes(),
			segon: this.ahora.getSeconds()
		};
		this.formato = ``;
		this.soy_12horas();
	}
	anyado00s(formateo) {
		return formateo <= 9 ? "0" + formateo : formateo;
	}
	soy_12horas() {
		this.amOpm = this.marcaHora.hora < 12 ? "am" : "pm";
		let horas = this.marcaHora.hora % 12;
		if (horas === 0) horas = 12;
		return `<sub id="amOpm">${this.amOpm}</sub> ${horas}`;
	}
}

const unReloj = class {
	constructor() {
		setInterval(() => {
			this.zona = new Reloj();
			this.reloj_normal();
		}, 1000);
	}
	reloj_normal() {
		this.zona.formato = `<h5>${this.zona.soy_12horas()}:${
			this.zona.anyado00s(this.zona.marcaHora.minut)
		}:${this.zona.anyado00s(this.zona.marcaHora.segon)}</h5>`;
		const salida = document.getElementById("elReloj");

		return (salida.innerHTML = `${this.zona.formato}`);
	}
};

const verlo = () => {
	let seve = new unReloj();
	seve.reloj_normal();
};

verlo();