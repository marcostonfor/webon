export function canvas() {
    class CanvasClock extends HTMLElement {
        constructor() {
            super();
            this.renderClock();
        }

        clock() {
            // Crear un canvas
            const canvasTag = document.createElement('CANVAS');
            canvasTag.setAttribute('id', 'reloj');
            canvasTag.setAttribute('style', 'background-color: transparent; margin: 6vh auto; height: 90px; width: 170px;');

            // Agregar el canvas al DOM
            this.appendChild(canvasTag);

            // Acceder al canvas recién creado
            const canvas = document.getElementById("reloj");
            const ctx = canvas.getContext("2d");

            // Ajustar el radio
            let radius = canvas.height / 2;
            ctx.translate(radius, radius);
            radius = radius * 0.90;

            drawClock();

            function drawClock() {
                ctx.beginPath(); // Empezar un nuevo camino para dibujar el reloj
                ctx.arc(0, 0, radius, 0, 2 * Math.PI); // Dibujar el círculo del reloj
                ctx.fillStyle = "transparent"; // Color de relleno del círculo
                ctx.fill(); // Rellenar el círculo
            }

            function drawClock() {
                drawFace(ctx, radius);
              }
              
              function drawFace(ctx, radius) {
                const grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
                grad.addColorStop(0, 'ghostwhite');
                grad.addColorStop(0.5, 'antiquewhite');
                grad.addColorStop(1, 'transparent');
              
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, 2 * Math.PI);
                ctx.fillStyle = 'slateblue';
                ctx.fill();
              
                ctx.strokeStyle = grad;
                ctx.lineWidth = radius*0.1;
                ctx.stroke();
              
                ctx.beginPath();
                ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
                ctx.fillStyle = '#dedded';
                ctx.fill();
              }

              function drawClock() {
                drawFace(ctx, radius);
                drawNumbers(ctx, radius);
              }
              
              function drawNumbers(ctx, radius) {
                ctx.font = radius * 0.21 + "px arial";
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";
                for(let num = 1; num < 13; num++){
                  let ang = num * Math.PI / 6;
                  ctx.rotate(ang);
                  ctx.translate(0, -radius * 0.85);
                  ctx.rotate(-ang);
                  ctx.fillText(num.toString(), 0, 0);
                  ctx.rotate(ang);
                  ctx.translate(0, radius * 0.85);
                  ctx.rotate(-ang);
                }
              }

              function drawClock() {
                drawFace(ctx, radius);
                drawNumbers(ctx, radius);
                drawTime(ctx, radius);
              }
              
              function drawTime(ctx, radius) {
                const now = new Date();
                let hour = now.getHours();
                let minute = now.getMinutes();
                let second = now.getSeconds();
                //hour
                hour = hour%12;
                hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
                drawHand(ctx, hour, radius*0.5, radius*0.07);
                //minute
                minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
                drawHand(ctx, minute, radius*0.8, radius*0.07);
                // second
                second = (second*Math.PI/30);
                drawHand(ctx, second, radius*0.9, radius*0.02);
              }
              
              function drawHand(ctx, pos, length, width) {
                ctx.beginPath();
                ctx.lineWidth = width;
                ctx.lineCap = "round";
                ctx.moveTo(0,0);
                ctx.rotate(pos);
                ctx.lineTo(0, -length);
                ctx.stroke();
                ctx.rotate(-pos);
              }

              setInterval(drawClock, 1000);
        }

        renderClock() {
            this.clock();
        }
    }

    customElements.define('reloj-canvas', CanvasClock);
}
