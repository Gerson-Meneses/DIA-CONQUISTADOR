# Habla, Señor — Para Jenifer Llacsahuache

Página web interactiva en React (Vite) dedicada al Día Mundial del Conquistador
2026

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue en Vercel

**Opción 1 — Vercel CLI**

```bash
npm install -g vercel
vercel
```

**Opción 2 — Panel de Vercel**

1. Sube esta carpeta a un repositorio de GitHub/GitLab/Bitbucket.
2. En [vercel.com](https://vercel.com), "Add New… → Project" e importa el repo.
3. Vercel detecta automáticamente el framework "Vite" — no hace falta configurar
   nada (build command `npm run build`, output `dist`).
4. Deploy.

## Activar música/audio

1. Coloca tu archivo en `public/audio.mp3` (ese nombre exacto, o cambia la
   ruta en `src/components/AudioPlayer.jsx`, constante `AUDIO_SRC`).
2. Listo — el botón ♪ flotante de la esquina inferior derecha lo reproduce
   en bucle al tocarlo. No requiere ningún otro cambio de código.

Los navegadores no permiten reproducir audio automáticamente sin que la
persona interactúe primero con la página, por eso el control es manual
(tocar el botón), no autoplay.

## Personalizar

- `src/data.js` — línea de tiempo, significados del emblema e insignias.
- `src/components/Personal.jsx` y `src/components/Letter.jsx` — el texto dedicado
  a Jenifer.
- `src/components/Letter.jsx` — reemplaza el bloque `.letter__photo` por una
  etiqueta `<img>` con una fotografía real si quieres.
- `src/index.css` — paleta de colores y tipografías (variables en `:root`).

## Nota sobre el emblema

El logo de Conquistadores es una marca de la Iglesia Adventista del Séptimo Día.
Esta página usa una representación propia inspirada en su forma y colores, no el
archivo oficial, y se presenta como una dedicatoria personal no oficial.
