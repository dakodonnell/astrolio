export const PROFILE_ICON_MAP = {
  // Social Links
  github: 'simple-icons:github',
  linkedin: 'simple-icons:linkedin',
  twitter: 'simple-icons:twitter',
  youtube: 'simple-icons:youtube',
  instagram: 'simple-icons:instagram',
}

const ALIASES = {
  'x' : 'twitter'
};

export function getIconName(name) {
  if (!name) return null;

  // Normalize the name to lowercase and remove special characters
  name = name.toLowerCase().replace(/[\s.+#()\/\\]/g, '');

  // Check if the name is in the aliases map
  name = ALIASES[name] ?? name;

  return PROFILE_ICON_MAP[name] ?? null;
}
  