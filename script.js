document.addEventListener("DOMContentLoaded", () => {
  const pantallaBienvenida = document.getElementById("pantalla-bienvenida");
  const btnIngresar = document.getElementById("btn-ingresar");
  const contenidoGuia = document.getElementById("contenido-guia");

  const agujaHora = document.getElementById("aguja-hora");
  const agujaMinuto = document.getElementById("aguja-minuto");
  const agujaSegundo = document.getElementById("aguja-segundo");
  const horaDigital = document.getElementById("hora-digital");
  const saludoHorario = document.getElementById("saludo-horario");

  function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const gradosSegundos = segundos * 6;
    const gradosMinutos = minutos * 6 + segundos * 0.1;
    const gradosHoras = ((horas % 12) * 30) + (minutos * 0.5);

    agujaSegundo.style.transform = `rotate(${gradosSegundos}deg)`;
    agujaMinuto.style.transform = `rotate(${gradosMinutos}deg)`;
    agujaHora.style.transform = `rotate(${gradosHoras}deg)`;

    const hh = String(horas).padStart(2, "0");
    const mm = String(minutos).padStart(2, "0");
    const ss = String(segundos).padStart(2, "0");
    horaDigital.textContent = `${hh}:${mm}:${ss}`;

    if (horas >= 6 && horas < 19) {
      saludoHorario.textContent = "☀️ Buenos días";
    } else {
      saludoHorario.textContent = "🌙 Buenas noches";
    }
  }

  actualizarReloj();
  setInterval(actualizarReloj, 1000);

  btnIngresar.addEventListener("click", () => {
    pantallaBienvenida.style.display = "none";
    contenidoGuia.classList.remove("oculto");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});