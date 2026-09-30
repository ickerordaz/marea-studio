// ==========================================================
//  CONFIGURACIÓN — cambia aquí tu número de WhatsApp
//  Formato: código de país + número, sin espacios ni "+"
//  Ejemplo México: 5219841234567
// ==========================================================
const WHATSAPP = "527771042245";

const waLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Botón flotante de WhatsApp
document.getElementById("wa-float").href = waLink(
  "¡Hola Marea Studio! Me interesa una página web para mi negocio 🌊"
);

// Año del footer
document.getElementById("year").textContent = new Date().getFullYear();

// Sombra del menú al hacer scroll
const nav = document.querySelector(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

// Comparador antes / después
const compare = document.getElementById("compare");
const range = document.getElementById("compare-range");
range.addEventListener("input", () => compare.style.setProperty("--pos", range.value + "%"));

// Los botones de paquetes preseleccionan el plan en el formulario
const planSelect = document.getElementById("plan-select");
document.querySelectorAll("[data-plan]").forEach((btn) =>
  btn.addEventListener("click", () => (planSelect.value = btn.dataset.plan))
);

// Formulario → abre WhatsApp con el mensaje armado
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const msg =
    `¡Hola Marea Studio! 🌊\n` +
    `Soy ${d.get("nombre")}, de ${d.get("negocio")}.\n` +
    `Me interesa: ${d.get("plan")}.`;
  window.open(waLink(msg), "_blank", "noopener");
});

// Aparición suave de secciones
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        io.unobserve(en.target);
      }
    }),
  { threshold: 0.12 }
);
document
  .querySelectorAll(".section-head, .card, .compare, .steps li, .plan, .faq details, .contact-inner")
  .forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
