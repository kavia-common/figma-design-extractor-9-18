document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.querySelector('[data-action="start-cooking"]');
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      // Placeholder interaction: In a full app this would navigate to onboarding/home
      console.log("Start Cooking clicked");
      startBtn.classList.add("clicked");
      setTimeout(() => startBtn.classList.remove("clicked"), 200);
    });
  }
});
