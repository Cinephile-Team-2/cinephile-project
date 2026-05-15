# Cinephile Team2 RAR

Se adjunta enlace a las indicaciones seguidas para la realizacion de este proyecto en notion.

https://factoriaf5.notion.site/Cinephile-35de084deeb980fc970ecd26a31c4d81

## Objetivos

🎧 Cinephile, se ha posicionado en el mercado como la competencia directa de Netflix. Con una calidad de video extraordinaria y la gran variedad de películas que ofrece está ganando adeptos a pasos agigantados. No obstante, quieren acelerar el proceso de subscripción a su plataforma con una nueva campaña de marketing digital.
 
 **Cinephile Team2 RAR** es una pagina web que hemos realizado después de que nos hayan contactado por nuestra reputación como maquetadoras web, y nos han pedido que lleven a cabo el desarrollo de una landing page para buscar nuevos suscriptores. 
 
 Formamos parte de un equipo interdisciplinar donde una UX Designer ya ha construido la maqueta que tendrás que llevar al código. Posteriormente, el equipo de marketing digital posicionará la página en los navegadores.


La web tiene las siguientes páginas:

Una landing page que nos explica la misión de la página, permitirá consultar catalogo de peliculas y comenzar visualización de ellas.
También contiene estadististas de subscriptores,titulos y resolución.

Una seleccion de peliculas por temática y cad aviernes ofrecemos un estreno.

Una página de pricing con los planes de subscripción a nuestra platafprma de cine.

Una página de contacto con un formulario.

## Enlace a las tareas del JIRA
Hemos usado SCRUM que es una herramienta AGILE para la gestion y planificacion de tareas para realizar este proyecto.
https://atapiamallea.atlassian.net/jira/software/projects/CE2/boards/67/backlog

## Enlace al github del repositorio con el código

https://github.com/Cinephile-Team-2/cinephile-project

Es necesario clonar el repositorio usando el comando

**git clone [ruta del repositorio]**

https://github.com/Cinephile-Team-2/cinephile-project.git
git@github.com:Cinephile-Team-2/cinephile-project.git


## Prerrequisitos (o ## Requisitos): Enumera qué software necesita el usuario instalado antes de empezar 

Para poder consultar el código de un proyecto moderno **con React y Vite**, no necesitas instalar mil cosas; de hecho, la filosofía de Vite es ser extremadamente ligero.

Aquí tienes lo esencial para preparar tu entorno de desarrollo basándome en los archivos de configuración del proyecto (como vite.config.js y package.json)

## Instalación: Incluye los comandos paso a paso para configurar el entorno
Pasos previos de instalacion
## 1. Node.js y npm (El motor)
Es el requisito previo indispensable. Al instalar Node.js, se instala automáticamente npm (el gestor de paquetes).

¿Por qué? Para ejecutar el servidor de desarrollo y gestionar las librerías.

Comprobación: Abre tu terminal y escribe **node -v**. Deberías tener una versión LTS (preferiblemente 18 o superior).

La version actualmente instalada es: v24.14.1

## 2. El Scaffolding (Crear el proyecto)
No instalas Vite "globalmente". Lo ejecutas directamente usando npm para generar la estructura que ya tienes en tus capturas:

Bash
**npm create vite@latest**
Durante este proceso, elegirás React y luego JavaScript (o SWC) para obtener los archivos que como main.jsx y App.jsx.

## 3. Dependencias del Proyecto
Una vez creado el proyecto, debes entrar a la carpeta e instalar lo que está declarado en tu package.json:

**React y React-DOM:** Las librerías core para que el código funcione.

**Vite:** Como dependencia de desarrollo para compilar rápido.

**Plugin-react:** Para que Vite entienda la sintaxis de React perfectamente.

Para instalar todo esto de golpe, simplemente ejecutas:

Bash
npm install

## 4. Extensiones Recomendadas (VS Code)
Viendo que usas VS Code, estas extensiones te harán la vida más fácil en el bootcamp:

ESLint: Ya veo que tienes un eslint.config.js. Esta extensión te marcará errores de sintaxis en tiempo real.

Prettier: Para que el código se formatee solo al guardar.

ES7+ React/Redux/React-Native snippets: Para escribir componentes enteros con solo poner rfce y darle a enter.

## 4. react-router-dom
La librería estándar para aplicaciones web

**Comando de instalación**
Ejecuta el siguiente comando en la terminal de tu proyecto:
npm: **npm install react-router-dom**
o
yarn: **yarn add react-router-dom**

## 5. react-icons
**npm install react-icons** 
o 
**yarn add react-icons**

# Tabla de contenidos
## Diseño
### Enlaces Figma a los mokups que nos han proporcionado para realizar la maquetación y el USER FLOW que nos indica la navegación entre páginas.

https://www.figma.com/board/18lAd5T5Zdg7L1qeh9MKp2/Cinephile-Team-2?node-id=1-148&t=rwM11FglUexA6Jbj-0

## USER HISTORIES + CRITERIOS DE ACEPTACIÓN

### User History Landing Page
### Usuario objetivo
Persona que entra por primera vez a la web y desea explorar la plataforma de cine.

### User Story - Landing Page Maquetación
**Como** usuario nuevo 
**quiero** visualizar una landing page moderna, ordenada y responsive  
**para** navegar fácilmente y comprender la estructura principal de la plataforma  

