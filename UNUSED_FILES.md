# Archivos no utilizados en el proyecto

## Componentes no utilizados
- `src/components/ProductCard.jsx` (duplicado, existe versión en `components/Product/`)
- `src/components/Section.jsx`
- `src/components/UI/Modal.jsx`

## Assets no utilizados
- `public/about-bg.jpg`
- `public/footer-bg.jpg`
- `public/hero-bg.jpg`
- `public/promo-bg.jpg`
- Varias imágenes en `src/assets/` que no se referencian

## Servicios no implementados
- `src/services/supabase.js` (necesario para futuras integraciones)

## Recomendaciones
1. Eliminar los componentes duplicados o no utilizados
2. Revisar qué assets pueden ser removidos o si se usarán más adelante
3. Mantener `supabase.js` para la futura integración con backend