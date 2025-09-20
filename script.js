window.onload = () => {
  const cards = document.querySelectorAll('.dungeon-card');
  let maxRuns = 0;
  let topCard = null;

  cards.forEach(card => {
    const runCount = parseInt(card.querySelector('.runs').textContent);
    if (runCount > maxRuns) {
      maxRuns = runCount;
      topCard = card;
    }
  });

  if (topCard) {
    topCard.style.border = "2px solid limegreen";
    const title = topCard.querySelector('h2');
    if (title && !title.textContent.includes("(Most Played)")) {
      title.textContent += " (Most Played)";
    }
  }
};
