import { getProfile, saveProfile } from "./profile";
import { getSubjectProgress } from "./progress";

export const worldRewards = [
  {
    id: "maths",
    worldName: "Maths Kingdom",
    icon: "🏰",
    rewardText: "+100 Coins",
    coinReward: 100,
  },
  {
    id: "reading",
    worldName: "Reading Forest",
    icon: "🌳",
    rewardText: "+100 Coins",
    coinReward: 100,
  },
  {
    id: "spelling",
    worldName: "Spelling Valley",
    icon: "✏️",
    rewardText: "+100 Coins",
    coinReward: 100,
  },
  {
    id: "science",
    worldName: "Science Space",
    icon: "🚀",
    rewardText: "+100 Coins",
    coinReward: 100,
  },
];

export function getWorldRewardStatus() {
  const profile = getProfile();
  const progress = getSubjectProgress(profile);

  return worldRewards.map((reward) => {
    const worldProgress =
      progress.find((subject) => subject.id === reward.id)?.percentage || 0;

    const isComplete = worldProgress === 100;
    const isClaimed = profile.claimedWorldRewards.includes(reward.id);

    return {
      ...reward,
      percentage: worldProgress,
      isComplete,
      isClaimed,
      canClaim: isComplete && !isClaimed,
    };
  });
}

export function claimWorldReward(worldId) {
  const profile = getProfile();
  const rewards = getWorldRewardStatus();
  const reward = rewards.find((reward) => reward.id === worldId);

  if (!reward || !reward.canClaim) {
    return profile;
  }

  profile.coins += reward.coinReward;
  profile.claimedWorldRewards.push(worldId);

  saveProfile(profile);

  return profile;
}