// Función para incrementar el valor
function incrementar(btn) {
    // Encuentra el campo de número más cercano al botón "+"
    const input = btn.previousElementSibling; 
    
    // Aumenta el valor en 1
    input.value = parseInt(input.value) + 1;
  }
  
  // Función para decrementar el valor
  function decrementar(btn) {
    // Encuentra el campo de número más cercano al botón "-"
    const input = btn.nextElementSibling; 
    
    // Si el valor es mayor a 1, disminuye en 1
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
    }
  }

// Función para finalizar la compra
function finalizarCompra() {
  // Redirige a la página de pago
  window.location.href = "resumencarrito.html"; 
}




document.addEventListener("DOMContentLoaded", function () {
  // Definir el catálogo de productos
  const productos = [
      {
          id: 1,
          nombre: "Max Mature Frango & Arroz",
          precio: 38100,
          descripcion: "Presentamos el C MAX MATURE FRANGO & ARROZ de la prestigiosa marca Max. Un alimento diseñado específicamente para perros adultos de más de 7 años, lleno de ingredientes naturales y de alta calidad, pensado para atender cada una de sus necesidades..",
          especificaciones: "Arroz medio grano, Maíz integral molido, Germen de maíz desgrasado, Harina de menudos de pollo, Sorgo integral, Afrecho de soja, Carne mecánicamente separada de pollo, Grasa de pollo, Levadura seca de cerveza, Afrecho de trigo Semilla de linaza, Fosfato dicálcico, Cloruro de potasio, Cloruro de Sodio (sal común), Propionato de calcio, Manano-oligosacáridos, Sulfato de condroitina, Sulfato de glucosamina, L-carnitina, Hidrolizado de pollo e híigado de cerdo, Aditivo antioxidante (BHA, BHT), Suplemento vitamínico mineral",
          imagen: "img/producto1.1.jpg" 
      },
      {
          id: 2,
          nombre: "Staple Tuff Bowl",
          precio: 150000,
          descripcion: "Este cuenco para perros está fabricado en acero inoxidable de doble pared, lo que lo convierte en un recipiente súper resistente, ideal para el uso diario. Con una capacidad de hasta 5 tazas de agua o croquetas, es perfecto para mantener a tu peludo bien alimentado e hidratado. Además, es muy fácil de limpiar: simplemente colócalo en el lavavajillas (se recomienda la rejilla superior) y quedará como nuevo. Su base de silicona evita que el cuenco se deslice mientras tu perro bebe.",
          especificaciones: "Durabilidad Superior:** Cuenco fabricado en acero inoxidable 304 de doble pared ultra duradero, resistente a la corrosión y al óxido, asegurando una larga vida útil.",
          imagen: "img/producto1.2.jpg" 
      },
      {
        id: 3,
        nombre: "Puppy Training Pad",
        precio: 16900,
        descripcion: "Alta Absorción: Capacidad superior para retener líquidos, manteniendo la superficie seca y limpia.",
        especificaciones: "Los Puppy Training Pad son tapetes de alta absorción diseñados específicamente para ayudar en el entrenamiento de los cachorros. Con una tecnología avanzada que retiene líquidos y neutraliza olores, estos tapetes son la solución perfecta para enseñar a tu cachorro a hacer sus necesidades en el lugar correcto. Ideales tanto para interiores como exteriores, ofrecen comodidad y practicidad para ti y tu mascota.",
        imagen: "img/producto1.3.jpg"
    },
    {
        id: 4,
        nombre: "Monello Dog Senior",
        precio: 180000,
        descripcion: "Proteína de Alta Calidad: El pollo como única fuente de proteína animal garantiza una nutrición óptima para tu perro. Alta Digestibilidad: Fórmula diseñada para ser fácilmente digerida, favoreciendo una mejor absorción de nutrientes. ",
        especificaciones: "Este alimento está formulado exclusivamente con pollo como fuente de proteína animal, asegurando una digestibilidad superior y ayudando a mantener una musculatura fuerte y un peso ideal. Además, su fórmula está diseñada para cuidar las articulaciones de perros mayores y prevenir la formación de sarro, lo que lo convierte en una opción perfecta para perros adultos con necesidades específicas..",
        imagen: "img/producto1.4.jpg"
    },
    {
        id: 5,
        nombre: "Hills Canince Adulto Light",
        precio: 45000,
        descripcion: "Este no es simplemente otro alimento para perros, es una fórmula especial con todo lo que tu mascota necesita y nada que no requiera",
        especificaciones: "Mezcle cantidades crecientes del alimento nuevo de su mascota con cantidades decrecientes del alimento anterior durante un período de 7 días. Mantener siempre agua fresca. Ajustar la cantidad de alimento según sea necesario para mantener el peso óptimo.",
        imagen: "img/producto1.5.jpg"
    },
    {
      id: 6,
      nombre: "Max Vita Canine Adulto",
      precio: 55500,
      descripcion: "MAX VITA CANINE ADULTO STROGONOFF CARNE AO MOHLO",
      especificaciones: "Ingredientes: Pollo, arroz, vegetales, aceite de salmón, vitaminas y minerales.",
      imagen: "img/producto1.6.jpg"
  },
  {
    id: 7,
    nombre: "Hills Canine Adulto Small Bites",
    precio: 90200,
    descripcion: "Los ingredientes de calidad y la ciencia detrás de cada croqueta garantizan que tu mascota reciba la nutrición adecuada para mantenerse activa, feliz y saludable.",
    especificaciones: "Ingredientes: Pollo, arroz, vegetales, aceite de salmón, vitaminas y minerales.",
    imagen: "img/producto1.jpg"
},
{
  id: 8,
  nombre: "Confort Kat Arena Cat",
  precio: 26000,
  descripcion: "Compuesta por ingredientes de calidad, como la bentonita de sodio y el bicarbonato de sodio, COMFORT KAT es la elección segura y eficaz que tu gato merece..",
  especificaciones: "Mezcle cantidades crecientes del alimento nuevo de su mascota con cantidades decrecientes del alimento anterior durante un período de 7 días. Mantener siempre agua fresca. Ajustar la cantidad de alimento según sea necesario para mantener el peso óptimo.",
  imagen: "img/producto2.jpg"
},
{
  id: 9,
  nombre: "Concentrado Chunky Adulto",
  precio: 18300,
  descripcion: "Salud y Bienestar: Formulado con ingredientes de alta calidad para mantener la salud general y el bienestar de los perros adultos. Energía Sostenida: Proporciona la energía necesaria para mantener a tu perro activo y feliz durante todo el día.",
  especificaciones: "Recuerda, al elegir el Collar ajustable Michi, estás invirtiendo en la seguridad y bienestar de tu gato. ¡Haz tu pedido ahora y asegura que tu Michie luzca con estilo y esté protegido en todo momento!",
  imagen: "img/producto3.jpg"
},
{
  id: 10,
  nombre: "Collar Ajustable Michi",
  precio: 15952,
  descripcion: "Elemento Decorativo: Dale un toque de estilo a tu gato con este collar adornado con un pompón suave y colorido. Chapa Salvavidas: La chapa de seguridad se abre ante la tensión, garantizando la seguridad de tu gato en caso de accidente",
  especificaciones: "Ingredientes: Pollo, arroz, vegetales, aceite de salmón, vitaminas y minerales.",
  imagen: "img/producto4.jpg"
},
{
  id: 11,
  nombre: "Arena Mr Miau Premium",
  precio: 81000,
  descripcion: " Calidad Superior: Fabricada con materiales de alta calidad para garantizar la máxima absorción y control de olores..",
  especificaciones: "Seguro para tu Gato: Libre de polvo y productos químicos agresivos, Mr. Miau Premium es seguro para la salud de tu gato y su delicado sistema respiratorio. Control de Olores: Su acción de control de olores mantiene el ambiente de tu hogar fresco y libre de malos olores, brindando un espacio agradable para tu gato y tu familia",
  imagen: "img/producto5.jpg"
},
  ];

  // Función para mostrar el producto en la página de detalle
  function mostrarProducto(id) {
      const producto = productos.find(p => p.id === id);
      if (producto) {
          const productDetails = document.getElementById('product-details');

          // Crear el HTML dinámico para el producto
          const productHTML = `
              <div class="col-md-6">
                  <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid">
              </div>
              <div class="col-md-6">
                  <h3>${producto.nombre}</h3>
                  <div class="d-flex mb-3">
                      <span class="text-warning me-2">★★★★★</span>
                  </div>
                  <h4 class="text-primary">$${producto.precio.toLocaleString()}</h4>
                  <p>Selecciona la presentación tamaño:</p>
                  <select class="form-select w-50 mb-3">
                      <option>500 g</option>
                      <option>1 kg</option>
                      <option>3 kg</option>
                  </select>
                  <div class="d-flex align-items-center">
                      <button class="btn btn-outline-secondary btn-sm" onclick="decrementar(this)">-</button>
                      <input type="text" class="form-control text-center w-25 mx-2" value="1">
                      
                 <button class="btn btn-outline-secondary btn-sm" onclick="incrementar(this)">+</button>
                <button class="btn btn-primary w-50 ms-auto" data-bs-toggle="modal" data-bs-target="#confirmModal">Comprar</button>
                  </div>
              </div>
              
              <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmModalLabel">¿Qué deseas hacer?</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          ¿Quieres seguir comprando o finalizar la compra?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Seguir comprando</button>
          <button type="button" class="btn btn-primary" onclick="finalizarCompra()">Finalizar compra</button>
        </div>
      </div>
    </div>
  </div>
              <div class="mt-5">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="descripcion-tab" data-bs-toggle="tab" data-bs-target="#descripcion" type="button" role="tab">Descripción</button>
                      </li>
                      <li class="nav-item" role="presentation">
                          <button class="nav-link" id="especificaciones-tab" data-bs-toggle="tab" data-bs-target="#especificaciones" type="button" role="tab">Especificaciones</button>
                      </li>
                      <li class="nav-item" role="presentation">
                          <button class="nav-link" id="comentarios-tab" data-bs-toggle="tab" data-bs-target="#comentarios" type="button" role="tab">Comentarios</button>
                      </li>
                  </ul>
                  <div class="tab-content p-3 border border-top-0">
                      <div class="tab-pane fade show active" id="descripcion" role="tabpanel">
                          <p>${producto.descripcion}</p>
                      </div>
                      <div class="tab-pane fade" id="especificaciones" role="tabpanel">
                          <p>${producto.especificaciones}</p>
                      </div>
                      <div class="tab-pane fade" id="comentarios" role="tabpanel">
                          <p>Opiniones de otros clientes...</p>
                      </div>
                  </div>
              </div>
          `;

          // Insertar el HTML en el contenedor
          productDetails.innerHTML = productHTML;
      }
  }

  // Obtener el ID del producto desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const productoId = parseInt(urlParams.get("id"));

  // Si se tiene un producto en la URL, mostrarlo
  if (!isNaN(productoId)) {
      mostrarProducto(productoId);
  }
});






