# Merakia

Landing en español para Merakia, desarrollada con React 19, TypeScript, Vinext/Vite y Lucide React.

## Uso local

Requiere Node.js 22.13 o superior.

```sh
npm ci
npm run dev
```

La vista local se sirve en http://localhost:5173.

```sh
npm run build
npm run start
```

El build genera una aplicación compatible con Cloudflare Workers en `dist/`.

## Edición

- `app/page.tsx`: secciones, ejemplos, preguntas, planes y enlaces de WhatsApp.
- `app/globals.css`: estilos y paleta de marca.
- `app/layout.tsx`: idioma, título y descripción.
- `public/merakia-loop.webp`: imagen original de marca optimizada para web.
- `public/favicon.svg`: favicon de Merakia.

El WhatsApp comercial es +52 462 491 8864. La función `whatsapp()` centraliza el destino y el mensaje de cada botón. Los botones abren una conversación; no envían mensajes automáticamente.

## Contenido y alcance

La oferta conserva el alcance general de la cotización original y usa los paquetes de la tabla actualizada proporcionada el 17 de septiembre de 2026. Todos los importes publicados son MXN sin IVA. Los precios principales representan implementación + 12 mensualidades, sin implicar un cobro anual anticipado:

| Paquete | Implementación | Mensualidad | Primer año |
| --- | ---: | ---: | ---: |
| Estándar Instagram | $3,500 | $550 | $10,100 |
| Estándar WhatsApp | $6,000 | $550 | $12,600 |
| WhatsApp Completo con pedidos y CRM | $12,000 | $550 | $18,600 |
| Doble Instagram + WhatsApp | $6,800 base | $800 | ~~$16,400~~ $14,800 |
| Doble Completo con pedidos y CRM | $10,800 base | $800 | ~~$20,400~~ $18,800 |

El descuento de $1,600 se aplica al total del primer año de ambas versiones Doble. El usuario confirmó expresamente $18,800 para el Doble Completo. No se inventa una distribución del descuento entre anticipo, implementación o mensualidades; se acuerda en la cotización. La opción Completo suma $6,000 a WhatsApp o $4,000 a Doble e incluye pedidos y CRM. No se publican los cálculos internos ni los totales con IVA de la imagen.

Los ejemplos de conversación son demostraciones de interfaz con contenido predefinido. No son bots conectados a una API, no crean citas, no procesan pedidos y no cobran. La landing no requiere claves de IA ni almacena datos de visitantes. Consultorios y otros negocios se ofrecen a medida, sin asignarles los planes del restaurante.

La estructura comercial toma como referencia https://www.pideloporchat.com.mx/ . Diseño, textos y arte de Merakia son propios. No se incorporan el nombre del cliente de la cotización, testimonios, cifras de rendimiento ni precios de la web de referencia.

## Imagen

Creada con la herramienta integrada de generación de imágenes; una solicitud, sin variantes. Archivo de producción: `public/merakia-loop.webp`.

Prompt original:

Use case: stylized-concept
Asset type: premium 3D editorial brand artwork for the Merakia AI automation agency landing page hero, intended to sit behind small conversational UI cards on the right half of a hero.
Primary request: exactly one original square 1024x1024 image of one continuous sculptural flowing ribbon loop, evoking connection and freed time.
Scene/backdrop: perfectly solid butter cream #F5EFC6 background and ground, with a soft natural contact shadow.
Subject: one elegant tactile organic folded ribbon loop, in rich wine burgundy #4D0E12.
Style/medium: premium polished 3D editorial brand render.
Composition/framing: sculptural loop positioned in the upper/right-center of a square frame, generous breathing room.
Lighting/mood: soft studio illumination with slight pale blue #A5BCD6 reflected lighting, calm and sophisticated.
Materials/textures: smooth satin and soft-gloss material, tangible sculptural folds.
Constraints: no text, no logos, no watermark, no robot, no technology cliches, no page chrome, no UI elements, no extra objects.

## Verificación

Compilación de producción, revisión de TypeScript, vista de escritorio y móvil, menú responsive, selección de ejemplos, preguntas desplegables, anclas internas y destino de los enlaces de WhatsApp.
