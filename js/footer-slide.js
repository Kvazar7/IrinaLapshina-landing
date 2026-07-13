document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".footer");
  if (!footer) return;

  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // Функція показати footer
  function showFooter() {
    footer.classList.add("footer--visible");
  }

  // Функція сховати footer
  function hideFooter() {
    footer.classList.remove("footer--visible");
  }

  // Click на footer: toggle (для мобільних)
  footer.addEventListener("click", function (e) {
    // Не реагуємо на кліки всередині контенту footer (посилання, кнопки)
    if (e.target.closest(".footer__container")) return;
    e.stopPropagation();
    footer.classList.toggle("footer--visible");
  });

  // Клік поза footer — ховаємо (для мобільних)
  document.addEventListener("click", function (e) {
    if (
      isTouchDevice &&
      !footer.contains(e.target) &&
      footer.classList.contains("footer--visible")
    ) {
      hideFooter();
    }
  });

  // На мобільних прибираємо hover-ефект через CSS
  if (isTouchDevice) {
    document.documentElement.classList.add("touch-device");
  }
});