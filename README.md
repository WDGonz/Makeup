# Sitio web de Adriana Bordón

Sitio web de presentación profesional para Adriana Bordón, maquilladora. Permite mostrar trabajos por temática, describir servicios y facilitar consultas y propuestas laborales.

## Características

- Diseño adaptable a pantallas móviles y de escritorio.
- Navegación móvil desplegable.
- Portfolio con filtros por categoría.
- Carrusel independiente en cada tarjeta del portfolio.
- Formulario de contacto que prepara un correo mediante `mailto:`.

## Estructura del proyecto

    adriana-bordon-site/
    ├── index.html
    ├── styles.css
    ├── script.js
    └── Images/
        ├── portada.jpg
        ├── adriana.jpg
        ├── trabajo1.jpg
        ├── trabajo1-2.jpg
        ├── trabajo1-3.jpg
        └── ...


## Requisitos

No se necesitan dependencias. Para probar el sitio, se puede abrir `index.html` en un navegador. 

## Imágenes del portfolio

Cada tarjeta define sus fotos en el atributo `data-images` de `index.html`. Usa este patrón para cada grupo:

    trabajo1.jpg
    trabajo1-2.jpg
    trabajo1-3.jpg

Repite el patrón para las tarjetas `trabajo2` a `trabajo6`. La portada y la foto de presentación se llaman `portada.jpg` y `adriana.jpg`.

## Personalización

- Textos, categorías y enlaces: `index.html`.
- Colores, tipografías y diseño adaptable: `styles.css`.
- Menú, filtros, carruseles y formulario: `script.js`.
- Correo del formulario: El formulario abre la aplicación de correo del dispositivo; momentaneamente no envía el mensaje directamente desde el sitio.
- Redes sociales: actualiza los enlaces de Instagram y ##### en el pie de página de `index.html`.


## Licencia

No se especifica una licencia. 

Technologies That I Know👨🏻‍💻
[![My Skills](https://skillicons.dev/icons?i=html,css,js,git,github,vscode)](https://skillicons.dev)
![My Skills](https://avatars.githubusercontent.com/u/48276018?s=48&v=4)