# [![icono python](./images/iconPython.jpg)local](fundamentosInternet/README.md) <br> **HTTP Introducción**

## __http__ o  uno de los puntos básicos de Internet.

Según sus siglas en inglés, **`HyperText Transfer
Protocol`** __(Protocolo de transferencia de hipertexto)__ es
el método más común de intercambio de información
de la **World Wide Web**.

- Es un protocolo que define
cómo se deben formatear y transmitir los datos a
través de Internet. 
-  Se utiliza para cargar páginas web
con enlaces de hipertexto.
- Este protocolo de
transferencia de hipertexto fue diseñado por Tim
Berners-Lee en 1989.

## ¿Qué hay en una solicitud **HTTP**?

Una solicitud HTTP es la forma en que las plataformas de
comunicación de Internet, como los navegadores web,
piden la información que necesitan para cargar un sitio web.

### **Una solicitud HTTP típica contiene:**

- Tipo de versión de __HTTP__
- Una **URL**
- Un método __HTTP__
- Encabezados de solicitud __HTTP__
- Cuerpo __HTTP__ opcional

![modelo solicítud __HTTP__](./img/solicitudHTTP.png)
***
#### ¿Qué es un método HTTP?

`Un método` __HTTP__, a veces denominado `verbo HTTP`,
indica la acción que la solicitud __HTTP__ espera del
servidor consultado.

### 1. **GET**
   - **Descripción**: Este método se usa para solicitar datos de un servidor. No modifica nada, solo recupera información.
   - **Ejemplo**: Un cliente pide la lista de productos.
   - **Código básico**:
     ```http
     GET /productos HTTP/1.1
     Host: www.ejemplo.com
     ```

### 2. **POST**
   - **Descripción**: Se utiliza para enviar datos al servidor, generalmente para crear o modificar recursos. Los datos suelen enviarse en el cuerpo de la solicitud.
   - **Ejemplo**: Enviar datos de un nuevo usuario para que se cree en la base de datos.
   - **Código básico**:
     ```http
     POST /usuarios HTTP/1.1
     Host: www.ejemplo.com
     Content-Type: application/json

     {
       "nombre": "Juan",
       "email": "juan@ejemplo.com"
     }
     ```

### 3. **PUT**
   - **Descripción**: Sirve para reemplazar o actualizar completamente un recurso en el servidor. Es idempotente, lo que significa que la misma solicitud repetida no cambia el resultado.
   - **Ejemplo**: Actualizar la información de un usuario.
   - **Código básico**:
     ```http
     PUT /usuarios/123 HTTP/1.1
     Host: www.ejemplo.com
     Content-Type: application/json

     {
       "nombre": "Juan Actualizado",
       "email": "juan_actualizado@ejemplo.com"
     }
     ```

### 4. **PATCH**
   - **Descripción**: Similar a `PUT`, pero en lugar de reemplazar completamente un recurso, modifica solo partes específicas del mismo.
   - **Ejemplo**: Actualizar solo el email de un usuario.
   - **Código básico**:
     ```http
     PATCH /usuarios/123 HTTP/1.1
     Host: www.ejemplo.com
     Content-Type: application/json

     {
       "email": "nuevo_email@ejemplo.com"
     }
     ```

### 5. **DELETE**
   - **Descripción**: Elimina un recurso del servidor.
   - **Ejemplo**: Borrar un usuario de la base de datos.
   - **Código básico**:
     ```http
     DELETE /usuarios/123 HTTP/1.1
     Host: www.ejemplo.com
     ```

### 6. **HEAD**
   - **Descripción**: Es igual que `GET`, pero solo solicita los encabezados, sin el cuerpo del contenido. Se usa para obtener metadatos como el tamaño o la fecha de modificación.
   - **Ejemplo**: Verificar si un recurso ha cambiado antes de descargarlo.
   - **Código básico**:
     ```http
     HEAD /productos HTTP/1.1
     Host: www.ejemplo.com
     ```

### 7. **OPTIONS**
   - **Descripción**: Solicita información sobre las opciones de comunicación disponibles para el recurso. Devuelve los métodos permitidos para ese recurso.
   - **Ejemplo**: Saber qué métodos son válidos para un recurso.
   - **Código básico**:
     ```http
     OPTIONS /usuarios HTTP/1.1
     Host: www.ejemplo.com
     ```

