// Weapon data for Season of Heresy
const weaponsBySeason = {
  "Season Of Heresy": [
    {
      name: "Eyes Unveiled",
      type: "Pulse Rifle",
      ammo: "assets/ammo/ammo_primary.png",
      image: "assets/weapons/eyes-unveiled.jpg",
      godRoll: ["Arrowhead Brake", "Ricochet Rounds", "Keep Away", "Headseeker", "Range Masterwork"]
    },
    {
      name: "Division",
      type: "Auto Rifle",
      ammo: "assets/ammo/ammo_primary.png",
      image: "assets/weapons/division.jpg",
      godRoll: ["Corkscrew Rifling", "Tactical Mag", "Dynamic Sway Reduction", "Target Lock", "Stability Masterwork"]
    },
    {
      name: "Mirror Imago",
      type: "Fusion Rifle",
      ammo: "assets/ammo/ammo_special.png",
      image: "assets/weapons/mirror-imago.jpg",
      godRoll: ["Hammer-Forged Rifling", "Accelerated Coils", "Surplus", "Controlled Burst", "Charge Time MW"]
    },
    {
      name: "Echo Reaver",
      type: "Sniper Rifle",
      ammo: "assets/ammo/ammo_special.png",
      image: "assets/weapons/sniper.jpg",
      godRoll: ["Fluted Barrel", "Accurized Rounds", "Snapshot Sights", "Opening Shot", "Range MW"]
    },
    {
      name: "Spectral Grasp",
      type: "SMG",
      ammo: "assets/ammo/ammo_primary.png",
      image: "assets/weapons/smg.jpg",
      godRoll: ["Smallbore", "Accurized Rounds", "Threat Detector", "Rangefinder", "Stability MW"]
    },
    {
      name: "Fleshbinder",
      type: "Shotgun",
      ammo: "assets/ammo/ammo_special.png",
      image: "assets/weapons/shotgun.jpg",
      godRoll: ["Full Choke", "Accurized Rounds", "Slideways", "Opening Shot", "Handling MW"]
    },
    {
      name: "Gravetide",
      type: "Rocket Launcher",
      ammo: "assets/ammo/ammo_heavy.png",
      image: "assets/weapons/rocket.jpg",
      godRoll: ["Quick Launch", "Impact Casing", "Auto-Loading Holster", "Explosive Light", "Velocity MW"]
    },
    {
      name: "Hollow Hymn",
      type: "Hand Cannon",
      ammo: "assets/ammo/ammo_primary.png",
      image: "assets/weapons/handcannon.jpg",
      godRoll: ["Corkscrew Rifling", "High-Cal Rounds", "Rapid Hit", "Kill Clip", "Range MW"]
    },
    {
      name: "Pale Choir",
      type: "Bow",
      ammo: "assets/ammo/ammo_primary.png",
      image: "assets/weapons/bow.jpg",
      godRoll: ["Flexible String", "Fiberglass Arrow Shaft", "Archer’s Tempo", "Explosive Head", "Draw Time MW"]
    },
    {
      name: "Ritual Shatter",
      type: "Linear Fusion Rifle",
      ammo: "assets/ammo/ammo_heavy.png",
      image: "assets/weapons/linear.jpg",
      godRoll: ["Arrowhead Brake", "Enhanced Battery", "Firmly Planted", "Firing Line", "Charge Time MW"]
    }
  ]
};

// Fade helpers
function fadeOut(element, callback) {
  element.style.opacity = 1;
  const fadeEffect = setInterval(() => {
    if (element.style.opacity > 0) {
      element.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
      element.style.display = "none";
      if (callback) callback();
    }
  }, 50);
}

function fadeIn(element) {
  element.style.opacity = 0;
  element.style.display = "flex";
  const fadeEffect = setInterval(() => {
    let current = parseFloat(element.style.opacity);
    if (current < 1) {
      element.style.opacity = current + 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 50);
}

// DOM elements
const seasonCards = document.querySelectorAll(".dungeon-card");
const weaponList = document.getElementById("weapon-list");
const seasonSection = document.getElementById("season-cards");
const backButton = document.getElementById("back-button");

// Click handler
seasonCards.forEach(card => {
  card.addEventListener("click", () => {
    const season = card.dataset.season.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const weapons = weaponsBySeason[season];

    if (!weapons) {
      weaponList.innerHTML = `<p style="text-align: center;">No data for ${season} yet.</p>`;
      return;
    }

    fadeOut(seasonSection, () => {
      renderWeapons(weapons);
      fadeIn(weaponList);
      backButton.style.display = "block";
    });
  });
});

// Render weapons
function renderWeapons(weapons) {
  weaponList.innerHTML = "";
  weaponList.style.flexWrap = "wrap";
  weaponList.style.justifyContent = "center";

  weapons.forEach(weapon => {
    const card = document.createElement("div");
    card.className = "weapon-card";

    card.innerHTML = `
      <img class="weapon-image" src="${weapon.image}" alt="${weapon.name}">
      <h3>${weapon.name}</h3>
      <p>${weapon.type} <img class="ammo-icon" src="${weapon.ammo}" alt="Ammo"></p>
      <div class="godroll">
        <p><strong>God Roll Perks:</strong></p>
        <ul>${weapon.godRoll.map(p => `<li>${p}</li>`).join("")}</ul>
      </div>
    `;

    weaponList.appendChild(card);
  });
}

// Back button functionality
function returnToSeasons() {
  fadeOut(weaponList, () => {
    weaponList.innerHTML = `<p>Select a season to view god roll weapons.</p>`;
    fadeIn(seasonSection);
    backButton.style.display = "none";
  });
}
