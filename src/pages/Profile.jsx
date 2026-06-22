import AppLayout from "../components/AppLayout";
import { getProfile } from "../utils/profile";
import { getLevel } from "../utils/levels";
import {
  avatars,
  updateAvatar,
  getSelectedAvatar,
} from "../utils/avatars";
import {
  pets,
  getSelectedPet,
  buyPet,
  updatePet,
} from "../utils/pets";
import { getAchievements } from "../utils/achievements";
import {
  canClaimDailyReward,
  claimDailyReward,
} from "../utils/dailyRewards";
import { getSubjectProgress } from "../utils/progress";
import {
  getWorldRewardStatus,
  claimWorldReward,
} from "../utils/worldRewards";

export default function Profile() {
  const profile = getProfile();
  const level = getLevel(profile.totalXp);
  const subjectProgress = getSubjectProgress(profile);
  const achievements = getAchievements(profile);
  const selectedAvatar = getSelectedAvatar();
  const selectedPet = getSelectedPet();
  const canClaimReward = canClaimDailyReward();
  const worldRewards = getWorldRewardStatus();

  function handleAvatarSelect(avatarId) {
    updateAvatar(avatarId);
    window.location.reload();
  }

  function handleBuyPet(petId) {
    buyPet(petId);
    window.location.reload();
  }

  function handlePetSelect(petId) {
    updatePet(petId);
    window.location.reload();
  }

  function handleDailyReward() {
    claimDailyReward();
    window.location.reload();
  }

  function handleClaimWorldReward(worldId) {
    claimWorldReward(worldId);
    window.location.reload();
  }

  const nextLevelXp =
    profile.totalXp >= 500
      ? 500
      : profile.totalXp >= 250
      ? 500
      : profile.totalXp >= 100
      ? 250
      : 100;

  const progressPercent = Math.min(
    Math.round((profile.totalXp / nextLevelXp) * 100),
    100
  );

  return (
    <AppLayout>
      <section className="quests-section">
        <h1>Student Profile 👤</h1>
        <p>Your EduQuest learning progress.</p>

        <div className="profile-card">
          <div className="avatar">{selectedAvatar.icon}</div>

          <h2>{level}</h2>
          <p>⭐ {profile.totalXp} XP</p>
          <p>🪙 {profile.coins} Coins</p>
          <p>
            Pet: {selectedPet.icon} {selectedPet.name}
          </p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <p>Progress to next level: {progressPercent}%</p>
        </div>

        <div className="daily-reward-card">
          <h2>Daily Reward 🔥</h2>
          <p>Come back every day to earn bonus coins.</p>

          <button
            className="primary-btn"
            onClick={handleDailyReward}
            disabled={!canClaimReward}
          >
            {canClaimReward ? "Claim 🪙 10 Coins" : "Reward Claimed Today ✅"}
          </button>
        </div>

        <h2>Choose Your Avatar 🎨</h2>

        <div className="avatar-grid">
          {avatars.map((avatar) => {
            const isLocked = profile.totalXp < avatar.requiredXp;

            return (
              <button
                key={avatar.id}
                className={
                  selectedAvatar.id === avatar.id
                    ? "avatar-option selected"
                    : isLocked
                    ? "avatar-option locked"
                    : "avatar-option"
                }
                onClick={() => {
                  if (!isLocked) {
                    handleAvatarSelect(avatar.id);
                  }
                }}
                disabled={isLocked}
              >
                <span>{avatar.icon}</span>
                <strong>{avatar.name}</strong>

                {isLocked ? (
                  <small>🔒 Unlock at {avatar.requiredXp} XP</small>
                ) : (
                  <small>Unlocked</small>
                )}
              </button>
            );
          })}
        </div>

        <h2>Pet Companions 🐾</h2>
        <p>Use coins to unlock a learning buddy.</p>

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

                {isOwned ? (
                  <small>Owned</small>
                ) : canAfford ? (
                  <small>Buy for 🪙 {pet.cost}</small>
                ) : (
                  <small>Need 🪙 {pet.cost}</small>
                )}
              </button>
            );
          })}
        </div>

        <div className="profile-stats">
          <div>
            <h3>{profile.questsSolved}</h3>
            <p>Quests Solved</p>
          </div>

          <div>
            <h3>{profile.completedQuests.length}</h3>
            <p>Completed Quests</p>
          </div>

          <div>
            <h3>{profile.totalXp}</h3>
            <p>Total XP</p>
          </div>
        </div>

        <h2>World Progress 📊</h2>

        <div className="subject-progress-grid">
          {subjectProgress.map((subject) => (
            <div key={subject.id} className="subject-progress-card">
              <span>{subject.icon}</span>

              <div>
                <h3>{subject.name}</h3>
                <p>
                  {subject.completedCount} / {subject.totalCount} Quest Completed 
                </p>

                <div className="subject-progress-bar">
                  <div 
                    className="subject-progress-fill"
                    style={{ width: `${subject.percentage}%` }}
                  />
                </div>

                <strong>{subject.percentage}%</strong>
              </div>
            </div>
          ))}
        </div>

        <h2>World Completion Rewards 🏆</h2>

        <div className="world-reward-grid">
          {worldRewards.map((reward) => (
            <div key={reward.id} className="world-reward-card">
              <span>{reward.icon}</span>

              <h3>{reward.worldName}</h3>
              <p>{reward.percentage}% complete</p>
              <strong>{reward.rewardText}</strong>

              <button
                className="primary-btn"
                onClick={() => handleClaimWorldReward(reward.id)}
                disabled={!reward.canClaim}
              >
                {reward.isClaimed
                  ? "Claimed ✅"
                  : reward.canClaim
                  ? "Claim Reward"
                  : "Complete World First"}
              </button>
            </div>
          ))}
        </div>

        <h2>Achievements 🏆</h2>

        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={
                achievement.unlocked ? "achievement unlocked" : "achievement"
              }
            >
              <span>{achievement.icon}</span>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>

        <h2>Completed Quests ✅</h2>

        {profile.completedQuests.length === 0 ? (
          <p>No quests completed yet.</p>
        ) : (
          <ul>
            {profile.completedQuests.map((questId) => (
              <li key={questId}>{questId}</li>
            ))}
          </ul>
        )}
      </section>
    </AppLayout>
  );
}