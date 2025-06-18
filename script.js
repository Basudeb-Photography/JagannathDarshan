document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.sloka-card').forEach((el, index) => {
    setTimeout(() => el.style.animationPlayState = 'running', index * 200);
  });
});
