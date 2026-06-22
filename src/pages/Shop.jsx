import AppLayout from "../components/AppLayout";
import { getProfile } from "../utils/profile";
import {
  pets,
  getSelectedPet,
  buyPet,
  updatePet,
} from "../utils/pets";
import {
  themes,
  getSelectedTheme,
  buyTheme,
  updateTheme,
} from "../utils/themes";

export default function Shop() {
  const profile = getProfile();
  const selectedPet = getSelectedPet();
  const selectedTheme = getSelectedTheme();

  function handleBuyPet(petId) {
    buyPet(petId);
    window.location.reload();
  }

  function handlePetSelect(petId) {
    updatePet(petId);
    window.location.reload();
  }

  function handleBuyTheme(themeId) {
    buyTheme(themeId);
    window.location.reload();
  }

  function handleThemeSelect(themeId) {
    updateTheme(themeId);
    window.location.reload();
  }

  return (
    <AppLayout>
      <section className="shop-page">
        <div className="shop-hero">
          <div>
            <span className="eyebrow">Spend your rewards ✨</span>
            <h1>EduQuest Shop 🛒</h1>
            <p>Use your coins to unlock pets and learning rewards.</p>
          </div>

          <div className="shop-wallet">
            <strong>Wallet</strong>
            <span>🪙 {profile.coins} Coins</span>
          </div>
        </div>

        <section className="shop-section">
          <h2>Pet Companions 🐾</h2>
          <p>Buy a learning buddy to join your adventures.</p>

          <div className="pet-grid">
            {pets.map((pet) => {
              const isOwned = profile.ownedPets.includes(pet.id);
              const canAfford = profile.coins >= pet.cost;
              const isSelected = selectedPet.id === pet.id;

              return (
                <button
                  key={pet.id}
                  className={
                    isSelected
                      ? "pet-option selected"
                      : isOwned
                      ? "pet-option"
                      : "pet-option locked"
                  }
                  onClick={() => {
                    if (isOwned) {
                      handlePetSelect(pet.id);
                    } else if (canAfford) {
                      handleBuyPet(pet.id);
                    }
                  }}
                  disabled={!isOwned && !canAfford}
                >
                  <span>{pet.icon}</span>
                  <strong>{pet.name}</strong>

                  {isSelected ? (
                    <small>Selected</small>
                  ) : isOwned ? (
                    <small>Use Pet</small>
                  ) : canAfford ? (
                    <small>Buy for 🪙 {pet.cost}</small>
                  ) : (
                    <small>Need 🪙 {pet.cost}</small>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <section className="shop-section">
          <h2>Theme Collection 🎨</h2>
          <p>Use coins to unlock new app themes.</p>

          <div className="theme-grid">
            {themes.map((theme) => {
              const isOwned = profile.ownedThemes.includes(theme.id);
              const canAfford = profile.coins >= theme.cost;
              const isSelected = selectedTheme.id === theme.id;

              return (
                <button
                  key={theme.id}
                  className={
                    isSelected
                      ? "theme-option selected"
                      : isOwned
                      ? "theme-option"
                      : "theme-option locked"
                  }
                  onClick={() => {
                    if (isOwned) {
                      handleThemeSelect(theme.id);
                    } else if (canAfford) {
                      handleBuyTheme(theme.id);
                    }
                  }}
                  disabled={!isOwned && !canAfford}
                >
                  <span>{theme.icon}</span>
                  <strong>{theme.name}</strong>

                  {isSelected ? (
                    <small>Selected</small>
                  ) : isOwned ? (
                    <small>Use Theme</small>
                  ) : canAfford ? (
                    <small>Buy for 🪙 {theme.cost}</small>
                  ) : (
                    <small>Need 🪙 {theme.cost}</small>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      </section>
    </AppLayout>
  );
}