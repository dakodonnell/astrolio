import { SKILL_ICON_MAP } from '../src/data/skill-icons.js';
import { PROFILE_ICON_MAP } from '../src/data/profile-icons.js';

export function iconFilter() {
  const allIcons = {
    ...SKILL_ICON_MAP,
    ...PROFILE_ICON_MAP,
  };

  const portfolioIcons = {};

  for (const icon of Object.values(allIcons)) {
    const [iconSet, iconName] = icon.split(':');
    if (!iconSet || !iconName) continue;

    if (!portfolioIcons[iconSet]) portfolioIcons[iconSet] = new Set();
    portfolioIcons[iconSet].add(iconName);
  }

  // Convert sets to arrays
  for (const iconSet in portfolioIcons) {
    portfolioIcons[iconSet] = Array.from(portfolioIcons[iconSet]);
  }

  return portfolioIcons;
}
