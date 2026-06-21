import { getProfile, saveProfile } from "./profile";

export const pets = [
  { id: "puppy", name: "Puppy", icon: "🐶", cost: 0 },
  { id: "kitten", name: "Kitten", icon: "🐱", cost: 20 },
  { id: "bunny", name: "Bunny", icon: "🐰", cost: 40 },
  { id: "dragon", name: "Baby Dragon", icon: "🐲", cost: 80 },
  { id: "unicorn", name: "Mini Unicorn", icon: "🦄", cost: 120 },
];

export function getSelectedPet() {
  const profile = getProfile();

  return pets.find((pet) => pet.id === profile.selectedPet) || pets[0];
}

export function buyPet(petId) {
  const profile = getProfile();
  const pet = pets.find((pet) => pet.id === petId);

  if (!pet) return profile;
  if (profile.ownedPets.includes(petId)) return profile;
  if (profile.coins < pet.cost) return profile;

  profile.coins -= pet.cost;
  profile.ownedPets.push(petId);
  profile.selectedPet = petId;

  saveProfile(profile);

  return profile;
}

export function updatePet(petId) {
  const profile = getProfile();

  if (!profile.ownedPets.includes(petId)) {
    return profile;
  }

  profile.selectedPet = petId;
  saveProfile(profile);

  return profile;
}