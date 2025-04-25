const galeria = document.getElementById("galeria");
const btnAgregar = document.getElementById("agregar");

btnAgregar.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const imagen = document.getElementById("imagen").value.trim();

  if (nombre && imagen) {
    // Crea el contenedor de la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

      // Nombre
      const texto = document.createElement("p");
      texto.textContent = nombre;
    
      // Añade todo a la tarjeta
      tarjeta.appendChild(cerrar);
      tarjeta.appendChild(img);
      tarjeta.appendChild(texto);
    
      // Añade la tarjeta a la galería
      galeria.appendChild(tarjeta);
    
        // Limpia los campos
        document.getElementById("nombre").value = "";
        document.getElementById("imagen").value = "";
      } else {
        alert("Por favor completa ambos campos antes de agregar.");
      }

    // Imagen del Pokemon
    const img = document.createElement("img");
    img.src = imagen;
    img.alt = nombre;

});