**Criterios de aceptación 1.1**
**Dado** que el usuario accede a la landing page  
**Cuando** se carga la página principal  
**Entonces** debe visualizarse un header con logo, menú de navegación y botones de acceso  

**Criterios de aceptación 1.2**
**Dado** que el usuario visualiza la sección principal (Hero)  
**Cuando** entra en la web  
**Entonces** debe mostrarse un título principal, texto descriptivo, botones CTA y tarjetas visuales de películas  

**Criterios de aceptación 1.3**
**Dado** que el usuario navega por la landing page  
**Cuando** visualiza el contenido principal  
**Entonces** la distribución de elementos debe mantener alineación, espaciados y jerarquía visual coherente  

**Criterios de aceptación 1.4**
**Dado** que el usuario accede desde distintos dispositivos  
**Cuando** cambia el tamaño de pantalla  
**Entonces** la maquetación debe adaptarse correctamente en desktop, tablet y móvil mediante diseño responsive  

**Criterios de aceptación 1.5**
**Dado** que el usuario interactúa con botones o enlaces  
**Cuando** pasa el cursor o hace clic  
**Entonces** los componentes visuales deben reflejar estados interactivos básicos (hover, focus o active)  

### User Story - Contact Page
### Historia de Usuario 1: Visualización y Estructura de la Página
**Como** usuario interesado en Cinephile
**quiero** visualizar una página de contacto con una estética futurista y profesional
**para** sentir confianza en la plataforma y entender los canales de comunicación disponibles.

**Criterios de Aceptación:**

Escenario: Carga exitosa de la interfaz visual.

**Dado** que el usuario navega a la URL /contact.
**Cuando** la página carga.
**Entonces** debe mostrarse el encabezado con el logo de "CINEPHILE" y el menú de navegación.

Y el enlace "Contact" debe aparecer resaltado visualmente (active state).

Y debe visualizarse el panel izquierdo con el texto "STAY CONNECTED" y la descripción del servicio técnico.

Y debe visualizarse el formulario de contacto a la derecha con el fondo oscuro y bordes redondeados.

### Historia de Usuario 2: Interacción con el Formulario (UI/UX)
**Como** suscriptor o usuario potencial
**quiero** poder ingresar mi nombre, correo y mensaje en campos claramente identificados
**para** preparar mi consulta antes de enviarla.

**Criterios de Aceptación:**

Escenario: Disponibilidad de campos de entrada.

**Dado** que el usuario se encuentra en el formulario de la página de contacto.
**Cuando** observa la sección de "IDENTITY" y "E-MAIL".
**Entonces** debe ver inputs de texto con los placeholders "FULL NAME" y "EMAIL ADDRESS".

Y debe haber un área de texto (textarea) para el "MESSAGE" con el placeholder correspondiente.

### User Story -Pricing Page
### Usuario objetivo
Un posible suscriptor que compara los planes de suscripción de Cinephile antes de registrarse.

### User Story - Página de Precios
**Como** usuario nuevo
**quiero** ver y comparar los planes de suscripción de Cinephile
**para** elegir el plan que mejor se adapte a mis necesidades y presupuesto

**Criterios de aceptación 1.1**
**Dado** que el usuario entra en la página de precios
**Cuando** la página carga
**Entonces** debe visualizar todos los planes de suscripción con sus precios y características claramente mostrados

**Criterios de aceptación 1.2**
**Dado** que el usuario está visualizando los planes de precios
**Cuando** compare las opciones disponibles
**Entonces** debe poder distinguir fácilmente las diferencias entre cada plan

**Criterios de aceptación 1.3**
**Dado** que el usuario accede a la página de precios desde cualquier dispositivo
**Cuando** la página se muestre
**Entonces** el diseño debe adaptarse correctamente a pantallas de escritorio, tablet y móvil

## Estructura de la web
```
CINEPHILE-PROJECT/
├── public/
└── src/
    ├── assets/
    │   ├── Cinephile1.png
    │   ├── Cinephile2.png
    │   ├── Cinephile3.png
    │   ├── Cinephile4.png
    │   ├── Hero.png
    │   ├── react.svg
    │   └── vite.svg
    ├── components/
    │   ├── Landing/
    │   │   ├── ButtonLeftContent.jsx
    │   │   ├── MainCard.jsx
    │   │   ├── MainLanding.jsx
    │   │   ├── MainLandingMobile.jsx
    │   │   ├── SideCard.jsx
    │   │   ├── Stats.jsx
    │   │   └── TextLeftContent.jsx
    │   ├── Pricing/
│   │   ├── Button.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Icon.jsx
│   │   └── Nav.jsx
│   ├── config/
│   │   └── router.jsx
│   └── pages/
│   │   ├── Contact.jsx
│   │   └── Pricing.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Presentación
### ENLACE PRESENTACIÓN CANVA
https://canva.link/9cgyym6svdzz90p

## Tecnologias utilizadas
 Nuestro producto está realizado con las siguientes herramientas: 

En Figma se ha realizado el USER FLOW y se han pegado los Mokups de Desktop y Mobile para poder maquetar.

## 🛠Herramientas
- Figma
- Visual Studio Code
- Jira o Trello
- Git / GitHub

En visual Code se desarrolla la web con
## 💻 Tecnologías
- HTML5
- CSS3
- Javascript
- React.js

## Autores
Andrea Tapia
Ruki
Rose