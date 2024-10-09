let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    const productoExistente = carrito.find(item => item.producto === producto);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ producto, precio, cantidad: 1 });
    }

    total += precio;
    actualizarCarrito();
}
function eliminarDelCarrito(index) {
    total -= carrito[index].precio; 
    carrito.splice(index, 1); 
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoContenido = document.getElementById('carrito-contenido');
    carritoContenido.innerHTML = '';
    carrito.forEach((item, index) => {
        carritoContenido.innerHTML += `
            <p>${item.producto} - $${item.precio.toFixed(2)} 
            <button onclick="eliminarDelCarrito(${index})">Quitar</button>
            </p>`;
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

function validarRegistro(event) {
    event.preventDefault();
    const identificacion = document.getElementById('identificacion').value;
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    
    if (!identificacion || !nombres || !apellidos || !correo) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert('Ingrese un correo electrónico válido.');
        return;
    }

    alert('Registro completado con éxito.');
}
