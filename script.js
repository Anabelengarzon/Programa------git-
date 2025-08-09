function enviarWhatsApp(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const texto = '👋 Hola, soy *${nombre}*.\n📧 Email: *${email}*\n💬 Mensaje: ${mensaje}';
  const numero = "573322255104"; // Reemplázalo con tu número real

  const url = https;//wa.me/${numero}?text=${encodeURIComponent(texto)};
  window.open(url, '_blank');
}