document.addEventListener("DOMContentLoaded", function () {
  const carritoResumen = document.querySelector(".col-md-8 .border");

  // Escucha clics en todos los botones de agregar al carrito
  document.body.addEventListener("click", function (e) {
      if (e.target.classList.contains("agregar-carrito")) {
          const button = e.target;
          const producto = {
              id: button.getAttribute("data-id"),
              nombre: button.getAttribute("data-nombre"),
              precio: parseFloat(button.getAttribute("data-precio")),
              imagen: button.getAttribute("data-imagen"),
              cantidad: 1,
          };

          agregarAlCarrito(producto);
      }
  });

  function agregarAlCarrito(producto) {
      // Crear el contenido HTML del producto
      const productoHTML = `
          <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="d-flex align-items-center">
                  <div class="border bg-light me-3" style="width: 80px; height: 80px;">
                      <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div>
                      <p class="mb-1">${producto.nombre}</p>
                      <div class="d-flex align-items-center">
                          <button class="btn btn-outline-secondary btn-sm btn-disminuir" data-id="${producto.id}">-</button>
                          <input type="text" class="form-control form-control-sm text-center mx-2 cantidad-producto" value="${producto.cantidad}" data-id="${producto.id}" style="width: 50px;">
                          <button class="btn btn-outline-secondary btn-sm btn-aumentar" data-id="${producto.id}">+</button>
                      </div>
                  </div>
              </div>
              <div class="text-end">
                  <p class="mb-0 precio-producto" data-id="${producto.id}">$${producto.precio.toLocaleString()}</p>
                  <p class="fw-bold total-producto" data-id="${producto.id}">$${(producto.precio * producto.cantidad).toLocaleString()}</p>
              </div>
          </div>
      `;

      // Agregar el producto al resumen
      carritoResumen.innerHTML += productoHTML;

      // Actualizar el total (puedes implementar una función para esto)
      actualizarTotales();
  }

  function actualizarTotales() {
      const productos = document.querySelectorAll(".total-producto");
      let total = 0;
      productos.forEach((producto) => {
          total += parseFloat(producto.textContent.replace(/\$|,/g, ""));
      });

      document.querySelector(".fw-bold p.mb-0").textContent = `$${total.toLocaleString()}`;
  }
});






