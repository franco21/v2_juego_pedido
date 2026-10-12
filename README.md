PEDIDO EN CAMINO — versión web para Vercel

Es un sitio estático: no necesita compilar nada.
  index.html   el juego completo
  favicon.svg  ícono de la pestaña
  vercel.json  configuración de Vercel

Mecánicas del recorrido
  Derrumbe     la tierra cede detrás del repartidor y lo persigue (más rápido en cada pedido).
               Todo lo que queda atrás se cae: suelo, plataformas, cajas. Si te alcanza, perdés una vida.
  Cerros       los túneles atraviesan un cerro (bajo o alto). Por abajo se pasa rápido (sin poder saltar alto);
               por arriba hay más comida: se sube por una escalera de cajas.
  Cajas        pilas fijas de cajas en el camino (escaleras, pirámides): hay que trepar para pasar. No se juntan.
  Viaductos    puentes altos: se sube por una escalera de cajas, se cruza por arriba y se baja al otro lado.
  Cables       postes con cables sueltos que se balancean; si te tocan, perdés puntos. Hay varios por tramo.
  Puentes      además del puente fijo y el roto, hay puentes colgantes: cada tablón cede poco después
               de pisarlo.

Publicar con la terminal (necesita Node.js):
  npm i -g vercel
  vercel login
  vercel --prod      (desde esta carpeta)

Publicar sin terminal: subí esta carpeta a un repositorio de GitHub
y en vercel.com elegí Add New → Project → Import.
