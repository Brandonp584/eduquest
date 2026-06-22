import AppLayout from "../components/AppLayout";
import { getProfile } from "../utils/profile";
import {
  pets,
  getSelectedPet,
  buyPet,
  updatePet,
} from "../utils/pets";

export default function Shop() {
  const profile = getProfile();
  const selectedPet = getSelectedPet();

  function handleBuyPet(petId) {
    buyPet(petId);
    window.location.reload();
  }

  function handlePetSelect(petId) {
    updatePet(petId);
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
      </section>
    </AppLayout>
  );
}