document.addEventListener("DOMContentLoaded", function () {
  const carritoResumen = document.getElementById("carrito-resumen");
  const subtotalElement = document.getElementById("subtotal");
  const totalElement = document.getElementById("total");

  // Escucha clics en los botones de agregar al carrito
  document.body.addEventListener("click", function (e) {
      if (e.target.classList.contains("agregar-carrito")) {
          const button = e.target;
          const producto = {
              id: button.getAttribute("data-id"),
              nombre: button.getAttribute("data-nombre"),
              precio: parseFloat(button.getAttribute("data-precio")),
              imagen: button.getAttribute("data-imagen"),
              cantidad: 1,
          };

          agregarAlCarrito(producto);
      }
  });

  function agregarAlCarrito(producto) {
      // Verificar si el producto ya existe en el carrito
      const existente = carritoResumen.querySelector(`[data-id="${producto.id}"]`);
      if (existente) {
          // Incrementar la cantidad si ya existe
          const cantidadInput = existente.querySelector(".cantidad-producto");
          cantidadInput.value = parseInt(cantidadInput.value) + 1;

          // Actualizar precio total del producto
          actualizarPrecioProducto(producto.id, producto.precio);
      } else {
          // Crear nuevo elemento HTML para el producto
          const productoHTML = `
              <div class="d-flex justify-content-between align-items-center mb-3" data-id="${producto.id}">
                  <div class="d-flex align-items-center">
                      <div class="border bg-light me-3" style="width: 80px; height: 80px;">
                          <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; height: 100%; object-fit: cover;">
                      </div>
                      <div>
                          <p class="mb-1">${producto.nombre}</p>
                          <div class="d-flex align-items-center">
                              <button class="btn btn-outline-secondary btn-sm btn-disminuir" data-id="${producto.id}">-</button>
                              <input type="text" class="form-control form-control-sm text-center mx-2 cantidad-producto" value="${producto.cantidad}" data-id="${producto.id}" style="width: 50px;">
                              <button class="btn btn-outline-secondary btn-sm btn-aumentar" data-id="${producto.id}">+</button>
                          </div>
                      </div>
                  </div>
                  <div class="text-end">
                      <p class="mb-0 precio-producto" data-id="${producto.id}">$${producto.precio.toLocaleString()}</p>
                      <p class="fw-bold total-producto" data-id="${producto.id}">$${producto.precio.toLocaleString()}</p>
                  </div>
              </div>
          `;

          // Agregar al resumen
          carritoResumen.innerHTML += productoHTML;
      }

      // Actualizar subtotal y total
      actualizarTotales();
  }

  function actualizarPrecioProducto(productoId, precioUnitario) {
      const cantidadInput = carritoResumen.querySelector(`.cantidad-producto[data-id="${productoId}"]`);
      const cantidad = parseInt(cantidadInput.value);
      const totalProductoElement = carritoResumen.querySelector(`.total-producto[data-id="${productoId}"]`);

      // Calcular nuevo total del producto
      const nuevoTotal = precioUnitario * cantidad;
      totalProductoElement.textContent = `$${nuevoTotal.toLocaleString()}`;

      // Actualizar totales generales
      actualizarTotales();
  }

  function actualizarTotales() {
      let subtotal = 0;

      // Calcular subtotal sumando todos los productos
      const totalProductos = carritoResumen.querySelectorAll(".total-producto");
      totalProductos.forEach((producto) => {
          subtotal += parseFloat(producto.textContent.replace(/\$|,/g, ""));
      });

      // Actualizar el subtotal y total
      subtotalElement.textContent = `$${subtotal.toLocaleString()}`;
      totalElement.textContent = `$${subtotal.toLocaleString()}`;
  }

  // Manejar eventos de incrementar/disminuir cantidad
  carritoResumen.addEventListener("click", function (e) {
      if (e.target.classList.contains("btn-disminuir") || e.target.classList.contains("btn-aumentar")) {
          const productoId = e.target.getAttribute("data-id");
          const cantidadInput = carritoResumen.querySelector(`.cantidad-producto[data-id="${productoId}"]`);
          let cantidad = parseInt(cantidadInput.value);

          if (e.target.classList.contains("btn-disminuir") && cantidad > 1) {
              cantidad--;
          } else if (e.target.classList.contains("btn-aumentar")) {
              cantidad++;
          }

          cantidadInput.value = cantidad;

          // Actualizar precio del producto
          const precioUnitario = parseFloat(
              carritoResumen
                  .querySelector(`.precio-producto[data-id="${productoId}"]`)
                  .textContent.replace(/\$|,/g, "")
          );
          actualizarPrecioProducto(productoId, precioUnitario);
      }
  });
});