### 8. **CONNECT**
   - **Descripción**: Establece un túnel hacia el servidor, generalmente se usa para solicitudes HTTPS a través de un proxy.
   - **Ejemplo**: Crear una conexión segura (SSL/TLS) con un servidor.
   - **Código básico**:
     ```http
     CONNECT www.ejemplo.com:443 HTTP/1.1
     Host: www.ejemplo.com
     ```

### 9. **TRACE**
   - **Descripción**: Realiza un bucle de retorno que permite al cliente ver qué cambios (si los hay) están siendo hechos a su solicitud por intermediarios (proxies, por ejemplo).
   - **Ejemplo**: Ver cómo se modifica una solicitud a través de una cadena de proxies.
   - **Código básico**:
     ```http
     TRACE /usuarios/123 HTTP/1.1
     Host: www.ejemplo.com
     ```

### 10. **LINK** *(Poco común)*
   - **Descripción**: Establece una relación entre dos recursos. No es muy utilizado y no está implementado en la mayoría de los servidores.
   - **Ejemplo**: Relacionar un documento con otro.
   - **Código básico**:
     ```http
     LINK /documentos/1 HTTP/1.1
     Host: www.ejemplo.com
     Link: </documentos/2>; rel="related"
     ```

### 11. **UNLINK** *(Poco común)*
   - **Descripción**: Elimina una relación entre dos recursos previamente establecida con el método `LINK`.
   - **Ejemplo**: Desvincular dos documentos.
   - **Código básico**:
     ```http
     UNLINK /documentos/1 HTTP/1.1
     Host: www.ejemplo.com
     Link: </documentos/2>; rel="related"
     ```

---

Estos son los métodos HTTP más importantes, aunque algunos son poco usados en la práctica o han sido propuestos en versiones más recientes del protocolo. Los más comunes en aplicaciones diarias son `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD` y `OPTIONS`.

#### ¿Qué son los encabezados de solicitud __HTTP__?

##### `Los encabezados de HTTP contienen información de texto almacenada en pares clave-valor, y se incluyen en cada solicitud HTTP`

Estos encabezados comunican información básica,
como el navegador que utiliza el cliente y los datos
que se solicitan.

![Encabezado __HTTP__](./img/encabezadohttp.png)

#### ¿Qué hay en el cuerpo de una solicitud __HTTP__?

El cuerpo de una solicitud HTTP contiene
toda la información que se envía al servidor web,
como un nombre de usuario y una contraseña, o
cualquier otro dato introducido en un formulario.

#### ¿Qué hay en una respuesta __HTTP__?

Una respuesta __HTTP__ es lo que los clientes web
(normalmente los navegadores) reciben de un
servidor de Internet en respuesta a una solicitud
__HTTP__.

##### Una respuesta HTTP típica contiene:

1. [un código de estado HTTP](#qué-es-un-código-de-estado-http)

2. `encabezados de respuesta` __HTTP__
3. cuerpo de __HTTP__ opcional


## ¿Qué es un código de estado HTTP?

<!-- Los códigos de estado HTTP  -->
Son códigos de 3 dígitos que se utilizan con mayor frecuencia para indicar si una solicitud HTTP se ha completado con éxito.
<!-- 
##### Los códigos de estado se dividen en los siguientes 5 bloques: -->

<!-- 1. 1xx Informativo
2. 2xx Éxito
3. 3xx Redirección
4. Errores de cliente 4xx
5. 5xx Error del servidor

> Las "xx" hace referencia a diferentes números entre 00 y 99. -->

***

 Los **códigos de estado HTTP** son respuestas estándar proporcionadas por los servidores web al cliente (por ejemplo, tu navegador) para indicar el resultado de una solicitud. Cada código consta de tres dígitos, donde el primer dígito indica la categoría del estado, y los dos dígitos siguientes especifican detalles más precisos.

### Categorías de códigos de estado HTTP:

1. **1xx - Informativo**: Son respuestas provisionales que indican que el servidor recibió la solicitud y está siendo procesada.
   - Ejemplo: `100 Continue` (el servidor recibió la solicitud y está esperando los datos completos del cliente).

2. **2xx - Éxito**: Indican que la solicitud fue recibida, entendida y aceptada correctamente.
   - Ejemplo: `200 OK` (la solicitud se procesó con éxito).

3. **3xx - Redirección**: Significan que es necesario realizar más acciones para completar la solicitud, generalmente una redirección a otra URL.
   - Ejemplo: `301 Moved Permanently` (el recurso solicitado ha sido movido de forma permanente a una nueva URL).

4. **4xx - Error del cliente**: Indican que el problema está en el lado del cliente, como una solicitud malformada o un recurso no encontrado.
   - Ejemplo: `404 Not Found` (el servidor no pudo encontrar el recurso solicitado).

5. **5xx - Error del servidor**: Indican que hubo un fallo en el servidor mientras intentaba procesar la solicitud.
   - Ejemplo: `500 Internal Server Error` (ocurrió un error inesperado en el servidor).

### Ejemplo sencillo con una interacción cliente-servidor:

Imaginemos que estás visitando una página web (como `www.example.com`):

1. **Solicitud del cliente**: 
   Tu navegador envía una solicitud al servidor para obtener la página.

   ```http
   GET /index.html HTTP/1.1
   Host: www.example.com
   ```

2. **Respuesta del servidor**:

   - Si todo sale bien, el servidor responde con:
     ```http
     HTTP/1.1 200 OK
     Content-Type: text/html
     
     <html>
       <body>
         <h1>Bienvenido a Example.com</h1>
       </body>
     </html>
     ```
     El código `200 OK` indica que la solicitud fue exitosa, y se te devuelve la página web.

   - Si la página no existe, el servidor responde con:
     ```http
     HTTP/1.1 404 Not Found
     Content-Type: text/html
     
     <html>
       <body>
         <h1>Página no encontrada</h1>
       </body>
     </html>
     ```
     Aquí el código `404 Not Found` te dice que el recurso solicitado (por ejemplo, `/index.html`) no existe en el servidor.

   - Si el servidor tiene un problema interno, como una falla en su base de datos, podría responder con:
     ```http
     HTTP/1.1 500 Internal Server Error
     Content-Type: text/html
     
     <html>
       <body>
         <h1>Error interno del servidor</h1>
       </body>
     </html>
     ```
     Este código `500 Internal Server Error` indica que el servidor no pudo completar la solicitud debido a un error en su sistema.

### Resumen:
- **1xx**: Informativo (el servidor está procesando la solicitud).
- **2xx**: Éxito (la solicitud fue exitosa).
- **3xx**: Redirección (el recurso fue movido o requiere otra acción).
- **4xx**: Error del cliente (hubo un problema con la solicitud).
- **5xx**: Error del servidor (algo falló en el lado del servidor).

Estos códigos ayudan tanto a los usuarios como a los desarrolladores a entender lo que está pasando con sus solicitudes HTTP. Las "xx" hace referencia a diferentes números entre 00 y 99.

<h2 class="tooltip">
        ¿Se pueden lanzar ataques DDoS a
        través de HTTP? <strong class="tooltiptext">
            **DDoS** significa **Distributed Denial of Service** (Ataque Distribuido de Denegación de Servicio).
            <span>
                <details>
                    <summary>leer más...,</summary>
                    ¿Qué es un ataque DDoS?
                    En un ataque DDoS, el objetivo principal es interrumpir el funcionamiento normal de un servicio en
                    línea (por ejemplo, una página web, un servidor de juegos o una red). Esto se logra inundando el
                    objetivo con un volumen masivo de solicitudes o datos, lo que consume sus recursos (como ancho de
                    banda, CPU o memoria), hasta el punto en que no puede manejar más solicitudes legítimas y colapsa.
                    Características y especificaciones de un DDoS:
                    Ataque distribuido: Se caracteriza porque el ataque no proviene de una sola fuente, sino de muchas
                    computadoras o dispositivos distribuidos geográficamente. Esto hace que sea más difícil de mitigar o
                    detener, ya que las solicitudes maliciosas provienen de múltiples puntos.
                    Uso de una botnet: Muchas veces, los atacantes utilizan una red de dispositivos infectados
                    (conocidos como bots), que pueden ser computadoras personales, servidores o dispositivos IoT
                    (Internet de las Cosas), que han sido comprometidos con malware para participar en el ataque sin que
                    sus propietarios lo sepan.
                    Objetivo del ataque:
                    Saturar el ancho de banda de la red del objetivo.
                    Explotar las vulnerabilidades de los servicios o aplicaciones del servidor.
                    Sobrecargar los recursos del sistema (procesador, memoria) para causar una denegación de servicio.
                    Tipos de ataques DDoS:
                    Ataques de volumen: Envían grandes cantidades de tráfico para consumir el ancho de banda del
                    objetivo. Un ejemplo es el ataque de amplificación DNS, donde el atacante utiliza servidores DNS
                    para amplificar el tráfico enviado.
                    Ataques de protocolo: Se aprovechan de las debilidades en los protocolos de red, como TCP/IP. Un
                    ejemplo es el ataque SYN flood, que explota el proceso de "handshake" en TCP.
                    Ataques a la capa de aplicación (Application Layer Attacks): Estos ataques se centran en la capa de
                    aplicación (capa 7 del modelo OSI) y envían solicitudes aparentemente legítimas a servicios
                    específicos como HTTP o HTTPS, lo que puede agotar los recursos del servidor web.
                    ¿Qué hace un ataque DDoS?
                    Interrupción del servicio: Un ataque DDoS tiene como objetivo principal hacer que un servicio en
                    línea, como un sitio web o una API, quede fuera de línea o sea inusualmente lento.
                    Pérdidas financieras: Si el servicio atacado es una tienda en línea o un servicio en la nube, la
                    caída del sistema puede llevar a pérdidas de ingresos.
                    Dificultad de mitigación: Debido a la naturaleza distribuida del ataque, es difícil filtrar el
                    tráfico malicioso, ya que proviene de muchas ubicaciones.
                    ¿Para qué se usa un DDoS?
                    Sabotaje y vandalismo: Los atacantes pueden usar DDoS para sabotear un servicio o empresa, ya sea
                    por venganza, competencia desleal o simplemente por causar daño.
                    Extorsión (DDoS for Ransom): Los atacantes pueden amenazar con realizar un ataque DDoS si la víctima
                    no paga un rescate.
                    Distracción: Un ataque DDoS a menudo se usa como una táctica de distracción mientras se lleva a cabo
                    otro tipo de ataque más serio, como una intrusión o robo de datos.
                    Protección contra DDoS:
                    Para mitigar los efectos de un DDoS, las organizaciones suelen implementar soluciones especializadas
                    como:
                    Balanceadores de carga y CDN (Red de Distribución de Contenidos).
                    Firewalls específicos para DDoS.
                    Servicios de mitigación de DDoS en la nube, que identifican y bloquean el tráfico malicioso antes de
                    que llegue a la infraestructura del objetivo.
                    En resumen, un ataque DDoS es una táctica maliciosa usada para sobrecargar y hacer inaccesible un
                    sistema o servicio en línea, utilizando una red distribuida de dispositivos comprometidos para
                    enviar tráfico masivo o solicitudes maliciosas.
                </details>
            </span>
        </strong>
</h2>

#####  HTTP es un protocolo "sin estado", lo que significa que cada comando se ejecuta independientemente de cualquier otro comando.

En el contexto de ataques DoS o DDoS, las solicitudes
HTTP en grandes cantidades pueden utilizarse para
montar un ataque contra un dispositivo objetivo, y se
consideran parte de los ataques a la capa de
aplicación o a la capa 7.

## ¿Cuál es la diferencia entre http y https?

HTTP pronto se convirtió en el protocolo mayoritario
en la red. Sin embargo, conforme avanzó el tiempo, se
demostró que resultaba demasiado vulnerable para
determinados sitios web donde los internautas
compartían información sensible. Estamos hablando
por ejemplo de webs de tiendas online donde los
usuarios introducen la información de su tarjeta de
crédito.
Por eso surgió la necesidad de crear un protocolo más
seguro. De ese modo surgió el HTTPS, que cifra la
información que circula entre la web y el usuario, para
hacerla indescifrable a ojos de los hackers. Todas las
webs de venta online adoptaron pronto ese protocolo

### ¿Por qué necesito usar el protocolo HTTPS?

 Datos como el teléfono o el correo
electrónico pueden ser considerados sensibles, por lo
que es importante usar el protocolo https para
proteger esa información.


## ¿Qué son IP y TCP?

El protocolo de Internet (IP) es el sistema de
direcciones de Internet y tiene la función principal de
entregar paquetes de información desde un
dispositivo de origen a un dispositivo de destino. Es la
forma principal en la que se realizan las conexiones de
red y establece la base de Internet, pero no gestiona
el orden de los paquetes ni la verificación de errores.
Esta funcionalidad requiere otro protocolo,
normalmente TCP.

- IP es un protocolo sin conexión, lo que significa que
cada unidad de datos se aborda individualmente y
se enruta desde el dispositivo de origen al
dispositivo de destino, que no envía una
confirmación de vuelta al origen.

-  Ahí es donde entran
en juego protocolos como el TCP. Este último se
utiliza junto con el protocolo de Internet para
mantener una conexión entre el remitente y el destino
y para garantizar el orden del paquete.

