PEDIDO EN CAMINO — versión web para Vercel

Es un sitio estático: no necesita compilar nada.
  index.html       el juego completo
  privacidad.html  política de privacidad (se publica en /privacidad; es la que pide Play Store)
  favicon.svg      ícono de la pestaña
  vercel.json      configuración de Vercel

Menús
  Título       Jugar, Opciones y Créditos. "Jugar" abre la guía la primera vez y después la selección de escenarios.
  Opciones     volumen de efectos y de ambiente (se guardan), sonido on/off, enlace a la privacidad y
               "Borrar progreso" (con confirmación; borra pedidos, estrellas y récords, no los volúmenes).
               También se abre desde el menú de pausa.
  Esc          en la selección de escenarios vuelve al título; en Opciones y Créditos, también.

Mecánicas del recorrido
  Derrumbe     la tierra cede detrás del repartidor y lo persigue (más rápido en cada pedido).
               Todo lo que queda atrás se cae: suelo, plataformas, cajas. Si te alcanza, perdés una vida.
  Cerros       los túneles atraviesan un cerro (bajo o alto). Por abajo se pasa rápido (sin poder saltar alto);
               por arriba hay más comida: se sube por una escalera de cajas.
  Cajas        pilas fijas de cajas en el camino (escaleras, pirámides): hay que trepar para pasar. No se juntan.
  Viaductos    puentes altos: se sube por una escalera de cajas, se cruza por arriba y se baja al otro lado.
  Cables       postes con cables sueltos que se balancean; si te tocan, perdés 3 segundos. Hay varios por tramo.
  Puentes      además del puente fijo y el roto, hay puentes colgantes: cada tablón cede poco después
               de pisarlo.
  Móviles      pozos demasiado anchos para saltar, con una plataforma que va y viene: esperarla, subirse y bajar.
  Pájaros      los tucanes no salen si hay un túnel por delante, y los que ya venían volando pasan por encima del cerro.
  Pausa        P o el botón ⏸: menú con "Seguir" y "Reiniciar pedido" (también tecla R).

Progreso y dificultad
  Dificultad   Normal (3 vidas), Difícil (2 vidas, reloj al 90%, más enemigos y derrumbe más rápido) y
               Experto (1 vida, reloj al 80%). Se elige en el menú y se guarda en el navegador.
  Estrellas    cada pedido da hasta 3: entregar, ganar la propina y pisar la cantidad de enemigos del reto
               (perros incluidos; contador 👟 en pantalla; al pisar sale una estrella). Con 8 de las 15 de un
               escenario se abre el siguiente. Se ven con iconos al terminar el pedido y al entrar al escenario.
               El progreso es por dificultad: pasar un escenario en Normal no abre el siguiente en Difícil ni en Experto.
  Puntos       salen de la rapidez (segundos que sobran), de pisar enemigos (100 cada uno) y de la propina.
  Guía         la primera vez sale una guía corta de cómo se juega (se puede omitir; hay botón Anterior);
               después, desde "❓ Cómo se juega".
  Vidas        al perder una, reaparecés un poco más atrás (nunca más adelante), sobre piso firme y lejos de pozos,
               cables, barro y enemigos. Las pisadas suenan igual en todas las estaciones.
  Peligros     el barro, los charcos, los cables y los enemigos se ubican sin pisarse: no se juntan en el mismo lugar.
  Probar       agregar ?todo a la URL abre todos los escenarios.

Celular
  Controles    se activan solos al tocar la pantalla: cruz a la izquierda (se puede deslizar el dedo entre
               ◀ y ▶), saltar y Charly a la derecha, varios dedos a la vez, vibración al saltar.
               Pausa con el botón ⏸ (también se pausa sola al salir de la app o al girar a vertical).
               Se juega en horizontal; en vertical pide girar el celular.

Publicar con la terminal (necesita Node.js):
  npm i -g vercel
  vercel login
  vercel --prod      (desde esta carpeta)

Publicar sin terminal: subí esta carpeta a un repositorio de GitHub
y en vercel.com elegí Add New → Project → Import.
