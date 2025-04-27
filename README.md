
### Descripción

El proyecto de rediseño de la página web de Metrix se desarrolló con **Vue 3**, utilizando script setup y componentes reutilizables. Se aplicó **Atomic Design** para organizar el contenido en secciones, y se utilizó Axios para gestionar las solicitudes HTTP. Los iconos fueron implementados con LucideIcons y el diseño responsivo se creó con Tailwind CSS 4.0, asegurando un sitio escalable, modular y optimizado.
## Instala dependencias

```sh
npm install
```

### Ejecuta el proyecto

```sh
npm run dev
```

### Compliacion

```sh
npm run build
```
### Variables de entorno

```sh
VITE_API_URL=https://retoolapi.dev/QXIiZQ/contact
```
### Preguntas de razonamiento 

- **Respuesta pregunta 1:** La estructura del proyecto Vue 3 está organizada de manera modular y escalable utilizando Atomic Design, con carpetas bien definidas para vistas, secciones y componentes. Cada vista tiene su propia carpeta con las secciones correspondientes, lo que facilita la organización y el mantenimiento, y permite agregar nuevas vistas sin comprometer la estructura. Se utiliza Composition API y script setup para un código más limpio y flexible. El diseño se gestiona con Tailwind CSS, definiendo colores y la fuente Poppins en la configuración. Además, se implementaron carpetas para servicios (API), rutas, layouts, iconos personalizados y assets para las imágenes, lo que asegura un proyecto fácil de mantener y expandir.

- **Respuesta pregunta 2:** Los principales cuellos de botella en el frontend actual serían el bloqueo total del formulario mientras se espera la respuesta del servidor (isLoading global) y el manejo básico de errores mediante mensajes de estado simples (successMessage, errorMessage). Para mejorar la escalabilidad y experiencia de usuario, implementaría notificaciones tipo "toast".

- **Respuesta pregunta 3:** Por falta de tiempo no implementé un sistema de notificaciones, ni construí un sistema de diseño. Tampoco trabajé a fondo el responsive ni realicé mockups para pantallas móviles. Pensaba crear un composable para organizar mejor las validaciones, pero prioricé terminar el flujo funcional del formulario primero.

- **Respuesta pregunta 4:** Para simular el envío de datos utilicé axios, enviando el formulario al endpoint de prueba configurado en las variables de entorno. Implementé un try/catch para manejar tanto los casos de éxito como los de error: si la solicitud se completaba correctamente, mostraba un mensaje de éxito en pantalla y limpiaba el formulario; en caso de error, mostraba una alerta de error. También controlé un estado de carga (isLoading) para deshabilitar el botón mientras se enviaban los datos y evitar envíos múltiples. No alcancé a simular diferentes respuestas del backend de forma manual (por ejemplo, forzando errores específicos), ya que prioricé asegurar el flujo básico de validación y envío.


### **Análisis Previo de Metrix Web para la Creación de la Nueva Página**

Antes de diseñar la nueva página web de Metrix, realicé un análisis exhaustivo basado en la página web anterior de la compañía. Este análisis fue fundamental para asegurar que la nueva web reflejara de manera precisa los valores, el mensaje y la personalidad de Metrix, así como para definir el propósito y la audiencia a la que debía dirigirse.

**Paso 1: ¿Cuál es el mensaje que quiere compartir Metrix Web?**

A través de su página web, Metrix busca transmitir un mensaje de **seguridad** a sus clientes. La empresa se presenta como una opción confiable, ofreciendo **servicios de desarrollo innovadores** y **escalables a largo plazo**, lo que genera a sus clientes una sensación de **crecimiento seguro**.

**¿A quién va dirigida la página web?**

La página está dirigida a empresas que buscan **mejorar sus procesos internos** mediante la adopción de **servicios seguros** y eficientes. El objetivo es atraer a organizaciones que necesiten soluciones tecnológicas confiables para optimizar su operatividad.

**¿Cuáles son los valores y la personalidad que tiene Metrix?**

Metrix se caracteriza por los siguientes valores:

- **Innovación**
- **Trabajo en equipo**
- **Innovación sin límites**
- **Creatividad**
- **Estrategias disruptivas**
- **Compromiso con la calidad**

Estos valores son fundamentales para la creación de la nueva página, ya que reflejan el enfoque progresista y colaborativo de la empresa.

**¿Cuál es el propósito de la página web?**

El propósito principal de la página es **vender los servicios** que Metrix ofrece, además de mostrar los **aplicativos ya desarrollados**. La web debe servir como una plataforma para destacar la capacidad de la empresa en crear soluciones personalizadas y efectivas, mientras refuerza su imagen de seguridad y crecimiento.

Este análisis me permitió comprender con claridad cómo estructurar y diseñar la nueva página web, asegurando que cada elemento estuviera alineado con la visión y los objetivos de Metrix.

