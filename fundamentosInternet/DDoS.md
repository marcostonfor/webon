# **DDoS** significa **Distributed Denial of Service** (Ataque Distribuido de Denegación de Servicio).

## Es un tipo de ataque cibernético en el que múltiples sistemas comprometidos (generalmente, una red de computadoras o dispositivos infectados conocidos como una **botnet**) envían una gran cantidad de tráfico a un servidor, servicio o red objetivo con el fin de sobrecargarlo y hacerlo inaccesible para usuarios legítimos.

### ¿Qué es un ataque DDoS?
En un ataque DDoS, el objetivo principal es interrumpir el funcionamiento normal de un servicio en línea (por ejemplo, una página web, un servidor de juegos o una red). Esto se logra inundando el objetivo con un volumen masivo de solicitudes o datos, lo que consume sus recursos (como ancho de banda, CPU o memoria), hasta el punto en que no puede manejar más solicitudes legítimas y colapsa.

### Características y especificaciones de un DDoS:
1. **Ataque distribuido**: Se caracteriza porque el ataque no proviene de una sola fuente, sino de muchas computadoras o dispositivos distribuidos geográficamente. Esto hace que sea más difícil de mitigar o detener, ya que las solicitudes maliciosas provienen de múltiples puntos.

2. **Uso de una botnet**: Muchas veces, los atacantes utilizan una red de dispositivos infectados (conocidos como **bots**), que pueden ser computadoras personales, servidores o dispositivos IoT (Internet de las Cosas), que han sido comprometidos con malware para participar en el ataque sin que sus propietarios lo sepan.

3. **Objetivo del ataque**: 
   - Saturar el ancho de banda de la red del objetivo.
   - Explotar las vulnerabilidades de los servicios o aplicaciones del servidor.
   - Sobrecargar los recursos del sistema (procesador, memoria) para causar una denegación de servicio.

4. **Tipos de ataques DDoS**:
   - **Ataques de volumen**: Envían grandes cantidades de tráfico para consumir el ancho de banda del objetivo. Un ejemplo es el ataque de amplificación DNS, donde el atacante utiliza servidores DNS para amplificar el tráfico enviado.
   - **Ataques de protocolo**: Se aprovechan de las debilidades en los protocolos de red, como TCP/IP. Un ejemplo es el ataque **SYN flood**, que explota el proceso de "handshake" en TCP.
   - **Ataques a la capa de aplicación (Application Layer Attacks)**: Estos ataques se centran en la capa de aplicación (capa 7 del modelo OSI) y envían solicitudes aparentemente legítimas a servicios específicos como HTTP o HTTPS, lo que puede agotar los recursos del servidor web.

### ¿Qué hace un ataque DDoS?
- **Interrupción del servicio**: Un ataque DDoS tiene como objetivo principal hacer que un servicio en línea, como un sitio web o una API, quede fuera de línea o sea inusualmente lento.
- **Pérdidas financieras**: Si el servicio atacado es una tienda en línea o un servicio en la nube, la caída del sistema puede llevar a pérdidas de ingresos.
- **Dificultad de mitigación**: Debido a la naturaleza distribuida del ataque, es difícil filtrar el tráfico malicioso, ya que proviene de muchas ubicaciones.

### ¿Para qué se usa un DDoS?
- **Sabotaje y vandalismo**: Los atacantes pueden usar DDoS para sabotear un servicio o empresa, ya sea por venganza, competencia desleal o simplemente por causar daño.
- **Extorsión (DDoS for Ransom)**: Los atacantes pueden amenazar con realizar un ataque DDoS si la víctima no paga un rescate.
- **Distracción**: Un ataque DDoS a menudo se usa como una táctica de distracción mientras se lleva a cabo otro tipo de ataque más serio, como una intrusión o robo de datos.

### Protección contra DDoS:
Para mitigar los efectos de un DDoS, las organizaciones suelen implementar soluciones especializadas como:
- **Balanceadores de carga y CDN (Red de Distribución de Contenidos)**.
- **Firewalls específicos para DDoS**.
- **Servicios de mitigación de DDoS en la nube**, que identifican y bloquean el tráfico malicioso antes de que llegue a la infraestructura del objetivo.

En resumen, un ataque DDoS es una táctica maliciosa usada para sobrecargar y hacer inaccesible un sistema o servicio en línea, utilizando una red distribuida de dispositivos comprometidos para enviar tráfico masivo o solicitudes maliciosas.